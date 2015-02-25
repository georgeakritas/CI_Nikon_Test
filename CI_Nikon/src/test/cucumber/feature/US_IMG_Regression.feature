Feature: US IMG Regression Test Cases 
These test cases will be deployed against the US IMG Nikon Site

@US_IMG_Regression
Scenario: TC-IMG-Check-1 - Fully Shipped Order
Given I have navigated to the IMG PDP of the regular product 1503
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I log in to SSO as a regular registered user
Then I complete the order using a visa

@US_IMG_Regression
Scenario: TC-IMG-Check-2 - Partially Shipped Order  
Given I have navigated to the IMG PDP of the regular product 1503
Then I add the product to the cart
Given I have navigated to the IMG PDP of the regular product 2170
Then I add the product to the cart
Then I navigate to the IMG cart
Then I proceed to check out
Then I complete the order using a visa