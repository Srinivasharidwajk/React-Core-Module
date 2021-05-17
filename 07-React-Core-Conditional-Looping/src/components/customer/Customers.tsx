import React from 'react';
import {ICustomer} from "./ICustomer";
import {CustomerStore} from "./CustomerStore";

interface IProps {}
interface IState {
    customers : ICustomer[]
}

class Customers extends React.Component<IProps, IState>{
    constructor(props:IProps) {
        super(props);
        this.state = {
            customers : CustomerStore.customerList
        }
    }

    render():React.ReactNode {
        return (
            <React.Fragment>
                <section>
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col">
                                <p className="h3 text-secondary">Customers Info</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cum dicta, dolor dolores eligendi, minus nam nobis odit possimus praesentium quaerat quidem quis quos tempore temporibus tenetur vel, veniam voluptatum!</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <table className="table table-hover text-center table-striped">
                                    <thead className="bg-secondary text-white">
                                        <tr>
                                            <th>SNO</th>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Age</th>
                                            <th>Email</th>
                                            <th>Location</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.customers.map(customer => {
                                                return (
                                                    <tr key={customer.login.uuid}>
                                                        <td>{customer.login.uuid.substr(customer.login.uuid.length - 5)}</td>
                                                        <td>
                                                            <img src={customer.picture.large} alt="" width="50" height="50"/>
                                                        </td>
                                                        <td>{customer.name.title}. {customer.name.first} {customer.name.last}</td>
                                                        <td>{customer.dob.age} yrs</td>
                                                        <td>{customer.email}</td>
                                                        <td>{customer.location.city}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default Customers;