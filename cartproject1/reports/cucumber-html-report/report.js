$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/feature/testcase.feature");
formatter.feature({
  "line": 2,
  "name": "OpenCartDemo Website",
  "description": "",
  "id": "opencartdemo-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@opencartdemo"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Choose the product and add to cart",
  "description": "",
  "id": "opencartdemo-website;choose-the-product-and-add-to-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@TC01_AddtoCart"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the url opens in Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user clicks on phones",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user selects the product",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "clicks on add to cart",
  "keyword": "And "
});
formatter.match({
  "location": "addtocartSD.the_url_opens_in_Chrome_application()"
});
formatter.result({
  "duration": 5834013656,
  "status": "passed"
});
formatter.match({
  "location": "addtocartSD.the_user_clicks_on_phones()"
});
formatter.result({
  "duration": 28597382878,
  "status": "passed"
});
formatter.match({
  "location": "addtocartSD.the_user_selects_the_product()"
});
formatter.result({
  "duration": 28165498517,
  "status": "passed"
});
formatter.match({
  "location": "addtocartSD.clicks_on_add_to_cart()"
});
formatter.result({
  "duration": 50128654858,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"content\"]/div[2]/div[1]/div/div[2]/div[2]/button[1]/span\"}\n  (Session info: chrome\u003d80.0.3987.149)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SUNIL\u0027, ip: \u0027192.168.43.99\u0027, os.name: \u0027Windows 8\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.2\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\sunilD\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:54487}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 33844d8a81efd2a9c422ff7a5db350b3\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"content\"]/div[2]/div[1]/div/div[2]/div[2]/button[1]/span}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.pages.AddToCart.addcart(AddToCart.java:51)\r\n\tat com.StepDefinition.addtocartSD.clicks_on_add_to_cart(addtocartSD.java:28)\r\n\tat ✽.And clicks on add to cart(src/main/resources/feature/testcase.feature:8)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 11,
  "name": "check the cart",
  "description": "",
  "id": "opencartdemo-website;check-the-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@TC02_Checkcart"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "url opens in chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "the user clicks on Cart option",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the user checks the product",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "confirms the product we added is present or not",
  "keyword": "And "
});
formatter.match({
  "location": "CheckCartSD.url_opens_in_chrome_browser()"
});
formatter.result({
  "duration": 3746889345,
  "status": "passed"
});
formatter.match({
  "location": "CheckCartSD.the_user_clicks_on_Cart_option()"
});
formatter.result({
  "duration": 34028595268,
  "status": "passed"
});
formatter.match({
  "location": "CheckCartSD.the_user_checks_the_product()"
});
formatter.result({
  "duration": 10658627574,
  "status": "passed"
});
formatter.match({
  "location": "CheckCartSD.confirms_the_product_we_added_is_present_or_not()"
});
formatter.result({
  "duration": 5128931374,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "when increasing the quantity whether the price is updating or not",
  "description": "",
  "id": "opencartdemo-website;when-increasing-the-quantity-whether-the-price-is-updating-or-not",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@TC03_priceupdate"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "the url open in chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "user click on cart option",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "increase the quantity of the product",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "click on refresh button",
  "keyword": "And "
});
formatter.match({
  "location": "PriceUpdateSD.the_url_open_in_chrome_browser()"
});
formatter.result({
  "duration": 3715092407,
  "status": "passed"
});
formatter.match({
  "location": "PriceUpdateSD.user_click_on_cart_option()"
});
formatter.result({
  "duration": 12308136154,
  "status": "passed"
});
formatter.match({
  "location": "PriceUpdateSD.increase_the_quantity_of_the_product()"
});
formatter.result({
  "duration": 12251207041,
  "status": "passed"
});
formatter.match({
  "location": "PriceUpdateSD.click_on_refresh_button()"
});
formatter.result({
  "duration": 5733333413,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "The product details are stored in excel",
  "description": "",
  "id": "opencartdemo-website;the-product-details-are-stored-in-excel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@TC04_storingProductDetails"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "url open in chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "the user clicks on cart option",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "clicks on the selected product",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "store the product name into excel",
  "keyword": "And "
});
formatter.match({
  "location": "StoringSD.url_open_in_chrome_browser()"
});
formatter.result({
  "duration": 3603091909,
  "status": "passed"
});
formatter.match({
  "location": "StoringSD.the_user_clicks_on_cart_option()"
});
formatter.result({
  "duration": 10740966587,
  "status": "passed"
});
formatter.match({
  "location": "StoringSD.clicks_on_the_selected_product()"
});
formatter.result({
  "duration": 62706053107,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#input\\-email\"}\n  (Session info: chrome\u003d80.0.3987.149)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SUNIL\u0027, ip: \u0027192.168.43.99\u0027, os.name: \u0027Windows 8\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.2\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\sunilD\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:54595}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: ec47b7c42c327f202a3073ec0b202ec1\n*** Element info: {Using\u003did, value\u003dinput-email}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.pages.StoringinExcel.actions(StoringinExcel.java:45)\r\n\tat com.StepDefinition.StoringSD.clicks_on_the_selected_product(StoringSD.java:25)\r\n\tat ✽.Then clicks on the selected product(src/main/resources/feature/testcase.feature:28)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StoringSD.store_the_product_name_into_excel()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 32,
  "name": "Remove the product from cart",
  "description": "",
  "id": "opencartdemo-website;remove-the-product-from-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@TC05_RemovefromCart"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "the url opens in the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "the user click on cart option",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "user selects the product and clicks on remove",
  "keyword": "Then "
});
formatter.match({
  "location": "RemoveSD.the_url_opens_in_the_chrome_browser()"
});
formatter.result({
  "duration": 3542161764,
  "status": "passed"
});
formatter.match({
  "location": "RemoveSD.the_user_click_on_cart_option()"
});
formatter.result({
  "duration": 11940664351,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});