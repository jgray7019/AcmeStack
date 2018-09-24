import React from 'react';

class SignInSocial extends React.Component {
    render() {
        return(
            <section className="socialSection">
                <p className="socialSection__caption">or login with</p>
                <ul className="socialSection__list">
                    <li className="socialSection__listItem">
                        <a href="#" className="socialSection__link"><img className="socialSection__icon" src={this.props.google} alt="google logo"/></a>
                    </li>
                    <li className="socialSection__listItem">
                        <a href="#" className="socialSection__link"><img className="socialSection__icon" src={this.props.facebook} alt="facebook logo"/></a>
                    </li>
                    <li className="socialSection__listItem">
                        <a href="#" className="socialSection__link"><img className="socialSection__icon" src={this.props.twitter} alt="twitter logo"/></a>
                    </li>
                </ul>
            </section>
        )
    }
}

export default SignInSocial;