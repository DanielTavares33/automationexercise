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

  @smoke @positive
  Scenario: Verify Product quantity in Cart
    When I click on "View Product" of the first product
    Then I should be on the product detail page
    When I set the product quantity to 4
    And I add the product to cart
    And I click on the "View Cart" button
    Then the cart should contain the product with quantity 4

  @smoke @positive
  Scenario: Add Products in Cart
    When I click on the "Products" button
    Then I should be on the all products page
    When I hover over the first product and add it to cart
    And I click on the "Continue Shopping" button
    And I hover over the second product and add it to cart
    And I click on the "View Cart" button
    Then both products should be added to the cart
    And their prices, quantity and total price should be correct

  @smoke @positive
  Scenario: Remove Products From Cart
    When I hover over the first product and add it to cart
    And I click on the "Continue Shopping" button
    And I click on the "Cart" button
    Then the cart page is displayed
    When I remove the first product from the cart
    Then the cart should be empty

  @smoke @positive
  Scenario: Search Product
    When I click on the "Products" button
    Then I should be on the all products page
    And the products list should be visible
    When I search for product "Blue Top"
    Then the searched products heading should be visible
    And all searched products should be visible

  @smoke @positive @test1
  Scenario: Search Products and Verify Cart After Login
    Given I have a registered account
    When I click on the "Logout" button
    And I click on the "Products" button
    Then I should be on the all products page
    When I search for product "Blue Top"
    Then the searched products heading should be visible
    And all searched products should be visible
    When I add all searched products to cart
    And I click on the "Cart" button
    Then the cart should not be empty
    When I click on the "Signup / Login" button
    And I fill in the login form
    And I click on the "Login" button
    Then I should be logged in as the user
    When I click on the "Cart" button
    Then the cart should not be empty

  @smoke @positive @test1
  Scenario: Add review on product
    When I click on the "Products" button
    Then I should be on the all products page
    When I click on "View Product" of the first product
    Then I should be on the product detail page
    And I should see the "Write Your Review" review section
    When I fill in the review form
    And I submit the review
    Then I should see the review success message
