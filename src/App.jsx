import React from "react";
import ReactDOM from "react-dom";
import Intro from "./components/Intro.jsx"

import PopOut from "./components/PopOut.jsx"
import Qa from "./components/Qa.jsx"
import Reviews from "./components/Reviews.jsx"
import Title from "./components/Title.jsx"
import WriteReview from "./components/WriteReview.jsx"
//import CSS from 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      //states I'll need from the group:
      //product
      //rating changes
      //
      imageList: ["https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png", "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png", "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png", "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png", "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png", "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png", "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png", "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png"],
      imageUrl: "",
      productId: 0,
    }
  }
  /*pass variable version of the url, which is the first picture in the url array, to pop out.
  Pass the whole url array to PictureBar*/
  /* Button functionality to */ 
  render(){
    return (
 
//         <ModalImage
//   small={urlToTinyImageFile}
//   large={urlToHugeImageFile}
//   alt="Hello World!"
// />     
<div>
      <Intro />
      <Title />
      <Reviews />
      <WriteReview />
      <Qa />

      <PopOut urls={this.state.imageList}/>

    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('cs'));