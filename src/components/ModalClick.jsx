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
const modalRoot = document.getElementById('modal-root')


class ModalClick extends React.Component {
   constructor(props){
      super(props);
      this.state={
         setShow: false,
         container: null,
      }
   };

   render(){
   return (
   <div className={'cs-most-of-component'}>

   <div className={"gridList"}>
      {this.props.urls.map(tile => (
         <button className={'cs-grid'}  onClick={() => {this.state.setOpen ? this.setState({setOpen: false}) : this.setState({setOpen: true})} }>
         <img className={'cs-images'} src={tile} alt={tile}/>
         </button>
         
         ))}
      </div>
      <button onClick={() => {this.state.setOpen ? this.setState({setOpen: false}) : this.setState({setOpen: true})} }>
         <img src={this.props.urls[0]} />
      </button>
      </div>
        );
   }
}


export default ModalClick   
/*{<img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png" /> }
   <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png" />
   <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png" />
   <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png" />
   <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png" />*/