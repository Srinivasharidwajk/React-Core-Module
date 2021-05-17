import React from 'react';

interface IProps {
    pText : string;
    sendData : (data : string) => void
}
interface IState {
    cText : string;
}

class ChildCard extends React.Component<IProps, IState>{
    constructor(props:IProps) {
        super(props);
        this.state = {
            cText : ''
        }
    }

    updateInput = (event : React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            cText : event.target.value
        });
        this.props.sendData(event.target.value);
    };

    render():React.ReactNode {
        return (
            <React.Fragment>
                <section>
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div className="card-header bg-secondary text-white">
                                        <p className="h4">Child Card</p>
                                    </div>
                                    <div className="card-body rgba-purple-light">
                                        <form>
                                            <div className="form-group">
                                                <input
                                                    value={this.state.cText}
                                                    onChange={this.updateInput}
                                                    type="text" className="form-control" placeholder="Child Text"/>
                                            </div>
                                            <small>{this.props.pText}</small>
                                        </form>
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
export default ChildCard;