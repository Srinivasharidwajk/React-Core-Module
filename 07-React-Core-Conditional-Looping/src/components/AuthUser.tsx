import React from 'react';

interface IProps {}
interface IState {
    isLoggedIn : boolean;
}

class AuthUser extends React.Component<IProps, IState>{
    constructor(props:IProps) {
        super(props);
        this.state = {
            isLoggedIn : false
        }
    }

    login = () => {
        this.setState({
            isLoggedIn : true
        })
    };

    logout = () => {
        this.setState({
            isLoggedIn : false
        })
    };

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
                                        {
                                            this.state.isLoggedIn ?
                                                <button onClick={this.logout} className="btn btn-warning btn-sm">LogOut</button> :
                                                <button onClick={this.login} className="btn btn-success btn-sm">Login</button>
                                        }

                                        {
                                            this.state.isLoggedIn ?
                                                <p className="h3">Welcome Naveen!</p> :
                                                <p className="h3">Welcome Guest User</p>
                                        }
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
export default AuthUser;