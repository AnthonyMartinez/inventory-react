const Item = (props) => (
  <li>
    {props.name}    
    <input type="input" defaultValue={props.amount} />
    <button>-</button>
    <button>+</button>
  </li>
);

export default Item;
