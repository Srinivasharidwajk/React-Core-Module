import React from 'react';

interface IProps {}
interface IState {
    count : number;
    message : string;
}

class SMSApp extends React.Component<IProps, IState>{
    constructor(props:IProps) {
        super(props);
        this.state = {
            message : '',
            count : 0
        }
    }

    updateMessage = (event : React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({
            message : event.target.value,
            count : event.target.value.length
        });
    };

    render():React.ReactNode {
        return (
            <React.Fragment>
              {/*  <pre>{JSON.stringify(this.state)}</pre>*/}
                <section>
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header bg-info text-white">
                                        <p className="h4">SMS App</p>
                                    </div>
                                    <div className="card-body bg-light">
                                        <form>
                                            <div className="form-group">
                                                <textarea
                                                    value={this.state.message}
                                                    onChange={this.updateMessage}
                                                    maxLength={200}
                                                    rows={3}
                                                    className="form-control"/>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer">
                                        <p className="h4">The Characters Remaining :
                                            <span className="font-weight-bold"> {this.state.count}</span> / 200
                                        </p>
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
export default SMSApp;