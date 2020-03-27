package com.StepDefinition;

import com.pages.AddToCart;
import com.pages.CheckCart;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class addtocartSD extends AddToCart{
	CheckCart check=new CheckCart();

	@Given("^the url opens in Chrome application$")
	public void the_url_opens_in_Chrome_application() throws Throwable {
	  url("chrome");
	}

	@When("^the user clicks on phones$")
	public void the_user_clicks_on_phones() throws Throwable {
	   homepage();
	}

	@Then("^the user selects the product$")
	public void the_user_selects_the_product() throws Throwable {
	    actions();
	}

	@Then("^clicks on add to cart$")
	public void clicks_on_add_to_cart() throws Throwable {
	   addcart();
	}

}
