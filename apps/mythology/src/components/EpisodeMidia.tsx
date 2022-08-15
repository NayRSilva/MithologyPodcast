import ControlledSpotify from './ControlledSpotify';
import EmbedSpotify from './EmbedSpotify';
import {
  BoldTitle,
  ComponentDiv,
  EpisodeInfo,
  GridDiv,
  LightTitle,
  Titles,
} from './styles/componentStyles';
import { ButtonGeneral, ComponentEpisodeDiv } from './episodesStyle';
import YoutubeEmbed from './YoutubeEmbed';
import { EpisodeAttributes } from './model/episodeAttributes';
import AWS from 'aws-sdk';

//"https://mythology-podcast.s3.amazonaws.com/MP_3_DOWNLOAD_TO_Devil_Town_64k_5744e2cbfe.mp3"
AWS.config.update({
  accessKeyId: 'AKIA3Y36L2R5WNSI7ZWH',
  secretAccessKey: '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',
});

type Episode = {
  id: string;
  attributes: EpisodeAttributes;
};
const bucket = 'mythology-podcast';

const s3 = new AWS.S3({ params: { Bucket: bucket } });
type EMidiaProps = {
  id: string | undefined;
  children?: JSX.Element[] | JSX.Element;
  episode: Episode | undefined;
};
const getYoutubeId = (url: string) => {
  const index = url.lastIndexOf('/');

  return url.substring(index + 1);
};

const getKey = (url: string) => {
  const index = url.lastIndexOf('/');

  return url.substring(index + 1);
};

const downloadEP = (epUrl: string, id: string) => {
  const key = getKey(epUrl);
  console.log('k ', key);
  const params = { Bucket: bucket, Key: key };
  // s3.getObject(params, (err, data) => {
  //   console.log(data);
  //   const blob = new Blob([data.Body as BlobPart], { type: data.ContentType });
  //   const link = document.createElement('a');
  //   link.href = window.URL.createObjectURL(blob);
  //   link.download = epUrl;
  //   link.click();
  // });

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
export function EpisodeMidia(props: EMidiaProps) {
  let urlSpotify = '';
  let urlYoutube = '';
  let downloadUrl = '';
  let id = '';
  id = id + props.id;
  urlYoutube = urlYoutube + props.episode?.attributes.youtube;
  urlSpotify = urlSpotify + props.episode?.attributes.spotify;
  downloadUrl =
    downloadUrl + props.episode?.attributes.audio.data.attributes.url;
  const ytId = getYoutubeId(urlYoutube);
  const date = new Date(props.episode?.attributes.createdAt);
  const option = {
    day: '2-digit',
    year: 'numeric',

    month: 'long',
  } as const;
  console.log('Spoti:', date.toLocaleDateString('pt-br', option));

  return (
    <>
      <EpisodeInfo>Escute via Youtube ou Spotify</EpisodeInfo>

      <YoutubeEmbed embedId={ytId}></YoutubeEmbed>
      <ControlledSpotify url={urlSpotify}></ControlledSpotify>
      <ComponentEpisodeDiv>
        <EpisodeInfo style={leftInfo}>
          {date.toLocaleDateString('pt-br', option)}
        </EpisodeInfo>
        <div style={rightButton}>
          <a href={downloadUrl} download>
            Download
          </a>

          <ButtonGeneral onClick={() => downloadEP(downloadUrl, id)}>
            Baixar
          </ButtonGeneral>
        </div>
      </ComponentEpisodeDiv>
    </>
  );
}

const leftInfo = {
  width: '40%',
};

const rightButton = {
  width: '60%',
  display: 'flex',
  marginLeft: '10%',
  justifyContent: 'flex-end',
};

export default EpisodeMidia;
