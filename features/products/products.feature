@regression @products
Feature: Products

  Background:
    Given I visit the home page

  @smoke @positive
  Scenario: Verify all products and product detail page
    When I click on the "Products" button
    Then I should be on the all products page
    And the products list should be visible
    When I click on "View Product" of the first product
    Then I should be on the product detail page
    And I should see the product details
