import React, { Component } from 'react';




class Login extends Component {
    render() {
        return (
            <div>
                <form onSubmit={e => e.preventDefault()}>
                    <h2>Login:</h2>
                    <div>
                        <input type="email" placeholder="Email..." required />
                    </div>
                    <div>
                        <input type="password" placeholder="Password..." required />
                    </div>
                    <button>Login</button>

                </form>
            </div>
        )
    }
}

export default Login;