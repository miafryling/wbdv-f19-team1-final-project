import React, {Component} from 'react';

export class DetailContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animalId: '',
        }
    }

    componentWillMount() {
        this.setState({animalId: this.props.match.params.animalId})
    }

    render() {
        return (
            <div>
                Detail Page!
            </div>
        )
    }
}
