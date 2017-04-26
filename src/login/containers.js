import {connect} from 'react-redux';
import * as components from './components';
import {submitLogin, updateLoginForm} from './actions';

export const Login = connect(
    function mapStateToProps(state) {
        return {state: state};
    },
    function mapDispatchToProps(dispatch) {
        return {
            submitLogin: formdata => dispatch(submitLogin(formdata)),
            updateLoginForm: (name, value) => dispatch(updateLoginForm(name, value))
        };
    }
)(components.Login);
