import { Builder, By, Capabilities, ISize, WebDriver } from "selenium-webdriver"   //downloading the dependencies/libraries for Selenium Web driver
import { getTextOfJSDocComment } from "typescript"


const chromedriver = require('chromedriver')   
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()    //creating a driver to interact with chrome browser


export class enterwanted {
    url: string = 'https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html'        //initializing the url
    driver: WebDriver
    inputheader:By=By.name("hdrInput");   //locator for header
    inputMKE:By=By.name("mkeInput");      //locator for MKE

    constructor(drive) {                 //initilaizing the constructor
        this.driver = drive
    }
    async navigate(){
        await this.driver.get(this.url)   //opening the browser
    }
    
}