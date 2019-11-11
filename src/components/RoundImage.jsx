import React from 'react';

export default class RoundImage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <img 
                style={
                    {
                        display: 'block',
                        margin: 'auto',
                        alignSelf: 'center',
                        height: 150,
                        width: 150,
                        borderWidth: 1,
                        borderRadius: 75
                    }
                } 
                resizeMode="stretch" 
                src={this.props.link}
                alt={"Picture of " + this.props.name}  
            />
        )
    }
}

