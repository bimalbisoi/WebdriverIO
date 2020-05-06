import ContactUs_PO from '../pageObjects/ContactUs_PO';
import Config from '../config/main_config';
import dataGenerators from '../utils/dataGenerators';

describe("Test contact us page on webdriveruni", () => {

it.only("Submit all information via the contact us page", () => {
    ContactUs_PO.open("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    ContactUs_PO.submitAllInformationViaContactUsForm('rahul','dravid','rahul@test.com','crickter');
    expect(ContactUs_PO.getSuccessfulMessage()).to.contain('Thank You for your Message!')
    }); 

it("Submit all information individually via the contact us page", () => {
        console.log(Config.baseUrl);
        ContactUs_PO.open(Config.baseUrl);
        ContactUs_PO.setFirstName(Config.firstName);
        ContactUs_PO.setLastName(Config.lastName);
        ContactUs_PO.setEmailAddress(Config.email);
        ContactUs_PO.setComments(Config.comments);
        ContactUs_PO.clickSubmitButton();
        expect(ContactUs_PO.getSuccessfulMessage()).to.contain(Config.successfulmsg)
        });
it("Unccessful submission via the contact us page", () => {
        ContactUs_PO.open(Config.baseUrl);
        ContactUs_PO.setFirstName(Config.firstName);
        //ContactUs_PO.setLastName(Config.lastName);
        ContactUs_PO.setEmailAddress(dataGenerators.generateRandomEmailAddress());
        ContactUs_PO.setComments(dataGenerators.generateRandomString());
        ContactUs_PO.clickSubmitButton();
        expect(ContactUs_PO.getUnSuccessfulMessage()).to.be.false;
        });  
    
  });