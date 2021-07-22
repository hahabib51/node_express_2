### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

  JWT is a JSON web token. This is an open standard for securely transformation between parties as a JSON object. This information is securely signed.

- What is the signature portion of the JWT? What does it do?

  The signature portion of the JWT is one part of three for a JWT (the other two parts are header and payload). This signature verifies that the message is unchanged during transport and if the sender actually sent it.

- If a JWT is intercepted, can the attacker see what's inside the payload?

  Yes unfortunetly, if the information is only signed and not encrypted.

- How can you implement authentication with a JWT? Describe how it works at a high level.

  To implementn aunthentication with a JWT, you first have to be a user who then logs in successfully a JWT will be returned to the client from the server. Best practice is to not keep these tokens longer than necessary. When the user wants to access something protected, they send the JWT to the server (usually in an authorization header) and the server checks that the submitted JWT is valid.

- Compare and contrast unit, integration and end-to-end tests.

  First, unit tests focus on if functions/classes work as they are supposed to. These are easier to test but do not cover a lot of overall app functionality and how functions work together.

  Secondly, integration tests focus more on how modules work together, for example routes that incorporate database models. These improve on modules not only being tested by themselves in unit tests.

  Lastly, end-to-end testing rely on external components and the end user experience. These tests are worst for pinpointing where the root cause of the failure is.

- What is a mock? What are some things you would mock?

  Mocking is an approach of replacing the external modules that would normally interact during testing but are instead replaced by objects resembled a "fake" response from these modules. When you are unit testing, you would mock route and database responses. 

- What is continuous integration?

  CI is the automation process for building and testing the code when a someone commits changes to the code.

- What is an environment variable and what are they used for?

  Envionmental variables are string variables that can be set in different environments. They are used for sensitive information (passwords, client secrets, etc.) and anything that developer would like to have a variable for in the environment.

- What is TDD? What are some benefits and drawbacks?

  Test driven development is a process for developing software where you start writing tests before the software is fully developed. The benefits are that this leads to better quality code that has better test coverage. The drawbacks are that it takes longer time to fully develop the code and focusing on writing testing can lead to simple functionality in the software because something more advanced would be harder to test.

- What is the value of using JSONSchema for validation?

  JSONSchema allows for the JSON received from requests to be validated so that the correct information is in the JSON. This is ensures the quality of the client submitted data.

- What are some ways to decide which code to test?

  Below is a list of ways to identify what code to test:

  - Database models
  - API routes
  - Classes
  - Functions

- What are some differences between Web Sockets and HTTP?

  1. HTTP are unidirectional while Web Sockets are bidirectionial.
  2. Web Sockets works great with continuous, real-time data while the HTTP protocol is more useful for fetching data in RESTful applications
  3. Web Sockets are faster, HTTP is slower

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

  I really like Express because there are so many plugins/modules that one can use and `npm` is really smooth for installing without dealing with `venv`. Although I do prefer writing Python because the syntax and language is simple. It is what a user can do with Express that to me seems to be easier to write and handle things like errors or routes.
