import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import Intro from "./components/Intro";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

class App extends React.Component<any, any>{
    render(): React.ReactNode {
        return (
            <React.Fragment>
                <NavBar/>
                <LandingPage/>
                <Intro/>
                <Cards/>
                <Footer/>
            </React.Fragment>
        );
    }
}
export default App;
