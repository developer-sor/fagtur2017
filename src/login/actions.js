
export function updateLoginForm(name, value) {
    return {
        type: 'UPDATE_LOGIN',
        payload: {
            name: name,
            value: value
        }
    };
}
