import React from 'react';

interface IProps {}
interface IState {}

class StockDetails extends React.Component<IProps, IState>{
    constructor(props:IProps) {
        super(props);

    }

    render():React.ReactNode {
        return (
            <React.Fragment>
                <h2>StockDetails Component</h2>
            </React.Fragment>
        );
    }
}
export default StockDetails;