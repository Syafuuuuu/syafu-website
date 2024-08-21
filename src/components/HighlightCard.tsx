function HighlightCard(props: any) {
  return (
    <div className="highcard">
      <div className="highcard-title">
        <h3>{props.title}</h3>
      </div>
      <div className="highcard-desc">
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default HighlightCard;
