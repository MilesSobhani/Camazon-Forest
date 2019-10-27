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
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import Axios from "axios";
import './styles/styles.css';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      //states I'll need from the group:
      //product
      //rating changes
      imageList: [],
//    imageList: ["https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/halloween-trivia-jack-o-lanterns-1531163183.jpg?crop=0.619xw:0.932xh;0.0952xw,0.0677xh&resize=480:*", "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png"],
      imageUrl: "",
      productId: 0,
      clicks: 0,
      stars: 0,
      productName: '',
      category: "",
      numberOfReviews : 0,
      starsArray: [0, 0, 0, 0, 0],
    }
    this.poppingOut = this.poppingOut.bind(this);
  }
  //
  componentDidMount() {

    Axios.post('http://fechallowes.us-east-2.elasticbeanstalk.com/lem', {
      productId: 1
    })
    .then((response) => {

      // let urls = response.data.urls.map(url => {      
      //   url.URL = url.URL.split(", ");
      //   return url.URL;      
      // })
      // urls = urls.flat();
      // console.log('this is response.data -> ',response.data);
      // console.log(response.data.cate.Category);
      this.setState({
  //Most comments in this get request are due to needing to pivot to a different database.
        // imageList: urls,
        // imageUrl: urls,
        // productName: response.data.urls[0].Name,
        // productId: response.data.urls[0].ID,
        // category: response.data.cate[0].Category,
        imageList: response.data[0].picture,
        productId: response.data[0].id,
        imageUrl: response.data[0].picture,
        productName: response.data[0].name,
        category: response.data[0].categoryname,
        stars: response.data[0].rating,
        numberOfReviews: response.data[0].numReviews,
        
        })
    })
    .catch(function (error) {
      console.log('this error -> ',error);
    }),

    window.addEventListener("changeItem", (e) => {
      Axios.post('http://fechallowes.us-east-2.elasticbeanstalk.com/lem', {
        productId: e.detail
        //e.detail,
      }) 
      .then(response => {

        console.log('this is response.data -> ',response.data[0]);

        this.setState({
          imageList: response.data[0].picture,
          productId: response.data[0].id,
          imageUrl: response.data[0].picture,
          productName: response.data[0].name,
          category: response.data[0].categoryname,
          stars: response.data[0].rating,
          numberOfReviews: response.data[0].numReviews,
          })
          
      })
      .catch(function (error) {
        console.log('this error -> ',error);

    })
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
      <Title name={this.state.productName} id={this.state.productId}/>
      {/* <Reviews />
      <WriteReview /> */}
      <Qa stars={this.state.stars} revs={this.state.numberOfReviews} starsArray={this.state.starsArray}/>

      <PopOut urls={this.state.imageList}  popState={this.poppingOut}/>

    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('cs'));