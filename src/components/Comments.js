import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Rating from "./Rating";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { green, grey } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

const ColorButton = withStyles(theme => ({
  root: {
    color: "#ffffff",
    backgroundColor: green[800],
    "&:hover": {
      backgroundColor: grey[500]
    },
    fontFamily: "Arial",
    textTransform: "none",
    whiteSpace: "nowrap"
  }
}))(Button);

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
  textBody: {
    lineHeight: "25px"
  },
  userLikes: {
    color: "#a6a6a6",
    fontSize: "14px",
    textAlign: "left"
  }
}));

const clicks = [
  {
    id : 1,
    rating: ''
  },
  {
    id : 2,
    rating: ''
  },
  {
    id : 3,
    rating: 'click'
  },
  {
    id : 4,
    rating: 'click'
  },
  {
    id : 5,
    rating: 'click'
  },
  {
    id : 6,
    rating: 'click'
  }
]


export const Comments = () => {
  const [comments, setComments] = useState([]);
  const [count, setCount] = useState(0);
  const classes = useStyles();
  const getCounts = () => {
    return clicks.map(({id, rating}) => {
      return <ColorButton
      key={id}
      rating='true'
      variant="contained"
      color="primary"
      onClick={() => setCount(count + 1)}
      >
      <ThumbUpAltIcon></ThumbUpAltIcon> Es útil
    </ColorButton>
    })
  }

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
              <Rating></Rating>
              <br />
              <span className={classes.userStyle}>
                {comment.author} el {convertDate(comment.date)}
              </span>
              <br />
              <span className={classes.textBody}>{comment.body}</span>
              <CardActions>
                {getCounts() + console.log(count)}
                <CardContent size="small" color="primary">
                  <span className={classes.userLikes}>
                    {count} personas creéis que es útil
                  </span>
                </CardContent>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Comments;
