import {connect} from 'react-redux';
import * as components from './components';
import {addTodo, toggleTodo} from './actions';

export const TodoList = connect(
    /*The mapStateToProps function takes the store’s current state as an argument (in our case a list of todos),
     then it expects the return value to be an object that describes a mapping from that state to props for our wrapped componen*/
    function mapStateToProps(state) {
        return {state: state};
    },
    function mapDispatchToProps(dispatch) {
        /*We’ll also need to supply a mapDispatchToProps function, which is passed the store’s dispatch method,
         so that we can use it to dispatch the actions from our action creators.*/
        return {
            addTodo: text => dispatch(addTodo(text)),
            toggleTodo: id => dispatch(toggleTodo(id))
        };
    }
)(components.TodoList);
