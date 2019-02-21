/**
 * Triggers are used to setoff events. They can either be time triggers or event triggers.
 * Events are application agnostic so, any arbitary action defined as an event can be used as a trigger.
 * e.g. in a mobile application where user input is registered as events, these event sequences can be registered as a trigger.
 * 
 */
export default interface ITrigger {
    priority?: number
}



export class Trigger {

}