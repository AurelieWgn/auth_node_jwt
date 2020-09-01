import React from 'react';
import {createUser} from '../api/user_api';
import {Redirect, Link} from 'react-router-dom';

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
			success: false,
        }
        this.firstName = "";
		this.lastName= "";
		this.email= "";
		this.password="";
		
    }
    
    onChangeInput(e, type) {
		this[type] = e.target.value;
	}
    
    onSubmitForm(){
        let user = {
            firstName: this.firstName,
			lastName: this.lastName,
			email: this.email,
			password: this.password
        }
        createUser(user)
            .then((response)=>{
                if(response.status === 200) {
		        	this.setState({ success : true });
    		    } else {
    		    	this.setState({ error : "Attention ce mail est déjà pris !" })
    		    }
            })
  
    }
    
    render() {
        if (this.state.success) {
            return <Redirect to="/login" />;
         }
        return (
            <div>
                <h1 className="c-g title2">
					Welcome <span>!</span>
				</h1>
				<div className="log-container bgc-santa-monica">
					<div className="log-nav-container">
						<div className="bgc-bel-air log-link">
							<Link to="/login">Login :</Link>
						</div>
						<div className="bgc-santa-monica log-link">
							<Link to="/register">Register :</Link>
						</div>
					</div>
					<div>
						<div className="log-container-form register-form">
							{ this.state.error !== null && <p className="errorMsg">{this.state.error}</p> }
							<form
								className="form-trl register-form"
								onSubmit={(e)=>{
									e.preventDefault();
									this.onSubmitForm();
								}}
							>

								<div className="register-part2">

									<h3 className="register-title">Save profil :</h3>
									<label>Nom</label>
									<input type="text" name="email" className="santa-monica"
									onChange={(e)=>{  this.onChangeInput(e, 'lastName') }}/>
									<label>Prénom</label>
									<input type="text" name="email" className="santa-monica"
									onChange={(e)=>{  this.onChangeInput(e, 'firstName') }}/>
									<label>Email</label>
									<input type="text" name="email" className="santa-monica"
									onChange={(e)=>{  this.onChangeInput(e, 'email') }}/>
									<label>Password</label>
									<input type="password" name="password" className="santa-monica"
									onChange={(e)=>{ this.onChangeInput(e, 'password')} }/>
									<input className="button-form bgc-bel-air" type="submit" value="Envoyer"/>
								</div>

								
								
							</form>
						</div>
					</div>
				</div>
            </div>
        )
    }
    
}

export default Register;