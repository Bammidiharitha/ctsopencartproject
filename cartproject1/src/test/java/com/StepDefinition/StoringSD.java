package com.StepDefinition;

import com.pages.StoringinExcel;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StoringSD extends StoringinExcel{

	
	
	@Given("^url open in chrome browser$")
	public void url_open_in_chrome_browser() throws Throwable {
	   url("chrome");
	}

	@When("^the user clicks on cart option$")
	public void the_user_clicks_on_cart_option() throws Throwable {
	   homepage();
	}

	@Then("^clicks on the selected product$")
	public void clicks_on_the_selected_product() throws Throwable {
	   actions();
	}
	

	@Then("^store the product name into excel$")
	public void store_the_product_name_into_excel() throws Throwable {
	   storexecel();
	}


}
