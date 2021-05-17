import React from 'react';

interface IUser{
    username : string;
    email : string;
    password : string;
    designation : string;
    about : string;
    terms : boolean;
}
interface IProps {}
interface IState {
    user : IUser;
}

class Registration extends React.Component<IProps, IState>{
    constructor(props:IProps) {
        super(props);
        this.state = {
            user : {
                username : '',
                password : '',
                email : '',
                designation : '',
                about : '',
                terms : false
            }
        };
    }

    updateInput = (event : React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        this.setState({
            user : {
                ...this.state.user,
                [event.target.name] : event.target.value
            }
        })
    };

    updateTerms = (event : React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            user : {
                ...this.state.user,
                terms : event.target.checked
            }
        })
    };

    submitRegister = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // stops the page refresh
        console.log(this.state.user);
    };


    render():React.ReactNode {
        let {user} = this.state;
        return (
            <React.Fragment>
               {/* <pre>{JSON.stringify(this.state)}</pre>*/}
                <section>
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-header bg-warning text-white">
                                        <p className="h4">Register Here</p>
                                    </div>
                                    <div className="card-body bg-light">
                                        <form onSubmit={this.submitRegister}>
                                            <div className="form-group">
                                                <input
                                                    name="username"
                                                    value={user.username}
                                                    onChange={this.updateInput}
                                                    type="text" className="form-control" placeholder="Username"/>
                                            </div>
                                            <div className="form-group mt-2">
                                                <input
                                                    name="password"
                                                    value={user.password}
                                                    onChange={this.updateInput}
                                                    type="password" className="form-control" placeholder="Password"/>
                                            </div>
                                            <div className="form-group mt-2">
                                                <input
                                                    name="email"
                                                    value={user.email}
                                                    onChange={this.updateInput}
                                                    type="email" className="form-control" placeholder="Email"/>
                                            </div>
                                            <div className="form-group mt-2">
                                                <select
                                                    name="designation"
                                                    value={user.designation}
                                                    onChange={this.updateInput}
                                                    className="form-control">
                                                    <option value="">Select Designation</option>
                                                    <option value="Software Engineer">Software Engineer</option>
                                                    <option value="Tech Lead">Tech Lead</option>
                                                    <option value="Project Manager">Project Manager</option>
                                                </select>
                                            </div>
                                            <div className="form-group mt-2">
                                            <textarea
                                                name="about"
                                                value={user.about}
                                                onChange={this.updateInput}
                                                rows={3} className="form-control" placeholder="About Yourself"/>
                                            </div>
                                            <div className="form-check mt-2">
                                                <input
                                                    onChange={this.updateTerms}
                                                    type="checkbox" className="form-check-inline"/> Accept Terms
                                            </div>
                                            <div className="form-group mt-2">
                                                <input type="submit" className="btn btn-warning btn-sm" value="Register"/>
                                            </div>
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
export default Registration;