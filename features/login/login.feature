@prio-1 @login
Feature: Login

  Background:
    Given I visit the home page

  @valid @delete-account
  Scenario: Login User with correct email and password
    And  I have a registered account
    When I click on the "Signup / Login" button
    Then I should see the login form
    When I fill in the login form
    And I click on the "Login" button
    Then I should be logged in as the user
    When I click on the "Delete Account" button
    Then I should see the "ACCOUNT DELETED!" message
