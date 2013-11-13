Feature: Printing the result on the screen 

  Scenario: Clicking rock
    Given I am on the homepage
    When I press "Rock"
    Then I should see "rock crushes lizard" 