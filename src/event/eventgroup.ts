import Event from ".";

/**
 * Event groups are used to represent erelated events sequentuially.
 * The events are mapped serially and the progression is tied to fulfillment of previous events.
 * The guaranty is that an event within this group will not be dispatched until the preceeding events have been triggered, unless it is the first event, i.e. with id 1.
 * Events within the group are registered sequentially and triggered in ascending order. The implementation may hold a reference to current event to be triggered
 */
export default class EventGroup {
    protected currentEvent: number | undefined
    public events = new Map<string, Event>()
}