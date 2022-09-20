## Continuous integration (CI)

- In software engineering, continuous integration (CI) is the practice of merging all developers working copies to a shared repository several times a day.

### Goal / Workflow:

#### 1. Run test locally
- CI should be used in combination with automated unit tests written through the practices of test-driven development
- All unit tests in the developer's local environment should be run and passed before committing to the mainline.
- This helps prevent one developer's work-in-progress from breaking another developer's copy.

#### Compile
- Compile the mainline periodically
- run tests of the mainline and/or use continuous quality control


#### 2. CI as a part of CD
- CI is often intertwined with continuous delivery or continuous deployment in what is called a CI/CD pipeline. 
- "Continuous delivery" ensures the software checked in on the mainline is always in a state that can be deployed to users, while "continuous deployment" fully automates the deployment process.

