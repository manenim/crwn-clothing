import React, { Component } from 'react'
import CustomButton from '../custom-button/Custom-button.component'
import FormInput from '../form-input/FormInput.component'
import './signIn.styles.scss'

import { signInWithGoogle } from '../../firebase/Firebase.utils'

export class SignIn extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             email: '',
             password: ''
        }
    }
    

    handleSubmit = e => {
        e.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = e => {
        const {name, value} = e.target

        this.setState({ [name]: value })
    }
    render() {
        const {email, password} = this.state
        return (
            <div className = "sign-in" onSubmit = {this.handleSubmit}>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form>
                    <FormInput type = "email" label = "email" name = "email" handleChange ={this.handleChange} value = {email} />
                   
                    <FormInput type = "password" label = "password" name = "password" handleChange ={this.handleChange} value = {password} />
                    
                    <div className="buttons">
                        <CustomButton type = "submit" >Sign in</CustomButton>
                        <CustomButton onClick = {signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default SignIn
