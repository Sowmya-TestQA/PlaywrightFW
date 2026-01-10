Feature: Ecommerce validations

@Regression
Scenario: Placing the order for a product
 Given a login to ecommerce application with username "sowmya64@gmail.com" and password "Sowmya@123"
 When User searches for the product "ADIDAS ORIGINAL" and adds to cart
 Then User verifies for the product "ADIDAS ORIGINAL" is displayed in the cart
 When Enters valid details and place the order
 Then Verifies order is displayed in the order history
