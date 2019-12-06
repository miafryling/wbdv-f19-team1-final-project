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

    login = user => {
        console.log(typeof user.username);
        return fetch(url + '/username/' + user.username)
            .then(response => response.json())
            .catch(error => alert(error + ' Do not have this account'))
    };

    updateUser = (userId, user) =>
        fetch(url + '/' + userId, {
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT'
        }).then(response => {
            console.log(response)
            // return response.json()
        });

    register = user =>
        fetch(url, {
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(response => response.json());

    findUserByUsername = username =>
        fetch(url + '/username/' + username)
            .then(response => response.json());
    
    login = (username, password) =>
      fetch(url + `/login/${username}/${password}`)
        .then(res => res.json())
}
