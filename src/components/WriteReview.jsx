import React from "react";

const WriteReview = (props) => {
//window.scrollTo(0,document.body.scrollHeight);
  return (
    <div>
      Have an opinion?
      Help others decide.
      <a href="#" onClick={function(){ console.log('scroll to juans component 2')}}>
        Write a Review
      </a>
    </div>
  )
}



export default WriteReview;