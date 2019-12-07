let _singleton = Symbol();

let url = 'https://wbdv-f19-team1-backend.herokuapp.com/events';


export class EventService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!')
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new EventService(_singleton)
        return this[_singleton]
    }

    registerEvent = (eventId, userId) => fetch(url + `/register/${eventId}/${userId}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'PUT'
    }).then(response => response.json());

    createEvent = event => fetch(url, {
        body: JSON.stringify(event),
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST'
    }).then(response => response.json());

    findEventById = eventId => fetch(url + `/${eventId}`).then(response => response.json());

    findAllEvents = () => fetch(url).then(response => response.json())

    updateEvent = (eventId, event) => fetch(url + `/${eventId}`, {
        body: JSON.stringify(event),
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'PUT'
    }).then(response => response.json());
}
