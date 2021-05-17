import React from 'react';

interface IProps {
    name : string;
    age : string;
    designation? : string;
}
interface IState {}

class Message extends React.Component<IProps, IState>{
    render():React.ReactNode {
        return (
            <React.Fragment>
                <div className="card m-3">
                    <div className="card-body bg-info">
                        <ul className="list-group">
                            <li className="list-group-item">NAME : {this.props.name}</li>
                            <li className="list-group-item">AGE : {this.props.age}</li>
                            <li className="list-group-item">DESIGNATION : {this.props.designation}</li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Message;