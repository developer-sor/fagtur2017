import {connect} from 'react-redux';
import * as components from './components';
import {updateLoginForm} from './actions';

export const Login = connect(
    function mapStateToProps(state) {
        return {loginform: state.get('loginform')};
    },
    function mapDispatchToProps(dispatch) {
        return {
            updateLoginForm: (name, value) => dispatch(updateLoginForm(name, value))
        };
    }
)(components.Login);
