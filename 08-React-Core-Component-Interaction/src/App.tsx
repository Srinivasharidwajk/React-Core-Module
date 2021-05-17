import React from 'react';
import './App.css';
import ParentComp from "./components/basics/ParentComp";
import ParentCard from "./components/advanced/ParentCard";

class App extends React.Component<any, any>{
    render(): React.ReactNode {
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                    <a href="/" className="navbar-brand">React - Component Interaction</a>
                </nav>
               {/* <ParentComp/>*/}
               <ParentCard/>
            </React.Fragment>
        );
    }
}
export default App;
