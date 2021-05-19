import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import Rating from "./Rating";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import CardActions from "@material-ui/core/CardActions";
import Like from './Like';


const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    paddingTop: "5%",
    paddingRight: "5%",
    paddingLeft: "5%",
    paddingBottom: "0%",
    textAlign: "justify",
    fontFamily: `Arial`
  },
  cardContent: {
    flexGrow: 1
  },
  userStyle: {
    color: "#a6a6a6",
    fontSize: "12px",
    fontWeight: "bold"
  },
  imgStyle: {
    margin: "10px 0"
  },
  textBody: {
    lineHeight: "25px"
  }
}));

export const Comments = () => {
  const [comments, setComments] = useState([]);
  const classes = useStyles();

  const convertDate = myDate => {
    const dateParse = new Date(myDate);
    return dateParse.toDateString();
  };
  
  useEffect(() => {
    axios
      .get(
        "https://my-json-server.typicode.com/yano1978/json-repo/comments?postId=1"
      )
      .then(res => {
        setComments(res.data);
      });
  }, []);

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {comments.map((comment, idx) => (
          <Grid item key={idx} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <Rating />
              <br />
              <span className={classes.userStyle}>
                {comment.author} - {convertDate(comment.date)}
              </span>
              <br />
              <img src={comment.imageUrl} className={classes.imgStyle} alt={comment.imageUrl} />
              <span className={classes.textBody}>{comment.body}</span>    
                <CardActions>
                  <Like />
                </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Comments;
