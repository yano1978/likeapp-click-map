import React from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Comments from './components/Comments';
import { makeStyles} from '@material-ui/core/styles';


const headerStyles = makeStyles(theme => (
  {
  titleStyle: {
    color: '#008000',
    paddingTop: '10%',
    textAlign: 'left'
  },
  introStyle: {
    color: '#000000',
    textAlign: 'left',
    fontSize: '17px'
  }
}));

export default function Album() {
  const classes = headerStyles();

  return (
    <React.Fragment>
        <main>
        <div>
          <Container maxWidth="sm">
            <div>
            <Typography component="h3" variant="h4" align="center" gutterBottom className={classes.titleStyle}>
              Valoraciones producto
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph className={classes.introStyle}>
             Aquí puedes consultar las ultimas valoraciones que los usuarios han hecho sobre este producto
            </Typography>
            </div>
          </Container>
        </div>
          <Comments></Comments>
      </main>
    </React.Fragment>
  );
}