import React from 'react';

export function Todo(props) {
    const { todo } = props;
    if(todo.isDone) {
        return <div className="todo todoDone">{todo.text}</div>;
    } else {
        return <div className="todo">{todo.text}</div>;
    }
}

export function TodoList(props) {
    const {state, toggleTodo, addTodo} = props;

    const onSubmit = (event) => {
        const input = event.target;
        const text = input.value;
        const isEnterKey = (event.which === 13);
        const isLongEnough = text.length > 0;

        if (isEnterKey && isLongEnough) {
            input.value = '';
            addTodo(text);
        }
    };

    const toggleClick = id => event => toggleTodo(id);

    let todoList = null;
    if (state.has('todos')) {
        todoList = state.get('todos').map(t => (
            <li key={t.get('id')}
                className="small-6 medium-4 large-3 columns"
                onClick={toggleClick(t.get('id'))}>
                <Todo todo={t.toJS()}/>
            </li>
        ));
    }

    return (
        <div className="row">
            <div className="small-12 medium-6 large-3 end columns">
                <label for="todos">Todos eksempel</label>
                <input type="text"
                       name="todos"
                       className="todo__entry"
                       placeholder="Add todo"
                       onKeyDown={onSubmit}/>
            </div>

            <ul className="noListStyle">
                {todoList}
            </ul>
        </div>
    );
}