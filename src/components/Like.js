import React, { Component } from 'react';
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { grey } from "@material-ui/core/colors";
import Votes from './Votes';

const ColorButton = withStyles(theme => ({
    root: {
        color: "#ffffff",
        backgroundColor: "#72bcd4",
        "&:hover": {
            backgroundColor: grey[500]
        },
        fontFamily: "Arial",
        textTransform: "none",
        whiteSpace: "nowrap"
    }
}))(Button);

export default class Like extends Component {
    constructor(props) {
        super(props);
        this.counter = 0;
        this.state = {
            name: 'React',
            newLike: 0
        };
        this.changeDetail = this.changeDetail.bind(this);
    }

    changeDetail() {
        this.setState({ newLike: ++this.counter });
        // console.log(this.counter);
    }
    render() {
        return (
            <>
                <ColorButton 
                    className="like-icon"
                    rating='true'
                    variant="contained"
                    color="primary"
                    onClick={this.changeDetail}
                >
                    <ThumbUpAltIcon></ThumbUpAltIcon> 
                    <span>Useful</span>
                </ColorButton>
                { this.state.newLike == null ? '' : <Votes likes={this.state.newLike} /> } 
            </>
        )
    }
}
