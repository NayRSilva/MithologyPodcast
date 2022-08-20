import { CommonDiv } from './styles/componentStyles';

type BannerProps = {
  children: JSX.Element[] | JSX.Element;
};

export function Banner(props: BannerProps) {
  return (
    <CommonDiv>
      <div>{props.children}</div>
    </CommonDiv>
  );
}

export default Banner;
