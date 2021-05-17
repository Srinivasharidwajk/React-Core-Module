import React from 'react';
import './App.css';
import UserList from "./components/UserList";
import ContactList from "./components/ContactList";

class App extends React.Component<any, any>{
    render(): React.ReactNode {
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                    <a href="/" className="navbar-brand">React - Server Connection - Axios</a>
                </nav>
               {/* <UserList/>*/}
               <ContactList/>
            </React.Fragment>
        );
    }
}
export default App;
