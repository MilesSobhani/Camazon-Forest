import React from "react";

const Title = (props) => {
  return (
    <div className={'cs-title'}> 
  <div className={"cs-id"}>
  Item #{props.id}  Model  #{props.id}
  </div>
    
  <h2 className={'title'}>
   {props.name} 
  </h2>

</div>
)
}


export default Title