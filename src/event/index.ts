import { State } from "../state";

/**
 * Event is the base class for Telly events.
 */

export default class Event {
    public id: string
    public state: State = {}
    constructor(id: string) {
        this.id = id
    }
}
