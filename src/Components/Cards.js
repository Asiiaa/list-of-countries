import * as React from 'react';

import {Card} from '@mui/material';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Cards({img, name, capital, population, area}) {
  return (
    <div>
      <Card className='Card' sx={{ maxWidth: 345, minWidth: 200 }}>
      <CardActionArea className='card-action'>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent className='card-content'>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2">
            City: {capital}
          </Typography>
          <Typography variant="body2">
            Population: {population}
          </Typography>
          <Typography variant="body2">
            Area: {area} км²
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}