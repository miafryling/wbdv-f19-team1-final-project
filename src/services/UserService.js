let _singleton = Symbol();

let url = 'https://wbdv-f19-team1-backend.herokuapp.com/api/';


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
        fetch(url, {
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(response => response.json());


    logout = () =>
        fetch(url, {
            method: 'POST'
        });

    updateProfile = (userId, user) =>
        fetch(url, {
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT'
        }).then(response => response.json())

    createUser = user => {
        this.findUserByUsername(user.username).then(user => {
            alert("The username: " + user.username + "has already been taken")
        }, () => {
            if (user.username.length <= 3) {
                alert("The username should be at least 3 characters!")
                return
            }
            if (user.password !== user.confirmPassword) {
                alert("Passwords must match!")
                return
            }
            console.log(user)
            return fetch(url, {
                body: JSON.stringify(user),
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }).then(response => response.json())
        })
    };

    findUserByUsername = username => fetch(url).then(response => response.json())

}

