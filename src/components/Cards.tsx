import Card from "react-bootstrap/Card";

function Cards(props: any) {
  return (
    <Card className="Cards">
      <Card.Img variant="top" src={props.img} />
      <Card.Title>Title: {props.name}</Card.Title>
      <Card.Text>Desc: {props.desc}</Card.Text>
    </Card>
  );
}

export default Cards;
