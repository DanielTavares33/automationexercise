@regression @brand
Feature: Brand Products

  Background:
    Given I visit the home page

  @smoke @positive
  Scenario: View & Cart Brand Products
    When I click on the "Products" button
    Then the brands should be visible on left side bar
    When I click on the "Polodsdada" brand
    Then I should be on the brand page for "Polo"
    When I click on the "H&M" brand
    Then I should be on the brand page for "H&M"
