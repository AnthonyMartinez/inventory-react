import Item from './Item.js';


const Section = (props) => {
  return (
  <div>
    <h3>{props.name}</h3>
    <ul>{
      props.data.map( (x, i) => { 
          return (
            <Item name={x["name"]} amount={x["amount"]} key ={i}/>)
        })
    }</ul>
  </div>
  )
};

export default Section;
