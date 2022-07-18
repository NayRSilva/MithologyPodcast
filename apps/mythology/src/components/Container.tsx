import { MainDiv } from "./styles/componentStyles";

type ContainerProps = {
    children: JSX.Element[] | JSX.Element;
}

export function Container(props: ContainerProps) {
    return (
      <MainDiv>
        {props.children}
      </MainDiv>
    );
  }
  
  export default Container;
  