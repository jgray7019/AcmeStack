import React from 'react';

class FormSignOut extends React.Component {
    constructor(props) {
        super(props);

        this.handleSignOut = this.handleSignOut.bind(this);
    }

    handleSignOut(e) {
        e.preventDefault();

        this.props.onSignOut();
    }

    render(){
        return(
            <div className="section__container--signedIn">
                <h2 className="section__heading">Congratulations</h2>
                <p className="section__subheading">You have successfully logged in.</p>
                <button className="section__button" onClick={this.handleSignOut}>Sign Out</button>
            </div>
        )
    }
}

export default FormSignOut;