import React from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Comments from './components/Comments';
import { makeStyles} from '@material-ui/core/styles';


const headerStyles = makeStyles(theme => (
  {
  titleStyle: {
    color: '#72bcd4',
    paddingTop: '10%',
    textAlign: 'center'
  },
  introStyle: {
    color: '#000000',
    textAlign: 'center',
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
              Product reviews
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph className={classes.introStyle}>
              Here you can check the latest ratings that users have made about this product
            </Typography>
            </div>
          </Container>
        </div>
          <Comments></Comments>
      </main>
    </React.Fragment>
  );
}