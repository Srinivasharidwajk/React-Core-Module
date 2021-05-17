import React from 'react';
import './App.css';
import UserInput from "./components/UserInput";
import CarSelector from "./components/CarSelector";
import SMSApp from "./components/SMSApp";
import Registration from "./components/Registration";

class App extends React.Component<any, any>{
    render(): React.ReactNode {
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                    <a href="/" className="navbar-brand">React - Forms Handling</a>
                </nav>
               {/* <UserInput/>*/}
              {/* <CarSelector/>*/}
             {/* <SMSApp/>*/}
             {/*<Registration/>*/}
            </React.Fragment>
        );
    }
}
export default App;
