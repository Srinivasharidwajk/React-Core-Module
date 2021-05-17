import React from 'react';
import card1 from "../assets/img/card_1.jpg";

interface IProps {
    cardImg : string;
}
interface IState {}

class Card extends React.Component<IProps, IState>{
    render():React.ReactNode {
        return (
            <React.Fragment>
                <div className="col-md-3">
                    <div className="card">
                        <img src={this.props.cardImg} alt=""/>
                        <div className="card-body">
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ea facere nam odit provident quos repellendus sapiente similique? Eius, incidunt!</p>
                            <button className="btn btn-danger btn-sm">Read More</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Card;