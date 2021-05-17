import React from 'react';
import './App.css';
import AuthUser from "./components/AuthUser";
import HobbySelector from "./components/HobbySelector";
import Employees from "./components/Employees";
import Customers from "./components/customer/Customers";
import CustomerCards from "./components/customer/CustomerCards";

class App extends React.Component<any, any>{
    render(): React.ReactNode {
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                    <a href="/" className="navbar-brand">React - Conditionals & Looping</a>
                </nav>
                {/*<AuthUser/>*/}
                {/*<HobbySelector/>*/}
                {/*<Employees/>*/}
                {/*<Customers/>*/}
                <CustomerCards/>
            </React.Fragment>
        );
    }
}
export default App;
