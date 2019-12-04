let _singleton = Symbol();

let url = 'https://wbdv-f19-team1-backend.herokuapp.com/users';


export class UserService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!')
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new UserService(_singleton)
        return this[_singleton]
    }

    login = user =>
        fetch(url + '/username/' + user.username)
            .then(response => response.json());


    // haven't implemented it in backend
    logout = () => fetch(url).then(response => response.json());

    updateUser = (userId, user) =>
        fetch(url + '/' + userId, {
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT'
        }).then(response => response.json());

    register = user =>
        fetch(url, {
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(response => response.json());

}
