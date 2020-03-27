
package com.StepDefinition;

import com.pages.RemoveFromCart;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class RemoveSD {
	
	RemoveFromCart remove=new RemoveFromCart();
	@Given("^the url opens in the chrome browser$")
	public void the_url_opens_in_the_chrome_browser() throws Throwable {
	    remove.url("chrome");
	}

	@When("^the user click on cart option$")
	public void the_user_click_on_cart_option() throws Throwable {
	   remove.homepage();
	}

	@Then("^click on Remove option$")
	public void click_on_Remove_option() throws Throwable {
	   remove.remove();
	}

      @Then("^user selects the product and clicks on remove$")
public void user_selects_the_product_and_clicks_on_remove() throws Throwable {
    System.out.println("removed from cart");
}


}
