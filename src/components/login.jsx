import React from 'react';
import {loginUser} from '../api/user_api';
import { Link, Redirect} from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
			redirect: false
        }
        this.email= "";
		this.password=""
    }

    onChangeInput(e, type) {
		this[type] = e.target.value;
	}
	
	onSubmitForm() {
	    let connexionDatas = {
			email: this.email,
			password: this.password,
		}
		
		loginUser(connexionDatas)
		    .then((response)=>{
				console.log(response);
		        if(response.status === 200) {
		             window.localStorage.setItem('pro06-token', response.token);
		             this.setState({redirect: true})
		        } else {
		            this.setState({error: 'Identifiant ou mot de passe incorrect'});
		        }
		    })
	}
    
    render() {
        if(this.state.redirect) {
			return <Redirect to="/" />;
		}

        return (
            <div>
                <h1 className="c-g title2">
					Welcome <span>!</span>
				</h1>
				<div className="log-container bgc-bel-air ">
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

									<h3 className="register-title">Login :</h3>
									<label>Email</label>
									<input type="text" name="email" className="santa-monica"
									onChange={(e)=>{  this.onChangeInput(e, 'email') }}/>
									<label>Password</label>
									<input type="password" name="password" className="santa-monica"
									onChange={(e)=>{ this.onChangeInput(e, 'password')} }/>
									<input className="button-form bgc-santa-monica" type="submit" value="Go"/>
								</div>
							</form>
						</div>
					</div>
				</div>		
            </div>
        )
    }
    
}

export default Login

