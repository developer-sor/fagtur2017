import {List, Map} from 'immutable';

const loginForm = 'loginform';
const todos = 'todos';
const init = Map({todos: List(), loginForm: {}});

export default function (state = init, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.set(todos, state.get(todos).push(Map(action.payload)));
        case 'TOGGLE_TODO':
            return state.set(todos, state.get(todos).map(t => {
                if (t.get('id') === action.payload) {
                    return t.update('isDone', isDone => !isDone);
                } else {
                    return t;
                }
            }));
        case 'UPDATE_LOGIN':
            return state.setIn([loginForm, action.payload.name], action.payload.value);
        case 'SUBMIT_LOGIN':
            let loginform = state.get(loginForm);
            console.log('Loginform as JSON:', loginform.toJSON());
            alert(JSON.stringify(loginform.toJSON()));
            return state;
        default:
            return state;
    }
}