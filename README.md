# Engineering Project

## Requirements: 

To start, create a feature branch: /feature/{your name} 

Please reference the UI mockup here 

(https://github.com/SmartBIM/engineering-project/blob/main/images/UX-Markup.pdf)

# Frontend: 
## Technical Requirements: 
- Must use React. Bonus points for implementing Redux.
- Must use the Chakra UI for components


	## User Stories: 
	- The system should be multi-tenant
	- A User should see a list of products upon app load.
	- A User should be able to navigate to a product details page and view product information.
	- A User should be able to tab through "product information" (details about a product), "resources" (attachments that might be linked), and any other data that might be structured around a product. 
	- Users should be able to click the add and delete buttons.  
	- A User should be able to configure look and feel of the app. 
	- Button, Header, and Text color should come from a configuration route. Font style should also come from this method along with the a logo and company name. 

## Routing: 
The page should navigate when a user enters the product id in the url, i.e. 
```
		localhost:8080/products/t-12345-6
```


# Backend: 
## Technical Requirements: 
- Must use Node w/ Express routes
- No database required, just pass back json. However, have a plan on DB implementation


	## User Stories: 
	- There should be a route that takes a product id as an argument and passes back the details of that product. 
	- There should be a route that takes in a site id and returns the site configuration for that id. 



# Bonus Points: 
- Any creative styling enhancements.
- Adding Redux   

When complete, send a link to the github repo. 

Any questions, please reach out.
ryan.chesnut@concora.com

