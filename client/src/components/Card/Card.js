import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
  return (
    <Card sx={{ width: 270 , marginRight: 10, marginBottom: 10, border: '1px solid black' }}>
      <CardMedia
        sx={{ height: 180 }}
        image={props.char.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.char.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.char.gender} 
          <br/>
          {props.char.species}
          <br/>
          {props.char.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Sheare</Button>
        <Button size="small">Learnrr More</Button>
      </CardActions>
    </Card>
  );
}