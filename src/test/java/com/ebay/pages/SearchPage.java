package com.ebay.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SearchPage {
	
	private WebDriver driver;
	private WebDriverWait driverWait;
	private By textSearchProduct;
	private By buttonSearch;
	private By checkBrand;
	private By checkSize;
	private By msgResult;
	
	public SearchPage(WebDriver driver) {
		this.driver = driver;
		this.textSearchProduct = By.id("gh-ac");
		this.buttonSearch = By.id("gh-btn");
		this.msgResult = By.xpath("//*[@id='mainContent']/div[1]/div/div[2]/div/div[1]/h1/span[1]");
	}
	
	public void enterProduct(String product) {
		driverWait = new WebDriverWait(driver, 10);
		driverWait.until(ExpectedConditions.presenceOfElementLocated(textSearchProduct));
		driver.findElement(textSearchProduct).sendKeys(product);
	}
	
	public void pressingEnter() {
		driverWait = new WebDriverWait(driver, 10);
		driverWait.until(ExpectedConditions.presenceOfElementLocated(textSearchProduct));
		driver.findElement(textSearchProduct).submit();
	}
	
	public void clickButtonSearch() {
		driverWait = new WebDriverWait(driver, 10);
		driverWait.until(ExpectedConditions.elementToBeClickable(buttonSearch));
		driver.findElement(buttonSearch).click();
	}
	
	public void selectBrand(String brand) {
		driverWait = new WebDriverWait(driver, 10);
		checkBrand = By.xpath("//input[contains(@type,'checkbox') and contains(@aria-label,'" + brand + "')]");
		driverWait.until(ExpectedConditions.presenceOfElementLocated(checkBrand));
		driver.findElement(checkBrand).click();
	}
	
	public void selectSize(String size) {
		driverWait = new WebDriverWait(driver, 10);
		checkSize = By.xpath("//input[contains(@type,'checkbox') and contains(@aria-label,'" + size + "')]");
		driverWait.until(ExpectedConditions.presenceOfElementLocated(checkSize));
		driver.findElement(checkSize).click();
	}
	
	public void seeResult() {
		driverWait = new WebDriverWait(driver, 10);
		driverWait.until(ExpectedConditions.presenceOfElementLocated(msgResult));
		driver.findElement(msgResult).getText();
		
	}
}
