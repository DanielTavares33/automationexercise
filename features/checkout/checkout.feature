@regression @checkout
Feature: Checkout

  Background:
    Given I visit the home page

  @smoke @positive
  Scenario: Place Order: Login before Checkout
    Given I have a registered account
    When I click on the "Logout" button
    And I click on the "Signup / Login" button
    And I fill in the login form
    And I click on the "Login" button
    Then I should be logged in as the user
    When I hover over the first product and add it to cart
    And I click on the "Continue Shopping" button
    And I click on the "Cart" button
    Then the cart page is displayed
    When I click on the "Proceed To Checkout" button
    Then I should see the address details and order review
    When I enter a comment "Order placed via automation test"
    And I click on the "Place Order" button
    And I fill in the payment details
    And I click on the "Pay and Confirm Order" button
    Then I should see the order success message
    When I click on the "Delete Account" button
    Then I should see the "ACCOUNT DELETED!" message
    When I click the "Continue" button

  @smoke @positive
  Scenario: Place Order: Register before Checkout
    When I click on the "Signup / Login" button
    Then I should see the new user signup form
    And I enter a valid "name"
    And I enter a valid "email address"
    When I click on the "Signup" button
    Then I should see the "ENTER ACCOUNT INFORMATION" form
    And I fill in the account information form
    When I click the "Create Account" button
    Then I should see the "ACCOUNT CREATED!" message
    When I click the "Continue" button
    Then I should be logged in as the new user
    When I hover over the first product and add it to cart
    And I click on the "Continue Shopping" button
    And I click on the "Cart" button
    Then the cart page is displayed
    When I click on the "Proceed To Checkout" button
    Then I should see the address details and order review
    When I enter a comment "Order placed via automation test"
    And I click on the "Place Order" button
    And I fill in the payment details
    And I click on the "Pay and Confirm Order" button
    Then I should see the order success message
    When I click on the "Delete Account" button
    Then I should see the "ACCOUNT DELETED!" message
    When I click the "Continue" button

  @smoke @positive @test1
  Scenario: Verify address details in checkout page
    When I click on the "Signup / Login" button
    Then I should see the new user signup form
    And I enter a valid "name"
    And I enter a valid "email address"
    When I click on the "Signup" button
    Then I should see the "ENTER ACCOUNT INFORMATION" form
    And I fill in the account information form
    When I click the "Create Account" button
    Then I should see the "ACCOUNT CREATED!" message
    When I click the "Continue" button
    Then I should be logged in as the new user
    When I hover over the first product and add it to cart
    And I click on the "Continue Shopping" button
    And I click on the "Cart" button
    Then the cart page is displayed
    When I click on the "Proceed To Checkout" button
    Then I should see the address details and order review
    When I click on the "Delete Account" button
    Then I should see the "ACCOUNT DELETED!" message
    When I click the "Continue" button

  @smoke @positive @test1
  Scenario: Download Invoice after purchase order
    When I hover over the first product and add it to cart
    And I click on the "Continue Shopping" button
    And I click on the "Cart" button
    Then the cart page is displayed
    When I click on the "Proceed To Checkout" button
    And I click on the "Register / Login" button
    Then I should see the new user signup form
    And I enter a valid "name"
    And I enter a valid "email address"
    When I click on the "Signup" button
    Then I should see the "ENTER ACCOUNT INFORMATION" form
    And I fill in the account information form
    When I click the "Create Account" button
    Then I should see the "ACCOUNT CREATED!" message
    When I click the "Continue" button
    Then I should be logged in as the new user
    When I click on the "Cart" button
    And I click on the "Proceed To Checkout" button
    Then I should see the address details and order review
    When I enter a comment "Order placed via automation test"
    And I click on the "Place Order" button
    And I fill in the payment details
    And I click on the "Pay and Confirm Order" button
    Then I should see the order success message
    When I download the invoice
    And I click the "Continue" button
    And I click on the "Delete Account" button
    Then I should see the "ACCOUNT DELETED!" message
    When I click the "Continue" button

  @smoke @positive
  Scenario: Place Order: Register while Checkout
    When I hover over the first product and add it to cart
    And I click on the "Continue Shopping" button
    And I click on the "Cart" button
    Then the cart page is displayed
    When I click on the "Proceed To Checkout" button
    And I click on the "Register / Login" button
    Then I should see the new user signup form
    And I enter a valid "name"
    And I enter a valid "email address"
    When I click on the "Signup" button
    Then I should see the "ENTER ACCOUNT INFORMATION" form
    And I fill in the account information form
    When I click the "Create Account" button
    Then I should see the "ACCOUNT CREATED!" message
    When I click the "Continue" button
    Then I should be logged in as the new user
    When I click on the "Cart" button
    And I click on the "Proceed To Checkout" button
    Then I should see the address details and order review
    When I enter a comment "Order placed via automation test"
    And I click on the "Place Order" button
    And I fill in the payment details
    And I click on the "Pay and Confirm Order" button
    Then I should see the order success message
    When I click on the "Delete Account" button
    Then I should see the "ACCOUNT DELETED!" message
    When I click the "Continue" button
