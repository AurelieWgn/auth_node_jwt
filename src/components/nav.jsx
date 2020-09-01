import React from 'react';
import {Link} from 'react-router-dom'


class Nav extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        console.log(this.props);
    }

    render(){
        return (
            <div id="nav">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/login">Connexion</Link>
                <Link className="nav-link" to="/profil">Mon Profil</Link>
            </div>
        )
    }
}


export default Nav;