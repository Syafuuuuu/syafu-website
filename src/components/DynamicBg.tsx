import Shapes from "./Shapes.tsx";
import BlockReveal from "./BlockReveal.tsx";

function DynamicBg(props: any) {
  if (props.type == "Dev") {
    return (
      <>
        <BlockReveal>
          <Shapes url="./assets/devCube1.png" dimension="500" x="-45" y="15" />
        </BlockReveal>
        <BlockReveal>
          <Shapes url="./assets/devCube3.png" dimension="300" x="10" y="30" />
        </BlockReveal>
        <BlockReveal>
          <Shapes url="./assets/devCube2.png" dimension="400" x="15" y="1" />
        </BlockReveal>
        <BlockReveal>
          <Shapes url="./assets/devCube4.png" dimension="300" x="-50" y="10" />
        </BlockReveal>
        <BlockReveal>
          <Shapes url="./assets/devCube5.png" dimension="300" x="20" y="30" />
        </BlockReveal>
      </>
    );
  } else if (props.type == "Da") {
    return (
      <>
        <BlockReveal>
          <Shapes url="./assets/Ai1.png" dimension="500" x="-45" y="15" />
        </BlockReveal>
        <BlockReveal>
          <Shapes url="./assets/Ai3.png" dimension="300" x="10" y="30" />
        </BlockReveal>
        <BlockReveal>
          <Shapes url="./assets/Ai2.png" dimension="400" x="15" y="1" />
        </BlockReveal>
        <BlockReveal>
          <Shapes url="./assets/Ai4.png" dimension="300" x="-50" y="10" />
        </BlockReveal>
        <BlockReveal>
          <Shapes url="./assets/Ai5.png" dimension="300" x="20" y="30" />
        </BlockReveal>
      </>
    );
  } else if (props.type == "Dsg") {
    return (
      <>
        <BlockReveal>
          <Shapes url="./assets/Dsg1.png" dimension="500" x="-45" y="15" />
        </BlockReveal>
        <BlockReveal>
          <Shapes url="./assets/Dsg3.png" dimension="300" x="10" y="30" />
        </BlockReveal>
        <BlockReveal>
          <Shapes url="./assets/Dsg2.png" dimension="400" x="15" y="1" />
        </BlockReveal>
        <BlockReveal>
          <Shapes url="./assets/Dsg4.png" dimension="300" x="-50" y="10" />
        </BlockReveal>
        <BlockReveal>
          <Shapes url="./assets/Dsg5.png" dimension="300" x="20" y="30" />
        </BlockReveal>
      </>
    );
  } else {
    return <></>;
  }
}

export default DynamicBg;
