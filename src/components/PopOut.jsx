import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
//import PictureBar from "./PictureBar.jsx"

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 600,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 0, 0, 25),
  },
  root : {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 300,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function PopOut(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    
    <div>
      <button type="button" onClick={handleOpen}>
        {/* <button> + </button> */}
      <img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/halloween-trivia-jack-o-lanterns-1531163183.jpg?crop=0.619xw:0.932xh;0.0952xw,0.0677xh&resize=480:*' />
      <div className={classes.root}>
      <GridList cellHeight={100} className={classes.gridList}>
        <GridListTile key="Subheader" cols={1} style={{ height: 'auto' }}>
          <ListSubheader component="div">picture bar</ListSubheader>
        </GridListTile>
        {props.urls.map(tile => (
          <GridListTile key={tile}>
            <img src={tile} alt={tile} />

          </GridListTile>
        ))}
      </GridList>
    </div>

      </button>
      <Modal
        // className={mobile-grid-50}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>

          <h2 id="simple-modal-title">Text in a modal</h2>
          {/* <button id="simple-modal-description">
            +
          </button> */}
          <PopOut />
        </div>
      </Modal>
    </div>
  );
}
