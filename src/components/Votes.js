import React, { Component } from 'react';
import CardContent from "@material-ui/core/CardContent";


export default class Votes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: (this.props.likes != null) ? this.props.likes : null
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.likes)
        this.setState({ likes: nextProps.likes });
    }
    render() {
        return (
            <CardContent size="small" color="primary">
                <div className="votes">
                    {this.state.likes} persons think this is useful
                  </div>
            </CardContent>
        )
    }
}
