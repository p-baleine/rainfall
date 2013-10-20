Feature: Top
  Visit rainfall to view the current rainfall.

  Scenario: visit top of rainfall
    Given visit top of rainfall.
    Then Japan area map should be rendered.
