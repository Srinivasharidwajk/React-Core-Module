import React from 'react';
import './Message.css';

interface IProps {}
interface IState {}

class Message extends React.Component<IProps, IState>{
    render():React.ReactNode {
        return (
            <React.Fragment>
                <div>
                    <h2 className="colors">Message Component</h2>
                </div>
                <div>
                    <h2 className="colors">Message Component</h2>
                </div>
            </React.Fragment>
        );
    }
}
export default Message;