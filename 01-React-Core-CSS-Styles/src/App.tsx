import React from 'react';
import './App.css';
import Message from "./components/Message";
import Card from "./components/Card";

class App extends React.Component<any, any>{
    render(): React.ReactNode {
        return (
            <React.Fragment>
                <nav>
                    <a href="">React with CSS Styles</a>
                </nav>
            {/*  <Message/>*/}
            <Card/>
            </React.Fragment>
        );
    }
}
export default App;
