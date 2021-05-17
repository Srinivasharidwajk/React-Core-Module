import React from 'react';
import './Card.css';
import card1 from '../assets/img/card_1.jpg';
import card2 from '../assets/img/card_2.jpg';
import card3 from '../assets/img/card_3.jpg';

interface IProps {}
interface IState {}

class Card extends React.Component<IProps, IState>{
    render():React.ReactNode {
        return (
            <React.Fragment>
                <div className="card">
                    <img src={card1} className="card-img" alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam aliquid, animi at atque consectetur culpa debitis dolor, facere harum ipsa labore nemo nobis nulla numquam provident quis quod quos.</p>
                </div>
                <div className="card">
                    <img src={card2} className="card-img" alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam aliquid, animi at atque consectetur culpa debitis dolor, facere harum ipsa labore nemo nobis nulla numquam provident quis quod quos.</p>
                </div>
                <div className="card">
                    <img src={card3} className="card-img" alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam aliquid, animi at atque consectetur culpa debitis dolor, facere harum ipsa labore nemo nobis nulla numquam provident quis quod quos.</p>
                </div>
            </React.Fragment>
        );
    }
}
export default Card;