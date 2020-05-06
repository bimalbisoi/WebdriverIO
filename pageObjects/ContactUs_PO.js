import Base_PO from './Base_PO';

class ContactUs_PO extends Base_PO{

    get firstName() {return $('input[name="first_name"]');}
    get lastName() {return $('input[name="last_name"]');}
    get emailAddress() {return $('input[name="email"]');}
    get comments() {return $('textarea[name="message"]');}
    get submitButton() {return $('input[value="SUBMIT"]');}
    get reset() {return $('input[value="RESET"]');}
    get successfulSubmissionHeader() {return $('#contact_reply > h1');}
    get unSuccessfulSubmissionHeader() {return $("body");}
    
    setFirstName(firstname){
        this.firstName.setValue(firstname);
    }
    setLastName(lastname){
        this.lastName.setValue(lastname);
    }
    setEmailAddress(emailAddress){
        this.emailAddress.setValue(emailAddress);
    }
    setComments(comments){
        this.comments.setValue(comments);
    }
    clickSubmitButton(){
        this.submitButton.click();
    }
    getSuccessfulMessage(){
        this.successfulSubmissionHeader.waitForDisplayed(10000);
        return this.successfulSubmissionHeader.getText();
    }
    getUnSuccessfulMessage(){
        this.unSuccessfulSubmissionHeader.waitForDisplayed(5000);
        return this.unSuccessfulSubmissionHeader.isDisplayed();
    }
    submitAllInformationViaContactUsForm(firstName,lastName,emailAddress,comments) {
        this.firstName.waitForDisplayed(5000);
        this.firstName.setValue(firstName);
        this.lastName.setValue(lastName);
        this.emailAddress.setValue(emailAddress);
        this.comments.setValue(comments);
        this.clickSubmitButton();
    }
}
export default new ContactUs_PO();