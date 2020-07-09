Feature: search product sporting

Background:
	Given i am on the store home page 
	When enter the requested product "shoes" 

Scenario: Search product online by pressing enter 
	Then press enter 
	And select the brand "PUMA" 
	And select the size "10" 
	Then i see the list of the requested product 
	Then i close browser
	
Scenario: Search product online by pressing button 

	Then click the button search 
	And select the brand "ASICS" 
	And select the size "9" 
	Then i see the list of the requested product 
	Then i close browser 
