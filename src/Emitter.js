class Emitter {

    constructor() {
        this.events = {};
    }

    on(eventName, handler) {
        if (!this.events[eventName]) {
            this.events[eventName] = new Map();
        }

        this.events[eventName].set(handler, handler);
    }

    off(eventName, handler) {
        let events = this.events[eventName];

        if (events) {
            this.events[eventName].delete(handler)
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
