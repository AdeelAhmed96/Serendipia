import Carousel from 'react-bootstrap/Carousel'
import React, { useState } from 'react';
import Slider from './Slider'

function ControlledCarousel(props) {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
    const [open , setOpen] = useState(false);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    const change = ()=>{
        setOpen(false)
    }

    let items = []

    for(let image of props.images){
        items.push(<Carousel.Item>
            <img
                onClick={() => setOpen(true)}
                className="d-block w-100"
                src={require('./images/'+image)}
                alt="Bed Room"
            />
            {/*<Carousel.Caption>
                <h3>First slide label</h3>
            </Carousel.Caption>*/}
        </Carousel.Item>)
    }

    return (
        <div className={'top'}>
            <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
                {items}
            </Carousel>
            <Slider open={open} change={change} images={props.images} />
        </div>

    );
}

export default ControlledCarousel;
