@regression @register
Feature: Register

  Background:
    Given I visit the home page

  @regression @negative
  Scenario: Register user with existing email
    And I click on the "Signup / Login" button
    And I should see the new user signup form
    And I enter a valid "name"
    And I enter a valid "existing email address"
    When I click on the "Signup" button
    Then I should see an error "Email Address already exist!"

  @smoke @positive
  Scenario: Register user
    And I click on the "Signup / Login" button
    And I should see the new user signup form
    And I enter a valid "name"
    And I enter a valid "email address"
    When I click on the "Signup" button
    Then I should see the "ENTER ACCOUNT INFORMATION" form
    And  I fill in the account information form
    When I click the "Create Account" button
    Then I should see the "ACCOUNT CREATED!" message
    When I click the "Continue" button
    Then I should be logged in as the new user
