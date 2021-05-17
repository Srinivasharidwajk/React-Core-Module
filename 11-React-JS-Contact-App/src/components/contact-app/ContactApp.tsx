import React from 'react';
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";
import {IContact} from "./models/IContact";

interface IProps {}

interface IState {
    selectedContact : IContact
}

class ContactApp extends React.Component<IProps, IState>{

    constructor(props:IProps) {
        super(props);
        this.state = {
          selectedContact : {} as IContact
        };
    }

    receiveContact = (contact : IContact) => {
        this.setState({
            selectedContact : contact
        })
    };

    render() {
        return (
            <React.Fragment>
                {/*<pre>{JSON.stringify(this.state.selectedContact)}</pre>*/}
                <section className="mt-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="h3 text-primary">Contact App</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur aut commodi cumque ex illo magni natus nesciunt nobis odio officia officiis reiciendis rerum sapiente suscipit tenetur, ut velit voluptate.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <ContactList sendContact={this.receiveContact}/>
                            </div>
                            <div className="col-md-3">
                                {
                                    Object.keys(this.state.selectedContact).length > 0 &&
                                        <ContactCard selectedContact={this.state.selectedContact}/>
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default ContactApp;
