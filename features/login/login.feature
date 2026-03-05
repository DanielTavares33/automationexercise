Feature: Login

  Background:
    Given I visit the home page

  Scenario: Login with valid credentials
    And  I click on the "Signup / Login" button
    Then I should see the login form