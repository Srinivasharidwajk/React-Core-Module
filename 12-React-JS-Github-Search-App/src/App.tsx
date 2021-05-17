import React from 'react';
import './App.css';
import GithubProfileSearchApp from "./components/github/GithubProfileSearchApp";

class App extends React.Component<any, any>{
    render(): React.ReactNode {
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                    <a href="/" className="navbar-brand">React - Github Profile Search App</a>
                </nav>
                <GithubProfileSearchApp/>
            </React.Fragment>
        );
    }
}
export default App;
