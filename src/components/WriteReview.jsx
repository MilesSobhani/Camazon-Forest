import React from "react";

const WriteReview = (props) => {
//window.scrollTo(0,document.body.scrollHeight);
  return (
    <div>
      Have an opinion?
      Help others decide.
      <a href="#" className={'cs-Juan-ref'} onClick={function(){ console.log('scroll to juans component 3')}}>
        Write a Review
      </a>
    </div>
  )
}



export default WriteReview;