# efishery-skill-task
eFishery Skill Task for automation

I am using Cypress (Nodejs based automation framework) to do automation on Youtube Music website

# How to install

First off, you need to clone this repository, then you can open the folder in your terminal and type this command:

`npm install`

By then, you will install the Cypress I used here in this repository.

# Open and run Cypress automation codes

Next, we got to open the Cypress Controller by typing this command in your terminal:

`npx cypress open`

It will have some loading time because it is your first time opening the Cypress after install.
If you have errors you could not open, try to type the previous command once again (this is Cypress thingy).

Later, you will see this kind of window. It is the Cypress controller for you to open each test cases I have created.
You can click the `.js` files inside the controller to run the code headed.

If you want to run it headlessly, you can simply type:

`npx cypress run` 

It will run the whole test scripts available in the Integration Tests

You can also run headless for just 1 spec file by typing:

`npx cypress run --spec <file address>`
