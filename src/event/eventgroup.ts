import Event from ".";

/**
 * Event groups are used to represent erelated events sequentuially.
 * The events are mapped serially and the progression is tied to fulfillment of previous events.
 * The guaranty is that an event within this group will not be dispatched until the preceeding events have been triggered, unless it is the first event, i.e. with id 1.
 * Events within the group are registered with an id sequentially, starting from 1 and increasing.
 */
export default class EventGroup {
    public events = new Map<string, Event>()
}