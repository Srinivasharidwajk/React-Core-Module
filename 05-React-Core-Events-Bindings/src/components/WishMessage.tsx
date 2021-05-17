import React from 'react';

interface IProps {}
interface IState {
    msg : string;
}

class WishMessage extends React.Component<IProps, IState>{
    constructor(props:IProps) {
        super(props);
        this.state = {
            msg : 'Hello'
        }
    }

    // first way
    sayGoodMorning = () => {
       this.setState({
           msg : 'Good Morning'
       });
    }

    // second way
    sayGoodAfternoon = (value:string) => {
        this.setState({
            msg : value
        });
    }

    render():React.ReactNode {
        return (
            <React.Fragment>
                <pre>{JSON.stringify(this.state)}</pre>
              <section>
                  <div className="container mt-3">
                      <div className="row">
                          <div className="col-md-8">
                              <div className="card">
                                  <div className="card-body">
                                      <p className="h3">{this.state.msg}</p>
                                      <button onClick={this.sayGoodMorning} className="btn btn-success btn-sm">Good Morning</button>
                                      <button onClick={this.sayGoodAfternoon.bind(this,'Good Afternoon')} className="btn btn-warning btn-sm">Good Afternoon</button>
                                      <button onClick={() => {
                                          this.setState({
                                              msg : 'Good Evening'
                                          });
                                      }} className="btn btn-danger btn-sm">Good Evening</button>
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
export default WishMessage;