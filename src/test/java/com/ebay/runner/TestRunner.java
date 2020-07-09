package com.ebay.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features= {"src/test/java/com/ebay/features"},
		glue={"com.ebay.steps"},
		format = {"pretty","html:test-output","json:json-output/cucumber.json","junit:junit_xml/cucumber.xml"},
		strict = true,
		monochrome = true, //display the console output in a proper readable format
		dryRun = false) //open(false) the browser
public class TestRunner {
	
}









