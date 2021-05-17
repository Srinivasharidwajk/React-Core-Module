import React from 'react';
import card1 from '../assets/img/card_1.jpg';
import card2 from '../assets/img/card_2.jpg';
import card3 from '../assets/img/card_3.jpg';
import card4 from '../assets/img/card_4.jpg';

interface IProps {}
interface IState {}

class Card extends React.Component<IProps, IState>{
    render():React.ReactNode {
        return (
            <React.Fragment>
                <section>
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="card">
                                    <img src={card1} alt=""/>
                                    <div className="card-body">
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ea facere nam odit provident quos repellendus sapiente similique? Eius, incidunt!</p>
                                        <button className="btn btn-danger btn-sm">Read More</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <img src={card2} alt=""/>
                                    <div className="card-body">
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ea facere nam odit provident quos repellendus sapiente similique? Eius, incidunt!</p>
                                        <button className="btn btn-danger btn-sm">Read More</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <img src={card3} alt=""/>
                                    <div className="card-body">
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ea facere nam odit provident quos repellendus sapiente similique? Eius, incidunt!</p>
                                        <button className="btn btn-danger btn-sm">Read More</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <img src={card4} alt=""/>
                                    <div className="card-body">
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ea facere nam odit provident quos repellendus sapiente similique? Eius, incidunt!</p>
                                        <button className="btn btn-danger btn-sm">Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default Card;