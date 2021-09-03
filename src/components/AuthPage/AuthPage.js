import React, {useState} from 'react';
import useStore from '../../hooks/hookStore';

function AuthPage({}) {
    const { actions } = useStore();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function handleLogInButtonClick() {
        if (email && password) {
            actions.logInUser(email, password)
                .catch(error => setError(error.message));
        }
    }

    function handleRegisterButtonClick() {
        if (email && password) {
            actions.registerUser(email, password)
                .catch(error => setError(error.message));
        }
    }


    return (
        <div className="authpage">
            <div className="authpage__wrap">
                <div className="authpage__title">
                    <h2>Authorization</h2>
                </div>
                <hr/>
                <div className="authpage__form">
                    <div className="authpage__inputs">
                        <label htmlFor="email-input">Email: </label>
                        <input type="text" className="authpage__input" placeholder={"Email"} value={email} onChange={e => setEmail(e.target.value)} id="email-input"/>
                        <label htmlFor="password-input">Password: </label>
                        <input type="password" className="authpage__input" placeholder={"Password"} value={password} onChange={e => setPassword(e.target.value)} id="password-input"/>
                    </div>
                    {error &&
                    <div className="authpage__alert">
                        <h3 className="authpage__error">{error}</h3>
                    </div>}
                    <div className="authpage__downbar">
                        <button className="authpage__btn" onClick={handleLogInButtonClick}>Log in</button>
                        <button className="authpage__btn" onClick={handleRegisterButtonClick}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthPage;