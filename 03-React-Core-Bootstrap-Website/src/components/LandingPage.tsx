import React from 'react';

interface IProps {}
interface IState {}

class LandingPage extends React.Component<IProps, IState>{
    render():React.ReactNode {
        return (
            <React.Fragment>
                <section className="landing-page">
                    <div className="wrapper">
                        <div className="d-flex flex-column justify-content-center text-center align-items-center h-100">
                            <h5 className="display-4">Welcome to React World</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aspernatur, assumenda dolor, dolorem doloribus esse expedita explicabo in, minus quas rem vel velit! Accusamus illo magni qui repellendus voluptate!</p>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default LandingPage;