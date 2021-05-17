import React from 'react';

interface IProps {}
interface IState {}

const dataURL:string = `https://gist.githubusercontent.com/thenaveensaggam/0c0dd9b10c2b79248f876282185a0e2a/raw/8bc571dcda3b0606009bcdd142f9dc9a520ed9a0/stocks.18.3.2021.json`;

class StockList extends React.Component<IProps, IState>{
    constructor(props:IProps) {
        super(props);

    }

    render():React.ReactNode {
        return (
            <React.Fragment>
                <h2>StockList Component</h2>
            </React.Fragment>
        );
    }
}
export default StockList;