package steps;


import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.LoginPage;
import page.TestBase;

public class LoginStepDefinition extends TestBase {
	LoginPage loginPageObj;

	@Before
	public void beforeRun() {
		initDriver();
		loginPageObj = PageFactory.initElements(driver, LoginPage.class);
	}

	@Given("^User is on the Techfios test page$")
	public void user_is_on_the_Techfios_test_page() throws Throwable {
		driver.get("http://techfios.com/test/101/");
	}

	@When("^User clicks on Skyblue button$")
	public void user_clicks_on_Skyblue_button() throws Throwable {
		loginPageObj.skyBlueButton();
	}
	
	@Then("^Background color will change to sky blue$") 
	public void background_color_will_change_to_sky_blue() throws Throwable { 
		takesScreenshot(driver);
    }
	
	
	@When("^User clicks on Skywhite button$")
	public void user_clicks_on_Skywhite_button() throws Throwable {
		loginPageObj.skyWhiteButton();
	}
	
	@Then("^Background color will change to sky white$") 
	public void background_color_will_change_to_sky_white() throws Throwable { 
		takesScreenshot(driver);
    }
	
	
	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}

}
