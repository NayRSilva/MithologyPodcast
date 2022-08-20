import { TranscriptionBox } from './styles/componentStyles';

type ContainerProps = {
  children?: JSX.Element[] | JSX.Element;
};

export function TextBox(props: ContainerProps) {
  // const transcribe = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "
  return <TranscriptionBox tabIndex={0}>{props.children}</TranscriptionBox>;
}

export default TextBox;
