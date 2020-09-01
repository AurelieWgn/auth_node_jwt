import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class Home extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log(this.props.profil)
    }

    render(){
        const {user} = this.props.profil
        return (
            <div>

                <h1>home</h1>
                <Link to="/profil">Go to Profil</Link>
                <div>
                    <h2>Présentation utilisateur</h2>
                    {user !== null && <p>{user.firstName} {user.lastName}</p>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        profil: store.user
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)