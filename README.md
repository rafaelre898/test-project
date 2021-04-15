# Engineering Project

## Requirements: 

To start, create a feature branch: /feature/{your name} 

Please reference the UI mockup here 

(https://github.com/SmartBIM/engineering-project/blob/main/images/UX-Markup.pdf)

# Frontend: 
## Technical Requirements: 
- Must use React. Bonus points for implementing Redux.
- Must use the styled components library. https://styled-components.com/


	## User Stories: 
	- A User should be able to navigate to a product details page and view product information.
	- A User should be able to tab through "product information", "resources", and "other" data. 
	- Users should be able to click the add and delete buttons.  
	- Button, Header, and Text color should come from a configuration route. Font style should also come from this method along with the a logo and company name. 

## Routing: 
The page should navigate when a user enters the product id in the url, i.e. 
```
		localhost:8080/products/t-12345-6
```


# Backend: 
## Technical Requirements: 
- Must use Node w/ Express routes
- No database necessary, just pass back json 


	## User Stories: 
	- There should be a route that takes a product id as an argument and passes back the details of that product. 
	- There should be a route that takes in a site id and returns the site configuration for that id. 



# Bonus Points: 
- A page and route that get all products, and displays them in a list of links that go to the details page. 
- Any creative styling enhancements.  


When complete, do a pull request on the development branch. 

Any questions, please reach out.
ryan.chesnut@concora.com

