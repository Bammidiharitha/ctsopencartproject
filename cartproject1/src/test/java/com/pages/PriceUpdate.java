package com.pages;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;

public class PriceUpdate {
	WebDriver driver;
	By Myaccount=By.xpath("//*[@id=\"top-links\"]/ul/li[2]/a/span[1]");
	By login=By.xpath("//*[@id=\"top-links\"]/ul/li[2]/ul/li[2]/a");
	By Email=By.id("input-email");
	By password=By.id("input-password");
	By loginbtn=By.xpath("//*[@id=\"content\"]/div/div[2]/div/form/input");
	By cart=By.xpath("//*[@id=\"top-links\"]/ul/li[4]/a/span");
	By Quantity=By.xpath("//*[@id=\"content\"]/form/div/table/tbody/tr/td[4]/div/input");
	By button=By.xpath("//*[@id=\"content\"]/form/div/table/tbody/tr/td[4]/div/span/button[1]");
	
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
	
	public void actions() 
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

}
	public void incquan() throws InterruptedException {
		driver.findElement(Quantity).clear();
		driver.findElement(Quantity).sendKeys("2"); // increasing the quantity of items
		driver.findElement(button).click();
		Thread.sleep(1000);
		driver.close();
	}
	
}
