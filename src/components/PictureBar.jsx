import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';
// import tileData from './tileData';

const useStyles = makeStyles(theme => ({
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

const PictureBar = (props) => {
  const classes = useStyles();
  return (
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
  )
}


export default PictureBar   
/*{<img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png" /> }
   <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png" />
   <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png" />
   <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png" />
   <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png" />*/