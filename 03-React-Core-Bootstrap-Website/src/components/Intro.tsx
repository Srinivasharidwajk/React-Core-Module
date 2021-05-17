import React from 'react';

interface IProps {}
interface IState {}

class Intro extends React.Component<IProps, IState>{
    render():React.ReactNode {
        return (
            <React.Fragment>
                <section className="bg-danger text-white p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <h5 className="display-4">Bootstrap with React</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, neque!</p>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default Intro;