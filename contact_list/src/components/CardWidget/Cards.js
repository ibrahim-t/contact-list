import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 480,
  },
  media: {
    height: 140,
  },
});

export default function ContactInfo(props) {
  const classes = useStyles();
const {detail}=props
if(!detail){
  return  <h3> No user Selected to Show</h3>;
}
 return <Card  className={classes.root} style={{"textAlign":"center",marginTop:"30px"}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {detail["BasicInfo"]}
          </Typography>
          <Typography gutterBottom variant="h6" component="h3">
            {`${detail["FullName"]}`}
          </Typography>
         <div>
  {Object.keys(detail).map(t=><h3><span style={{float:"left"}}>{t}</span> :<span style={{float:"right"}}>{detail[t]}</span></h3>)}
             </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>;
}
