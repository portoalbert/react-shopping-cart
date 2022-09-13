const Cart = (props) => {
  return (
    <div className="itemlist">
      <div>
        <img src={props.src} alt="" />
        <h2> {props.name} </h2>
      </div>
      <h2> {props.price} </h2>
      <h2> {props.quantity} </h2>
      <h2>{props.total}</h2>
    </div>
  );
};

export default Cart;
