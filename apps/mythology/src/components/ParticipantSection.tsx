import { useCallback, useState } from 'react';
import ControlledSpotify from './ControlledSpotify';
import EpisodeMidia from './EpisodeMidia';
import ParticipantCard from './ParticipantCard';
import {
  BoldTitle,
  CustomSecondTilte,
  GridDiv,
  LateralSliderDiv,
  LightTitle,
  Titles,
} from './styles/componentStyles';

type ESectionProps = {
  id?: string | undefined;
  children?: JSX.Element[] | JSX.Element;
  participants: Array<any | undefined>;
};

export function ParticipantSection(props: ESectionProps) {
  const [width, setWidth] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  const size = 5;
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
      console.log('smaller ', width);
      return true;
    }
    console.log('noy small', width, cardsWidth, cardWidth);
    return false;
  };
  return (
    <section ref={measuredRef}>
      <CustomSecondTilte>Participantes:</CustomSecondTilte>
      <LateralSliderDiv
        tabIndex={0}
        className={isSmallerThenContainer() ? 'center-small' : ''}
      >
        <div ref={measuredCard}>
          <ParticipantCard></ParticipantCard>
        </div>
        <ParticipantCard></ParticipantCard>
        <ParticipantCard></ParticipantCard>
        <ParticipantCard></ParticipantCard>

        <ParticipantCard></ParticipantCard>
      </LateralSliderDiv>
    </section>
  );
}

export default ParticipantSection;
