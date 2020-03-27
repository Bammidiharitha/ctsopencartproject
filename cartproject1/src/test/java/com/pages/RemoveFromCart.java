package com.pages;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;

public class RemoveFromCart {
	WebDriver driver;
	By Myaccount=By.xpath("//*[@id=\"top-links\"]/ul/li[2]/a/span[1]");
	By login=By.xpath("//*[@id=\"top-links\"]/ul/li[2]/ul/li[2]/a");
	By Email=By.id("input-email");
	By password=By.id("input-password");
	By loginbtn=By.xpath("//*[@id=\"content\"]/div/div[2]/div/form/input");
	By cart=By.xpath("//*[@id=\"top-links\"]/ul/li[4]/a/span");
By cancel=By.xpath("//*[@id=\"content\"]/form/div/table/tbody/tr/td[4]/div/span/button[2]/i");

public void url(String browser) //  launching the application using multiple browsers
{ 
		if(browser.equalsIgnoreCase("chrome")) 
		{
			System.setProperty("webdriver.chrome.driver", "C:\\Users\\DELL\\Downloads\\cartproject1 (1)\\cartproject1\\Drivers\\chromedriver.exe\\");
			driver = new ChromeDriver(); // to launch the application in chrome browser
		}
		else
		if(browser.equalsIgnoreCase("firefox"))
		{
			System.setProperty("webdriver.gecko.driver", "C:\\Users\\DELL\\Downloads\\cartproject1 (1)\\cartproject1\\Drivers\\geckodriver.exe\\");
			driver = new FirefoxDriver(); // to launch the application in firefox browser
		}
	
	driver.manage().window().maximize();  // maximizes the browser
	driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS); // providing waiting time
	
}
public void homepage() //using webdriver get visting the testing website
{
	driver.get("https://demo.opencart.com/");
	System.out.println(driver.getTitle());
}

public void remove() throws IOException 
{
	driver.findElement(Myaccount).click();
	WebElement link =driver.findElement(Myaccount); 
	WebElement link2=driver.findElement(login);
	Actions action = new Actions(driver);
	action.moveToElement(link);
	action.moveToElement(link2).click().perform();
	driver.findElement(Email).sendKeys("bammidiharitha11@gmail.com");
	driver.findElement(password).sendKeys("Haritha@05");
	driver.findElement(loginbtn).click();
	 driver.findElement(cart).click();
	 driver.findElement(cancel).click();
	 File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(scrFile, new File("Screenshots\\remove.jpg"));
}

 
	
 
}
