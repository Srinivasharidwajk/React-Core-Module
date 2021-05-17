import React from 'react';
import {IProfile} from "./models/IProfile";
import {IRepository} from "./models/IRepository";
import {GithubCred} from "./cred/GithubCred";
import axios from 'axios';
import GithubProfile from "./GithubProfile";
import GithubRepos from "./GithubRepos";

interface IProps {}
interface IState {
    githubUsername : string;
    profile : IProfile;
    repos : IRepository[]
}

class GithubProfileSearchApp extends React.Component<IProps, IState>{
    constructor(props:IProps) {
        super(props);
        this.state = {
            githubUsername : '',
            profile : {} as IProfile,
            repos : [] as IRepository[]
        };
    }

    updateUserName = (event : React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            githubUsername : event.target.value
        });
    };

    submitSearch = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.searchProfile(this.state.githubUsername);
        this.searchRepos(this.state.githubUsername);
    };

    // search Profile data
    searchProfile = (githubUsername:string):void => {
        let dataURL : string = `https://api.github.com/users/${githubUsername}?client_id=${GithubCred.clientID}&client_secret=${GithubCred.clientSecret}`;
        axios.get(dataURL).then((response) => {
            this.setState({
                ...this.state,
                profile : response.data
            });
        }).catch((error) => {
            console.error(error);
        });
    };

    // search Repos data
    searchRepos = (githubUsername:string):void => {
        let dataURL : string = `https://api.github.com/users/${githubUsername}/repos?client_id=${GithubCred.clientID}&client_secret=${GithubCred.clientSecret}`;
        axios.get(dataURL).then((response) => {
            this.setState({
                ...this.state,
                repos : response.data
            });
        }).catch((error) => {
            console.error(error);
        });
    };

    render():React.ReactNode {
        return (
            <React.Fragment>
                <section>
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col">
                                <p className="h3 text-success">Github Search App</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda at dicta dolores doloribus, id in, iste minima minus natus nihil numquam, officiis provident quisquam reprehenderit suscipit veniam voluptate voluptatem.</p>
                            </div>
                        </div>
                        <div className="row">
                            <form onSubmit={this.submitSearch}>
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <input
                                                value={this.state.githubUsername}
                                                onChange={this.updateUserName}
                                                type="text" className="form-control" placeholder="github User"/>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div>
                                            <input type="submit" value="Search" className="btn btn-success btn-sm"/>
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </section>
                <section>
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col">
                                {
                                    Object.keys(this.state.profile).length > 0 &&
                                    <GithubProfile profile = {this.state.profile}/>
                                }
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col">
                                {
                                    this.state.repos.length > 0 &&
                                    <GithubRepos repos={this.state.repos}/>
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default GithubProfileSearchApp;