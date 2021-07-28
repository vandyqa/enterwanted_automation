

//https://dmutah.atlassian.net/browse/VK4DL-31?atlOrigin=eyJpIjoiOTRjMDhiMmI0YjgxNDNlMWJjNGIwMWY2ZTQyZDI3YzEiLCJwIjoiaiJ9    ----- JIRA test case link

import { Builder, By, Capabilities, ISize, WebDriver } from "selenium-webdriver"     //downloading the dependencies/libraries for Selenium Web driver
import { getTextOfJSDocComment } from "typescript"
import { enterwanted } from "./basicutility"   // importing enterwanted function from the file basicutility in the same folder

const chromedriver = require('chromedriver')    // initializing the chrome browser

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()  //creating a driver to interact with chrome browser

const myPage = new enterwanted(driver)

test('enterwanted header text field should accept characters betweeen 9 and 19', async () => {

    // We want our test to wait, or 'await' until the page has loaded, or the command is complete
    await myPage.navigate()
    await driver.sleep(3000)
   
    /**
     * This test case is for validating Header field which should be between 9 and 19 characters
     * @example MyHeader ="hello", it will display error message "header value is not between 9 and 19 characters"
     * @example MyHeader="123456789012", it will display "header value accepted"
     * used equivalence partitioning here (valid and invalid case)
     */
    let MyHeader="Vandana123456788";
    let header = await myPage.driver.findElement(myPage.inputheader)
    //await header.sendKeys('Vandana\n')
    await header.sendKeys(`${MyHeader}`)
    let count=(`${MyHeader}`.length);
    if(count<9 || count>19)
    {
        console.log("header value is not between 9 and 19 characters")
    }
    else{
        console.log("header value accepted")
    }
 
})

 /**
     * This test case is for validating MKE field which should be between 2 and 4 characters
     * @example MKE ="hello", it will display error message "MKE value is not between 2 and 4 characters"
     * @example MKE="12", it will display "MKE value accepted"
     * used equivalence partitioning here (valid and invalid case)
     */


test('enterwanted MKE text field should acceptcharacters between 2 and 4', async () => {

    await driver.sleep(3000)
    let myMKE="test";
    let MKE = await myPage.driver.findElement(myPage.inputMKE)
    await MKE.sendKeys(`${myMKE}`)
    let count1=(`${myMKE}`.length);
    if(count1<2 || count1>4)
    {
        console.log("MKE value is not between 2 and 4 characters")
    }
    else{
        console.log("MKE value accepted")
    }
    
       //await myPage.driver.quit()
})