import React from 'react';

class Register extends React.Component {
    state = {
        email: '',
        password: '',
        pwVerify: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value;
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let newUser = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.register(newUser);
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit} className="register">
                <label>Email:
                    <input 
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}/>
                </label>
                <br/>
                <label>Password:
                    <input 
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}/>
                </label>
                <br/>
                <label>Verify Password:
                    <input type="password"
                    name="pwVerify"
                    value={this.state.pwVerify}
                    onChange={this.handleChange} />
                </label>
                <br/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Register;