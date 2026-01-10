Feature: Ecommerce validations

Scenario: Validating error messages by improper credentials
 Given a login to ecommerce1 application with username "sowmya64@gmail.com" and password "Sowmya@123"
 Then User should see error message.