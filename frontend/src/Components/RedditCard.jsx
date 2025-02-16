import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function RedditCard() {
  return (
    <Card sx={{ width: 290, textAlign: "center" ,m : 2,boxShadow: "0" , backgroundColor: "#1A1A2E", color: "white"}}>
        <CardMedia
          component="img"
          height="250"
          image="https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-Spinach-Pasta-close.jpg"
          alt="pasta"

        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Pasta
          </Typography>
        </CardContent>
    </Card>
  );
}