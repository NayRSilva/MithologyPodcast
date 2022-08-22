import { CustomSecondTilte } from './styles/componentStyles';
import TextBox from './TextBox';
import Markdown from 'markdown-to-jsx';

type ESectionProps = {
  id?: string | undefined;
  children?: JSX.Element[] | JSX.Element;
  text: string;
};

export function TranscriptionSection(props: ESectionProps) {
  return (
    <section>
      <CustomSecondTilte>Transcrição do Episódio</CustomSecondTilte>
      <TextBox>
        <Markdown>{props.text}</Markdown>
      </TextBox>
    </section>
  );
}

export default TranscriptionSection;
