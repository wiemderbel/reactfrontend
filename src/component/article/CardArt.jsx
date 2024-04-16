import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';

const CardArt = ({art,index}) => {
  return (
    <div>
     <Card className='mb-5' key={index} sx={{ maxWidth: 'auto',margin:1 }}>
            <CardMedia
            sx={{ height: 180 }}
            image={art.imageart}
          />
          <CardContent >
            <Typography gutterBottom variant="h6" component="div">
             {art.reference}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
             {art.designation.substring(0,20)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <strong> Prix:{art.prix} Dt</strong> 
            </Typography>
          </CardContent>
          <CardActions>

          <IconButton aria-label="add to favorites" >
          <FavoriteIcon />
            </IconButton>

            <IconButton aria-label="share" style={{ marginRight: '15px' }}>
          <ShareIcon />
        </IconButton>


            <Button  disabled={art.qtestock<=1} variant="contained"   >
                {art.qtestock<=1? "OUT OF SOLD": "Add to cart"}
                </Button>
          </CardActions>
        </Card>
    </div>
)
}

export default CardArt
