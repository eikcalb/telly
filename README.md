# Telly  

```text
version 0.1
```

> This repo contains a reference implementation of Telly event system in JavaScript with HTTP (TCP) connections.

---

## What is Telly?  

Telly is a distributed event management platform.

## How it works  

Each event contains metadata for its identity and also contains state.  

+ The ***metadata*** contains data to identify the event. The [source](#event-source) property should be specified for distributed systems, but it defaults to the local machine address.

+ ***Triggers*** lists the 

+ The ***state*** is the extra  body of an event. It contains data to describe the event and is implementation specific. Events are not required to contain state, but should if extra context is required.

> All Telly events should be self-contained, containing all necessary information to distribute events via various channels. There is therefore, need to define all possible information forming the event in the event.

## Property definitions

> Telly is source agnostic and requires only certain properties be set for universal commpatibility.
> Required properties are indicated when necessary.

### **metadata**

> This contains information required to identify individual events.

#### event source  

This identifies the address providing the event. In a distributed environment, this will indicate the originating computer.
This may be left blank for local implementations. It can be a string hostname or IP address for TCP connections, file descriptor for unix socket connections or any arbitirary connection identifier.  

#### event-id ( `required` )

This is a unique id used to recognise the event universally. This will be appended to the [source](#event-source) in a distributed environment to identify an event, otherwise, it is qualified by the local machine.

#### version ( `required` )

Event version is the Telly version used to define the event. This will be used for backward compatibility, for situations where an application will handle events based on their version.

#### event name ( `required` )

All events are required to have a human readable name 

### **state**

## TODO

+ Certificates should be used for verifying hosts
