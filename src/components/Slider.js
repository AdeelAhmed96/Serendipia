import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

export default class LightboxExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: this.props.open,
        };
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.open!==this.props.open){
            //Perform some operation
            this.setState({isOpen: nextProps });
        }
    }

    render() {
        let { photoIndex, isOpen } = this.state;
        const images = this.props.images

        return (
            <div>

                {isOpen && (
                    <Lightbox
                        mainSrc={require('./images/'+images[photoIndex])}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={()=>{
                            this.props.change()
                            this.setState({isOpen: false})
                        }}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}
            </div>
        );
    }
}