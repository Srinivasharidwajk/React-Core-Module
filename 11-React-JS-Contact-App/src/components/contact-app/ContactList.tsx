import React from 'react';
import {IContact} from "./models/IContact";
import axios from 'axios';

interface IProps {
    sendContact : (contact : IContact) => void
}

interface IState {
    contacts : IContact[]
}

class ContactList extends React.Component<IProps, IState>{

    constructor(props:IProps) {
        super(props);
        this.state = {
            contacts : [] as IContact[]
        }
    }

    componentDidMount(): void {
        let dataURL : string = 'https://gist.githubusercontent.com/thenaveensaggam/270f3990f36d1c1ad71cab4f06c8e67b/raw/77e0eb4c3d2cbafe88901006dac4e8daf2705f82/contacts.04022021.json';
        axios.get(dataURL).then((response) => {
            this.setState({
                contacts : response.data
            });
        }).catch((error) => {
            console.error(error);
        });
    }

    selectContact = (contact : IContact ) => {
        this.props.sendContact(contact);
    };

    render() {
        let {contacts} = this.state;
        return (
            <React.Fragment>
               <table className="table table-hover text-center table-striped">
                   <thead className="bg-primary text-white">
                        <tr>
                            <th>SNO</th>
                            <th>NAME</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Location</th>
                        </tr>
                   </thead>
                   <tbody>
                    {
                        contacts.length > 0 &&
                            contacts.map(contact => {
                                return (
                                    <tr key={contact.login.uuid} onClick={this.selectContact.bind(this, contact)}>
                                        <td>{contact.login.uuid.substr(contact.login.uuid.length - 5)}</td>
                                        <td>{contact.name.first} {contact.name.last}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.phone}</td>
                                        <td>{contact.location.city}</td>
                                    </tr>
                                )
                            })
                    }
                   </tbody>
               </table>
            </React.Fragment>
        );
    }
}
export default ContactList;
