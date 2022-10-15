# eFishery Skill Task by Aldryan Deschara Putra
eFishery Skill Task for automation

I am using Cypress (Nodejs based automation framework) to do automation on Youtube Music website
![image](https://user-images.githubusercontent.com/57977693/195596733-a7474f33-d5c2-43c3-87e1-394ddad5944d.png)


# How to install
*Note: you might need to install Nodejs and npm to run the Cypress*

First off, you need to clone this repository, then you can open the folder in your terminal and type this command:

`npm install`

By then, you will install the Cypress I used here in this repository.

# Open and run Cypress automation codes

Next, we got to open the Cypress Controller by typing this command in your terminal:

`npx cypress open`

It will have some loading time because it is your first time opening the Cypress after install.
If you have errors you could not open, try to type the previous command once again (this is Cypress thingy).

Later, you will see the window below. It is the Cypress controller for you to open each test suites I have created. The test suites itself contained 5 and 6 test cases each, so there will be 11 test cases inside those 2 test suites

![Screenshot 10-14-2022 09 11 53](https://user-images.githubusercontent.com/57977693/195746231-083a53c6-df91-498b-b621-d6e08042a5f2.png)

You can click the `.js` files inside the controller to run the code 'with head'.

If you want to run it headlessly, you can simply type:

`npx cypress run` 

It will run the whole test scripts available in the Integration Tests

You can also run headless for just 1 spec file by typing:

`npx cypress run --spec <file address>`


# End of the line
For more informations, you can visit cypress.io to see the other details about this framework

Footnote: apologize for any fleakiness, this is either Youtube Music page itself or Cypress. I believe my code is already handled it.
