Feature: Ecommerce validations

    @NegativeScenarios
    Scenario Outline: Validating error messages by improper credentials
        Given a login to ecommerce1 application with username "<Username>" and password "<Password>"
        Then User should see error message.
        Examples:
            | Username           | password   |
            | sowmya66@gmail.com | Sowmya@123 |