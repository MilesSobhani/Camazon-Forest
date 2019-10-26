import React from "react";

const Intro = (props) => {
  return (
    <div className={'cs-categories cs-topmost'}>
      <a href='#' className={'cs-categories'}>
         Hallowes 
      </a>
      &nbsp; &nbsp; &nbsp; > &nbsp; &nbsp; &nbsp; 
      <a href='#' className={'cs-categories'}>
         Home Decor 
      </a>
      &nbsp; &nbsp; &nbsp; > &nbsp; &nbsp; &nbsp;
      <a href='#' className={'cs-categories'}>
         Spooky 
      </a>
       &nbsp; &nbsp; &nbsp;> &nbsp; &nbsp; &nbsp; 
      <a href='#' className={'cs-categories'}>
        { props.category}
      </a>
    </div>
    )
}


export default Intro