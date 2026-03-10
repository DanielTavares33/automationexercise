@regression @login
Feature: Login

  Background:
    Given I visit the home page

  @regression @negative
  Scenario: Login User with incorrect email and password
    When I click on the "Signup / Login" button
    Then I should see the login form
    When I enter incorrect email address and password
    And I click on the "Login" button
    Then I should see an error "Your email or password is incorrect!"

  @smoke @positive
  Scenario: Login User with correct email and password
    And  I have a registered account
    When I click on the "Signup / Login" button
    Then I should see the login form
    When I fill in the login form
    And I click on the "Login" button
    Then I should be logged in as the user
    When I click on the "Delete Account" button
    Then I should see the "ACCOUNT DELETED!" message

  @smoke @positive
  Scenario: Logout User
    And I have a registered account
    When I click on the "Signup / Login" button
    Then I should see the login form
    When I fill in the login form
    And I click on the "Login" button
    Then I should be logged in as the user
    When I click on the "Logout" button
    Then I should see the login form
