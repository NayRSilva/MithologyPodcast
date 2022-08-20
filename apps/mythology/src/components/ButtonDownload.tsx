import { ButtonGeneral } from './episodesStyle';
import AWS from 'aws-sdk';

type ButtonProps = {
  downloadUrl: string;
  idEp: string;
};

const getKey = (url: string) => {
  const index = url.lastIndexOf('/');

  return url.substring(index + 1);
};

AWS.config.update({
  accessKeyId: process.env.NX_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.NX_AWS_ACCESS_SECRET,
});
const bucket = 'mythology-podcast';

const s3 = new AWS.S3({ params: { Bucket: bucket } });

const downloadEP = (epUrl: string, id: string) => {
  const key = getKey(epUrl);
  console.log('k ', key);
  const params = { Bucket: bucket, Key: key };

  s3.getObject(params, (err, data) => {
    if (err) {
      console.log(err, err.stack);
    } else {
      console.log(data);
      const blob = new Blob([data.Body as BlobPart], {
        type: data.ContentType,
      });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'Episode_' + id;
      link.click();
    }
  });
};

export function ButtonDownload(props: ButtonProps) {
  return (
    <ButtonGeneral onClick={() => downloadEP(props.downloadUrl, props.idEp)}>
      Baixar
    </ButtonGeneral>
  );
}

export default ButtonDownload;
