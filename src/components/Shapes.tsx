function Shapes(props: any) {
  return (
    <img
      src={props.url}
      height={props.dimension}
      width={props.dimension}
      style={{
        position: "absolute",
        zIndex: 0,
        margin: props.y + "% 0% 0% " + props.x + "%",
        overflow: "clip",
      }}
    />
  );
}

export default Shapes;
