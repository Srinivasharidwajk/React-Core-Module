import React from 'react';
import './App.css';
import DigitalWatch from "./components/DigitalWatch";

class App extends React.Component<any, any>{
    render(): React.ReactNode {
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                    <a href="/" className="navbar-brand">React - Component Life Cycle</a>
                </nav>
                <DigitalWatch/>
            </React.Fragment>
        );
    }
}
export default App;
