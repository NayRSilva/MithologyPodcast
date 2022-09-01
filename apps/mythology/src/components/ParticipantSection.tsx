import { useCallback, useState } from 'react';
import ParticipantCard from './ParticipantCard';
import { CustomSecondTilte, LateralSliderDiv } from './styles/componentStyles';

type ESectionProps = {
  id?: string | undefined;
  children?: JSX.Element[] | JSX.Element;
  participants: Array<any | undefined>;
};

export function ParticipantSection(props: ESectionProps) {
  console.log('Parti', props.participants);
  const [width, setWidth] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  const size = props.participants.length;
  const cardsWidth = size * cardWidth;

  const measuredRef = useCallback((node) => {
    if (node !== null) {
      setWidth(node.getBoundingClientRect().width);
    }
  }, []);

  const measuredCard = useCallback((node) => {
    if (node !== null) {
      setCardWidth(node.getBoundingClientRect().width);
    }
  }, []);
  const isSmallerThenContainer = () => {
    if (cardsWidth < width) {
      // console.log('smaller ', width);
      return true;
    }
    // console.log('noy small', width, cardsWidth, cardWidth);
    return false;
  };
  return (
    <section ref={measuredRef}>
      <CustomSecondTilte>Participantes:</CustomSecondTilte>
      <LateralSliderDiv
        tabIndex={0}
        className={isSmallerThenContainer() ? 'center-small' : ''}
      >
        {props.participants.map((participant, i) => {
          if (i === 0) {
            return (
              <div ref={measuredCard} key={i}>
                <ParticipantCard participant={participant}></ParticipantCard>
              </div>
            );
          }
          return (
            <ParticipantCard
              key={'participant' + i}
              participant={participant}
            ></ParticipantCard>
          );
        })}
      </LateralSliderDiv>
    </section>
  );
}

export default ParticipantSection;
