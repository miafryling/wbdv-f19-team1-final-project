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

    registerEvent = (userId, eventId) => {

    };

    createEvent = (userId, event) => {

    };

    findEventById = eventId => {
    };

    findAllEvents = () => fetch(url).then(response => response.json())

}
