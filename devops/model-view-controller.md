# MVC

## Model View Controller

### Model:
- Manages the fundamental behaviours and data
- Interacts with the requests from input fields
- Respond to instructions
- Notify observers in event-driven systems

### View:
- Is the user interface of your application
- Pull data from database, translate it into the view

### Controller:
- Take HTTP requests & get the right data
- Validates user input
- Sends responses back to the user

### DO NOT:
- Use the view or controller in your model
- No SQL. Inside your controller, let alone views

### Example (E-Commerce)
- User will look at a view
- User adds products to his shopping cart
- Controller accepts the request & responds by interacting with the model
- Model grabs products and send it back to the controller
- Controller sends it back to the view
