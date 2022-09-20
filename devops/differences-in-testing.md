## Differences in testing

- ```End to End:``` A helper robot that behaves like a user to click around the app and verify that it functions correctly. Sometimes called "functional testing" or e2e.
- ```Integration:``` Verify that several units work together in harmony.
- ```Unit:``` Verify that individual, isolated parts work as expected.
- ```Static:``` Catch typos and type errors as you write the code.

## E2E Tests (System testing)
- Typically these will run the entire application (both frontend and backend) and your test will interact with the app just like a typical user would. These tests are written with ```cypress```.

## Integration testing
- Integration testing is the phase in software testing in which individual software modules are combined and tested as a group.
- It occurs after unit testing and before system testing

#### How does integration testing work:
  - Integration testing takes as its input modules that have been unit tested, groups them in larger aggregates, applies tests defined in an integration test plan to those aggregates, and delivers as its output the integrated system ready for system testing.
  - So integration tests are defined as a type of testing where software modules are integrated logically and tested as a group.
  - A typical software project consists of multiple software modules, coded by different programmers. 
  - The purpose of this level of testing is to expose defects in the interaction between these software modules when they are integrated 

### Why do we test?

- The biggest and most important reason that I write tests is ```CONFIDENCE```. I want to be confident that the code I'm writing for the future won't break the app that I have running in production today. So whatever I do, I want to make sure that the kinds of tests I write bring me the most confidence possible and I need to be cognizant of the trade-offs I'm making when testing.