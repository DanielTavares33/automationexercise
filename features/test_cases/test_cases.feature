@regression @test-cases
Feature: Test Cases Page

  Background:
    Given I visit the home page

  @smoke @positive
  Scenario: Navigate to test cases page successfully
    When I click on the "Test Cases" button
    Then I should be on the test cases page
