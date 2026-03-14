@regression @category
Feature: Category

  Background:
    Given I visit the home page

  @smoke @positive
  Scenario: View Category Products
    Then the category sidebar should be visible
    When I expand the "Women" category
    And I click on the "Tops" sub-category under "Women"
    Then I should be on the category products page
    When I expand the "Men" category
    And I click on the "Tshirts" sub-category under "Men"
    Then I should be on the category products page
