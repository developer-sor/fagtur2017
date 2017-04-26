import React from 'react';

export function Login(props) {
    const {state, submitLogin, updateLoginForm} = props;

    const updateFormData = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        updateLoginForm(name, value);
    };
    const submitForm = (event) => {
        event.preventDefault();
        submitLogin();
    };

    return (
        <div>
            <div className="row">
                <form onSubmit={submitForm} className="small-12 medium-6 large-3 end columns">
                    <fieldset className="fieldset">
                        <legend>Login</legend>
                        <label>
                            Epost
                            <input type="email"
                                   name="epost"
                                   placeholder="din epost (brukernavn)"
                                   onBlur={updateFormData}
                                   autoFocus="true"
                                   autoComplete="true"
                                   required/>
                        </label>
                        <label>
                            Passord
                            <input type="password"
                                   name="passord"
                                   placeholder="passord"
                                   onBlur={updateFormData}
                                   required/>
                        </label>
                        <input type="submit" value="send" className="button" onClick={submitForm}/>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}