import React, { Component } from 'react';

class Signup extends Component {
    render() {
        return (
            <div>
                <form onSubmit={e => e.preventDefault()}>
                    <h2>Sign Up</h2>
                    <div>
                        <input type="email" placeholder="Email..." required/>
                    </div>
                    <div>
                        <input type="password" placeholder="Password..." required/>
                    </div>
                    <button>Sign Up!</button>

                </form>
            </div>
        )
    }
}

export default Signup;