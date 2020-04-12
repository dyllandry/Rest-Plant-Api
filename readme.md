# REST Plant Api

A demonstration of rest api principles using a garden api.

Look at `server.js` for code examples of the REST principles.

## Rest Principles

### REST PRINCIPLE 1/5: layered system

The architecture layers are separated by concerns.

Example: The database functions are separate from the server routing.

 
### REST PRINCIPLE 2/5: client-server

Follow the request-response pattern.

Example: curl is our http client, express is our server.


### REST PRINCIPLE 3/5: cacheable

Responses must, either implicitly so or explicitly not, be cacheable.

Example: Repeated GET requests return the same value, so let's cache it.


### REST PRINCIPLE 4/5: stateless

All necessary information to understand the request is contained by the request.

Example: The URI, and it's included id, is everything necessary for the server to respond to this request.


### REST PRINCIPLE 5/5: uniform interface

The interfaces between client and server must be the same.

Example: Resource uris are predictable and consistent.

## Other Rest Resources

- [RESTful API know-how](https://gist.github.com/alexserver/2fcc26f7e1ebcfc9f6d8)
- [REST Architectural Constraints](https://restfulapi.net/rest-architectural-constraints/)
- [What is REST](https://restfulapi.net/)
