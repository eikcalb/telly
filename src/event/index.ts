import { State } from "../state";
import ITrigger from "../trigger";

/**
 * Event is the base class for Telly events. Events are globally identified by their owner, to support multi-user systems.
 * Identifiers follow the [URI specification](???).
 * The procedure of referring to an event is:
 * > `protocol`:`userid`@`hostname`/`event-id`
 * 
 * + `userid` is the user identifier used by the implementation. This can be an valid identifier, including a username, phone number etc.
 * + `hostname` is the protocol specific application host identifier. This can be the ip or hostname for http protocols or file descriptors for Unix sockets.
 * + `event-id` is a unique identifier used to reference the event. The guaranty is that for the particular host and user, this event is unique.
 * + ~~`protocol` (optional) is the protocol used to address the event source. For events addressable via http, this should be http. This does not affect the uniqueness of events,
 * as it only describes how to address the source, therefore for an identifier with the same `hostname`, `username` and `event-id` identified with either http or smtp should point to the same event.~~
 
 * The `hostname` defaults to the local application if not specified. In this situation, the address can become `username`@/`event-id`.
 * 
 * > e.g An implementation may define an event with id '200051' for a user, 'james'. This event is addressable with `james@/200051` within the implementation or as `james@10.11.254.58/200051`.
 * 
 * Events can be subscribed to in order to be notified upon triggering.
 */

export default class Event {
    public id: string
    public name: string
    public state: State = {}

    /**
     * If true, the event will be triggered without waiting for action from all triggers.
     * If @see raceMinPriority is set, the event will only trigger if all triggers with priorities greater or equal to this value.
     * However, if the @see raceTriggerThreshold is set, the event will trigger only if the specified amount of triggers have emitted action.
     * 
     * Care should be taken to not set @see raceTriggerThreshold to be higher than the possible triggers that can emit action (greater than all triggers
     * with the set @see raceMinPriority or greater than all triggers in the event). This will cause the event to never get trigger.
     * 
     */
    public race: boolean = false

    /**
     * This is the minimum priority for triggers to respond to when @see race is true. The guaranty is that the event will not trigger until all registered triggers with
     * priorities greater or equal to this number must have emitted before triggering this event in a race condition.
     */
    public raceMinPriority: number = 0

    /**
     * raceTriggerThreshold indicates the maximum amount of triggers that must have emitted before triggering the event in race conditions.
     * 
     * **NOTE:** setting this value to a value higher than the number of posssible triggers will prevent this event from ever triggering in race conditions
     */
    public raceTriggerThreshold: number = 0

    /*
     * Where various triggers are specified for a single event, the individual triggers may have their priorites set,
     * indicating whether they should be ignored for race conditions.
     * 
     */
    public trigger: ITrigger[] = []

    /**
     * Every event should be signed to enable authentication. The signature should be provided, along with the algorithm used for signing.
     * The key for verification should be predetermined, either the public key of the domain or a preshared key, to verify that the event was created by the claimed origin.
     * In a local system, this is also encouraged.
     */
    public signature: string | null = null

    /**
     * Algorithm used for signing an the event. @see signature for details.
     */
    public signatureAlgorithm: string | null = null
    constructor(id: string, name: string) {
        this.id = id
        this.name = name
    }
}
