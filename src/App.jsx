import React from "react";
import ReactDOM from "react-dom";
import Intro from "./components/Intro.jsx"
import PopOut from "./components/PopOut.jsx"
import Qa from "./components/Qa.jsx"
//import Reviews from "./components/Reviews.jsx"
import Title from "./components/Title.jsx"
//import WriteReview from "./components/WriteReview.jsx"
import ModalClick from "./components/ModalClick.jsx";
//import CSS from 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";
import './styles/styles.css';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      //states I'll need from the group:
      //product
      //rating changes
      //
      imageList: [],
//    imageList: ["https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/halloween-trivia-jack-o-lanterns-1531163183.jpg?crop=0.619xw:0.932xh;0.0952xw,0.0677xh&resize=480:*", "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png"],
      imageUrl: "",
      productId: 0,
      clicks: 0,
      stars: 3.2,
      productName: '',
      category: "",
    }
    this.poppingOut = this.poppingOut.bind(this);
  }
  
  componentDidMount() {
    Axios.get('http://fechallowes.us-east-2.elasticbeanstalk.com//lem')
    .then((response) => {

      let urls = response.data.urls.map(url => {      
        url.URL = url.URL.split(", ");
        return url.URL;      
      })
      urls = urls.flat();
      console.log('this is response -> ',response.data);
      console.log(response.data.cate.Category);
      this.setState({
        imageList: urls,
        imageUrl: urls,
        productName: response.data.urls[0].Name,
        productId: response.data.urls[0].ID,
        category: response.data.cate[0].Category,
        })

    })
    .catch(function (error) {
      console.log('this error -> ',error);
    })
  }
  
  poppingOut () {
    this.setState(state => ({
      clicks: state.clicks + 1
    }));
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
      <Intro category={this.state.category}/>
      <Title name={this.state.productName}/>
      {/* <Reviews />
      <WriteReview /> */}
      <Qa stars={this.state.stars}/>

      <PopOut urls={this.state.imageList}  popState={this.poppingOut}/>

    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('cs'));