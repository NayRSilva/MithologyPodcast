import { CustomSecondTilte } from "./styles/componentStyles";
import TextBox from "./TextBox";


type ESectionProps = {
    id?: string|undefined;
    children?: JSX.Element[] | JSX.Element;
}

export function TranscriptionSection(props: ESectionProps) {
    return (
      <section>
            <CustomSecondTilte>Transcrição do Episódio</CustomSecondTilte>
            <TextBox>

            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>

                
            </TextBox>


      </section>
    );
  }
  
  export default TranscriptionSection;
  