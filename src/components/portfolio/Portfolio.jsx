import "./portfolio.scss"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <div className="portfolio" id="portfolio">
      <div className="title">
      <h6>Portfolio</h6>
      </div>
      <div className="container">
        <Card sx={{ maxWidth: 345 }} elevation="24" id="cardMovies" className="cards">
          <CardMedia
            component="img"
            height="200"
            image="img/movies.png"
            alt="projet movies"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Movies
            </Typography>
            <Typography variant="body2" color="#ee0e89">
              D'accord on est loing de Netflix, le catalogue est un peu léger et on ne peut voir que les bandes annonces. Mais c'est gratuit !
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="secondary" href="http://movies.lfcyou.com/" target="_blank">Voir le site</Button>
            <Button size="small">Github</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }} elevation="24" id="cardlfcyou" className="cards">
          <CardMedia
            component="img"
            height="200"
            image="img/canayou.png"
            alt="projet lfcyou"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              La fabrique de Canayou
            </Typography>
            <Typography variant="body2" color="#ee0e89">
              Site E-commerce sous Wordpress et Woocommerce. Le portail incontournable des couturières amateurs.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href="https://lfcyou.com/" target="_blank">Voir le site</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }} elevation="24" id="cardchambord" className="cards">
          <CardMedia
            component="img"
            height="200"
            image="img/chambord.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Hotel Chambord
            </Typography>
            <Typography variant="body2" color="#ee0e89">
              Mon premier site statique. Très loin des standards de l'hotélerie de luxe, mais personnellement j'adore mes animations.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href="https://sylvain-campos.pagesperso-orange.fr/" target="_blank">Voir le site</Button>
            <Button size="small">Github</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }} elevation="24" id="cardMovies" className="cards">
          <CardMedia
            component="img"
            height="200"
            image="img/swap.png"
            alt="swap"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Swap
            </Typography>
            <Typography variant="body2" color="#ee0e89">
              Le bon coin n'a cas bien ce tenir. Site de petites annonces en PHP procédural et base de données mySQL.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="secondary" href="http://sylvaincampos.lescigales.org/" target="_blank">Voir le site</Button>
            <Button size="small" color="secondary">Github</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}