import React from 'react';
import './App.css';
import ContactApp from "./components/contact-app/ContactApp";

interface IProps {}

interface IState {

}

class App extends React.Component<IProps, IState>{
    constructor(props:IProps) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                    <a href="/" className="navbar-brand">React with Contact App</a>
                </nav>

                <ContactApp/>

            </React.Fragment>
        );
    }
}
export default App;
