import { useCallback, useState } from 'react';
import EpisodeCard from './EpisodeCard';

import { LateralSliderDiv } from './styles/componentStyles';
type SliderEpisodeProps = {
  children?: JSX.Element[] | JSX.Element;
  episodes?: any;
};

export function SliderEpisode(props: SliderEpisodeProps) {
  let episodeSize = props.episodes.length + 1;
  const [width, setWidth] = useState(0);

  const [cardWidth, setCardWidth] = useState(0);
  const size = props.episodes.length;
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
    <div style={sliderDiv} ref={measuredRef} id="sliderDiv">


      <LateralSliderDiv
        tabIndex={0}
        className={isSmallerThenContainer() ? 'center-small' : ''}
      >
        {props.episodes.map((e, i) => {
          episodeSize--;
          if(i===0){
            return (
              <div ref={measuredCard}>
                <EpisodeCard key={"ep"+i} episode={e} id={episodeSize.toString()}></EpisodeCard>
              </div>
            );
          }
          return (
            <EpisodeCard key={"ep"+i} episode={e} id={episodeSize.toString()}></EpisodeCard>
          );
        })}
      </LateralSliderDiv>
    </div>
  );
}

export default SliderEpisode;

const sliderDiv = {
  width: '80%',
  margin: '5% 10%',
};
