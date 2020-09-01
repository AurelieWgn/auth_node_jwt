import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {modifyUser} from '../api/user_api';
import {getUserInfo} from '../actions'

class Profil extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: this.props.profil.user ? this.props.profil.user.firstName : "" ,
            lastName: this.props.profil.user ? this.props.profil.user.lastName : ""
        }
    }

    onChangeText(value, info) {
        this.setState({[info]: value})
    }

    onClickModifyUser(e) {
        e.preventDefault();
        const token = window.localStorage.getItem('pro06-token');
        let user = {
            email: this.props.profil.user.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        }
        modifyUser(user, token)
            .then((res)=>{
                console.log('res modify',res)
                if(res.status === 200) {
                    this.props.getUserInfo(res.user);
                }

            })
    }

    render(){

        const {user} = this.props.profil
        return (
            <div>
                <h1>profil</h1>
                <Link to="/">Go to Home</Link>
                <div>
                    <h2>modification utilisateur</h2>
                    {user !== null && <form
                        onSubmit={(e)=>{
                            this.onClickModifyUser(e);
                        }}
                    >
                        <label>Nom</label>
                        <input
                            type="text"
                            value={this.state.lastName}
                            onChange={(e)=>{
                                this.onChangeText(e.currentTarget.value, 'lastName')
                            }}
                        />
                        <label>Prénom</label>
                        <input
                            type="text"
                            value={this.state.firstName}
                            onChange={(e)=>{
                                this.onChangeText(e.currentTarget.value, 'firstName')
                            }}
                        />
                        <input
                            type="submit"
                            value="Modifier"/>
                    </form>}
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
    getUserInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(Profil)