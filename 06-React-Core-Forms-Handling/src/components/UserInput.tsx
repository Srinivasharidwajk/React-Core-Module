import React from 'react';

interface IProps {}
interface IState {
    message : string;
}

class UserInput extends React.Component<IProps, IState>{
    constructor(props:IProps) {
        super(props);
        this.state = {
            message : ''
        }
    }

    updateInput = (event:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            message : event.target.value
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
                                   <div className="card-header bg-secondary text-white">
                                       <h3>Two way binding</h3>
                                   </div>
                                   <div className="card-body">
                                        <form>
                                            <div className="form-group">
                                                <input
                                                    value={this.state.message}
                                                    onChange={this.updateInput}
                                                    type="text"
                                                    className="form-control"/>
                                            </div>
                                        </form>
                                       <p className="h4">{this.state.message}</p>
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
export default UserInput;