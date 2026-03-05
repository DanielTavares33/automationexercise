@prio-1 @register
Feature: Register

  Background:
    Given I visit the home page

  @valid @register
  Scenario: Register user
    When I click on the "Signup / Login" button
  #   Then I should see the new user signup form
  #   When I enter a name and email address
  #   And  I click the "Signup" button
  #   Then I should see the "ENTER ACCOUNT INFORMATION" form
  #   When I fill in the account information form
  #   And  I click the "Create Account" button
  #   Then I should see the "ACCOUNT CREATED!" message
  #   When I click the "Continue" button
  #   Then I should be logged in as the new user
