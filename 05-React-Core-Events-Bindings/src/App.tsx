import React from 'react';
import './App.css';
import WishMessage from "./components/WishMessage";
import ProductItem from "./components/ProductItem";
import ShoppingCart from "./components/ShoppingCart";

class App extends React.Component<any, any>{
    render(): React.ReactNode {
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                    <a href="/" className="navbar-brand">React - Events Handling</a>
                </nav>
               {/* <WishMessage/>*/}
              {/* <ProductItem/>*/}
              <ShoppingCart/>
            </React.Fragment>
        );
    }
}
export default App;
