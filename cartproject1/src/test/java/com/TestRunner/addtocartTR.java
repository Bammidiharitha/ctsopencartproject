package com.TestRunner;



import cucumber.api.CucumberOptions;
@CucumberOptions(
		features = "src/main/resources/feature/testcase.feature",
		plugin = {"pretty","html:test-output","json:json_output/cucmber.json","junit:junit_xml/cucumber.xml","com.cucumber.listener.ExtentCucumberFormatter:reports/Extentreports/Extentreport.html"},//reports generated
       //  tags = {"@TC01_AddtoCart,@TC02_Checkcart,@TC03_priceupdate,@TC04_storingProductDetails,@TC05_RemovefromCart"},
         
		glue = {"com.StepDefinition"},
		monochrome = true
		)
public class addtocartTR {
	

}
