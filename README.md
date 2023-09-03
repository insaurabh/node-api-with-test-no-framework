# Building a complete Node.js WebApi + testing with no frameworks

Creating and testing a complete Node.js Rest API (With no frameworks).

I followed Erick Wendel yoututbe video for this.

N-Layers

database

- a file which store all application data

src -all source code

- entities - object mappings
- factories - instance generators
- repositories - data assess
- routes - endpoint mappings
- services - communication between the routes and repositories layer (business logic)
- util - shared code
- handler - communication between routes and server
- index - server instance

tests -> all automated test suites

- integration tests - testing on the user point of view. it's also an E2E test because there's no app consuming it

- unit tests
  all tests that must run wihtout any external connections such as
  databases, external APIs and on our case, the fileSystem

## Features Checklist + Challenges

- Web API

  - [ ] it should have an endpoint for storing heroes' data
  - [ ] it should have an endpoint for retrieving heroes' data
  - [ ] it should have an endpoint for updating heroes' data
  - [ ] it should have an endpoint for deleting heroes' data
  - [ ] it should test when the application throws an error

- Testing

  - Unit

    - [ ] it should test all files on the routes layer
    - [ ] it should test all files on the repositories layer
    - [ ] it should test all files on the factories layer
    - Plus
      - [ ] it should reach 100% code coverage (it's currently not possible to get code coverage metrics using only the native Node.js, see [c8](https://www.npmjs.com/package/c8) for this task)

  - Integration / E2E
    - [ ] it should test the endpoint for storing heroes' data
    - [ ] it should test the endpoint for retrieving heroes' data
    - [ ] it should test the endpoint for updating heroes' data
    - [ ] it should test the endpoint for deleting heroes' data
    - [ ] it should test when the application throws an error

### Notes

- Should you have some difficulties solving the problems, please comment on the [**Youtube video**](https://youtu.be/xR4D2bp8_S0)

- As soon as you've been finishing the tasks, comment on the [**Youtube video**](https://youtu.be/xR4D2bp8_S0) so all other students can be pushed forward by your efforts

## Have fun!
