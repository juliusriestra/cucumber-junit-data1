package com.ebay.steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.ebay.pages.SearchPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SearchSteps {
	
	WebDriver driver;
	SearchPage searchPage;
	
	@Given("^i am on the store home page$")
	public void i_am_on_the_store_home_page() {
		System.setProperty("webdriver.chrome.driver", "E:\\webdrivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://www.ebay.com");
	}
	
	@When("^enter the requested product \"(.*)\"$")
	public void enter_the_requested(String product) {
		searchPage = new SearchPage(driver);
		searchPage.enterProduct(product);
	}
	
	@Then("^press enter$")
	public void press_enter() {
		searchPage = new SearchPage(driver);
		searchPage.pressingEnter();
	}
	
	@Then("^click the button search$")
	public void click_the_button_search() {
		searchPage = new SearchPage(driver);
		searchPage.clickButtonSearch();
	}
	
	@Then("^select the brand \"(.*)\"$")
	public void select_the_brand(String brand) {
		searchPage = new SearchPage(driver);
		searchPage.selectBrand(brand);
	}
	
	@Then("^select the size \"(.*)\"$")
	public void select_the_size(String size) {
		searchPage = new SearchPage(driver);
		searchPage.selectSize(size);
	}
	
	@Then("^i see the list of the requested product$")
	public void I_see_the_list_of_the_requested_product() {
		searchPage = new SearchPage(driver);
		searchPage.seeResult();
	}
	
	@Then("^i close browser$")
	public void i_close_browser() {
		driver.close();
	}
	
}
