import ModalImage from "react-modal-image";
import React from 'react';



class Modal extends React.Component{

    render(){
        return this.props.images.map(image => (
            <ModalImage
                small={require('./images/'+image)}
                large={require('./images/'+image)}
            />
        ));
    }
}

export default Modal;
