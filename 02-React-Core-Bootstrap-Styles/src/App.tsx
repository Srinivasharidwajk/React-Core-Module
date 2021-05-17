import React from 'react';
import './App.css';
import Card from "./components/Card";

class App extends React.Component<any, any>{
    render(): React.ReactNode {
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                    <a href="" className="navbar-brand">React with Bootstrap Styles</a>
                </nav>
                <Card/>
            </React.Fragment>
        );
    }
}
export default App;
