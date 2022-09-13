import Card from "../components/Card";

function Main(props) {
  return (
    <div>
      <Card
        key={props.id}
        src={props.src}
        name={props.name}
        price={props.price}
        description={props.description}
        onClick={props.onClick}
      />
    </div>
  );
}

export default Main;
