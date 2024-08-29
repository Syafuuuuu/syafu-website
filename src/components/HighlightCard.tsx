function HighlightCard(props: any) {
  return (
    <a
      className="highcard"
      style={{ backgroundImage: "url(" + props.pic + ")" }}
      href={props.url}
    >
      <div className="highcard-title">
        <h3>{props.title}</h3>
      </div>
    </a>
  );
}

export default HighlightCard;
