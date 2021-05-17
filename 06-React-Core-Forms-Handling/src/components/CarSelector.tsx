import React from 'react';

interface IProps {}
interface IState {
    carName : string;
}

class CarSelector extends React.Component<IProps, IState>{
    constructor(props:IProps) {
        super(props);
        this.state = {
            carName : ''
        }
    }

    updateCar = (event : React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({
            carName : event.target.value
        });
    };

    render():React.ReactNode {
        return (
            <React.Fragment>
                <section>
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header bg-success text-white">
                                        <p className="h4">Car Selector</p>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <form>
                                                    <div className="form-group">
                                                        <select
                                                            onChange={this.updateCar}
                                                            className="form-control">
                                                            <option value="">Select a Car</option>
                                                            <option value="BMW">BMW</option>
                                                            <option value="Audi">Audi</option>
                                                            <option value="Benz">Benz</option>
                                                            <option value="Rolls Royce">Rolls Royce</option>
                                                            <option value="Dugati">Dugati</option>
                                                        </select>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col">
                                                <p className="h3">{this.state.carName}</p>
                                            </div>
                                        </div>
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
export default CarSelector;