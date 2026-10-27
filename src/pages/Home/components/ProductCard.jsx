function ProductCard(props) {
  return (
    <div className="conta2BOx">
        <img className="theiamges" src={props.img} alt="" />
      <h1>{props.name}</h1>
      <p>PRICE :  {props.price}</p>
      <div className="divbtns">
         <button onClick={props.onIncrease}>+</button>
      <p>QUANTITY : {props.quantity}</p>
      <button onClick={props.onDecrease}>-</button>
    <button onClick={props.rm}>Remove</button>
      </div>
   
      
     

    </div>
  );
}

export default ProductCard;