class Emitter {

    constructor() {
        this.events = {};
    }

    on(eventName, handler) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        this.events[eventName].push(handler);
    }

    off(eventName, handler) {
        let events = this.events[eventName];

        if (events) {
            this.events[eventName] = events.filter(func => func !== handler);
        }
    }

    emit(eventName, data) {
        const events = this.events[eventName];

        if (events) {
            events.forEach(func => {
                func.call(null, data);
            });
        }
    }
}

export {Emitter};
