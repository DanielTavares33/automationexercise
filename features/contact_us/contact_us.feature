@regression @contact-us
Feature: Contact Us

  Background:
    Given I visit the home page

  @smoke @positive
  Scenario: Submit contact us form successfully
    When I click on the "Contact Us" button
    Then I should see the "GET IN TOUCH" heading
    When I fill in the contact us form
    And I upload a file
    And I click on the "Submit" button
    Then I should see the success message "Success! Your details have been submitted successfully."
    When I click on the "Home" button
    Then I should be on the home page
