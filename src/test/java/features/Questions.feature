@LoginFeature @Regression
Feature: Set SkyBlue Background

#Background: 
# 	Given User is on the Techfios test page

@Scenario1
Scenario: Set SkyBlue Background 
	Given User is on the Techfios test page   
	When User clicks on Skyblue button
	Then Background color will change to sky blue  

@Scenario2
Scenario: 
	Given User is on the Techfios test page  
	When User clicks on Skywhite button
	Then Background color will change to sky white  
