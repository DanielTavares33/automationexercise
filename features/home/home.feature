@regression @home
Feature: Home

  Background:
    Given I visit the home page

  @smoke @positive
  Scenario: Verify Subscription in home page
    When I scroll down to footer
    Then I should see the subscription heading
    When I subscribe with email "testuser@example.com"
    Then I should see the subscription success message

  @smoke @positive
  Scenario: Verify Subscription in Cart page
    When I click on the "Cart" button
    And I scroll down to footer
    Then I should see the subscription heading
    When I subscribe with email "testuser@example.com"
    Then I should see the subscription success message

  @smoke @positive @test1
  Scenario: Add to cart from Recommended items
    When I scroll down to footer
    Then I should see the recommended items
    When I add the first recommended item to cart
    And I click on the "View Cart" button
    Then the cart page is displayed
    And the cart should not be empty

  @smoke @positive @test1
  Scenario: Verify Scroll Up using Arrow button and Scroll Down functionality
    When I scroll down to footer
    Then I should see the subscription heading
    When I click the scroll up arrow
    Then I should see the top of the page

  @smoke @positive @test1
  Scenario: Verify Scroll Up without Arrow button and Scroll Down functionality
    When I scroll down to footer
    Then I should see the subscription heading
    When I scroll up to top
    Then I should see the top of the page
