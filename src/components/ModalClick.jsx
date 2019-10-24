import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Modal from "@material-ui/core";
import Portal from '@material-ui/core/Portal';
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';
// import tileData from './tileData';
const modalRoot = document.getElementById('modal-root');
// const useStyles = makeStyles({
//    productImage: {
//       transform: matrix(1, 0, 0, 1, 0, 0),
//       // backface-visibility: hidden,
//       // transform-origin: 50% 50%; cursor: move, 
//       // transition: transform 200ms ease-in-out 0s,
//    },
// })

class ModalClick extends React.Component {
   constructor(props){
      super(props);
      this.state={
         setShow: false,
         container: null,
         focus: this.props.focus,
         horizon: 0,
         vertices: 0,
         zoom: 1,
         zoom2: 1,
         cX: 0,
         cY: 0,
      }
   };


      // componentDidUpdate(){

      // }
   render(){
      return (
         <div className={'cs-modal'}>

            <div className={"cs-grid-modal"}>
            {this.props.urls.map((tile, k) => (
               <button className={'cs-grid'} key={k} onClick={(e) => { this.setState({focus: k}); console.log(k); this.setState({zoom: 1, zoom2: 1})}}>
               <img className={'cs-icons cs-images'} src={tile} alt={tile}/>
               </button>
            ))}
            </div>

      <div className="cs-modal-focus-div">
         
            <img className="product-image cs-images" /* onMouseDown={(e) =>{this.setState({cX: -e.pageX, cY: -e.pageY}); console.log(this.state.cY);}} onMouseMove={(e) =>{this.setState({horizon: e.pageX + this.state.cX, vertices:e.pageY + this.state.cY})}}*/  style={({'transform': `matrix(${this.state.zoom}, 0, 0, ${this.state.zoom2}, ${this.state.horizon}, ${this.state.vertices})`})} src={this.props.urls[this.state.focus]} alt={this.props.urls[this.state.focus + 1]} />
      {/* </button> */}   
      <nav className={"cs-zoom-nav"}>
      <button className={"cs-zoom"} onClick={() => {if(this.state.zoom < 4){this.setState({zoom: this.state.zoom += .3})}; if(this.state.zoom2 < 4){this.setState({zoom2: this.state.zoom2 += .3})}; console.log(this.state.zoom)}}>+</button>
      <button className={"cs-zoom" } onClick={() => {if(this.state.zoom > 1){this.setState({zoom: this.state.zoom -= .3})}; if(this.state.zoom2 > 1){this.setState({zoom2: this.state.zoom2 -= .3})}; console.log(this.state.zoom)}}>-</button>
      <button className={"cs-zoom" } onClick={() => {this.setState({zoom: 1, zoom2: 1, horizon: 0, vertices: 0}); console.log(this.state.zoom)}}>O</button>
      {/* <button onClick={() => {this.state.setOpen ? this.setState({setOpen: false}) : this.setState({setOpen: true})} }> */}
   </nav>
   </div>
</div>
);
}
}
// const style = {
//    root: {
//       flexGrow: 1,
//     },
//     paper: {
//       padding: theme.spacing(2),
//       textAlign: 'center',
//       color: theme.palette.text.secondary,
//     },
// }

export default ModalClick   
/*{<img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png" /> }
   <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png" />
   <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png" />
   <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png" />
   <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png" />*/




   // 