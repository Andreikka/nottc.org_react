import React from 'react';
import {Link} from 'react-router-dom';

class NavMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            addClass: false
        }
    }
    toggle() {
        this.setState({
            addClass: !this.state.addClass
        });
    }

    render() {
        let boxClass = ["top-menu"];
        if (this.state.addClass) {
            boxClass.push('active');
        }

        let MenuClass = ["row menu-links"];
        if (this.state.addClass) {
            MenuClass.push('active');
        }

        let Hamburger = ["hamburger-icon"];
        if (this.state.addClass) {
            Hamburger.push('active');
        }

        return (
            <div>

                <div className={boxClass.join(' ')}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-left">
                                <Link to="/"><img src="/images/nottc-logo-noshadow.png" className="img-fluid" alt=""/></Link>
                            </div>
                            <div className="col-md-6 text-right">
                                <div
                                    class={Hamburger.join(' ')}
                                    onClick={this
                                        .toggle
                                        .bind(this)}>
                                    <span className="line line-1"></span>
                                    <span className="line line-2"></span>
                                    <span className="line line-3"></span>
                                </div>
                            </div>
                        </div>
                        <div className={MenuClass.join(' ')}>
                            <div className="col-md-12 text-right">
                                <Link to="/">Home</Link>
                                <a href="https://www.nottc.org/ott_rights.php" className="">Ott rights</a>
                                <a href="https://www.nottc.org/use_cases.php" className="">Use cases</a>
                                <a href="https://www.nottc.org/partners.php" className="">Partners</a>
                                <a href="https://www.nottc.org/contact_us.php" className="">Contact us</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
};

export default NavMenu;