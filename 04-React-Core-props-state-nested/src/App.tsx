import React from 'react';
import './App.css';
import Message from "./components/Message";
import Employee from "./components/Employee";
import Cards from "./components/Cards";

class App extends React.Component<any, any>{
    render(): React.ReactNode {
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                    <a href="/" className="navbar-brand">React - Props & State</a>
                </nav>
               {/* <Message name="Naveen" age="32" designation="Team Lead"/>
                <Message name="Rahul" age="25" />
                <Message name="John" age="45" designation="Project Manager"/>*/}

                {/*<Employee/>*/}
                <Cards/>
            </React.Fragment>
        );
    }
}
export default App;
