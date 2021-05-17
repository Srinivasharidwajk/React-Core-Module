import React from 'react';

interface IProps {}
interface IState {}

class Footer extends React.Component<IProps, IState>{
    render():React.ReactNode {
        return (
            <React.Fragment>
                <footer className="bg-dark text-white text-center p-3 mt-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="h4">React Bootstrap &copy; 2021</p>
                                <p>All Rights Reserved</p>
                                <p>Developed & Maintained by UiBrains Team</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}
export default Footer;