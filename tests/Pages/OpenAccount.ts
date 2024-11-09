import {expect, type Locator, type Page} from '@playwright/test';

export class OpenAccount {
readonly page:Page;
readonly Opennewaccountlink:Locator;
readonly Listtypeofaccounts:Locator;
readonly ListCusaccounts:Locator;
readonly Onewaccountbtn:Locator;


constructor (page:Page){
this.page= page ;

this.Listtypeofaccounts=page.locator('#type');
this.ListCusaccounts=page.locator('#fromAccountId');
this.Onewaccountbtn=page.getByRole('button', { name: 'Open New Account' });
}







async SelectCheckingAccountFromList() {
    await this.Listtypeofaccounts.selectOption({ label: 'CHECKING' });
}

async Selectsavingaccountfromlist(){
    await this.Listtypeofaccounts.selectOption({label: 'SAVINGS'});
    
    }
    
async Selectcustomeraccountfromlist(accountNumber: string | { label: string }){
    if (typeof accountNumber === 'string') {
        // Select by value if the account number is passed as a string
        await this.ListCusaccounts.selectOption({ label: accountNumber });
    } else if (typeof accountNumber === 'object' && accountNumber.label) {
        // Select by label if passed as an object with the label field
        await this.ListCusaccounts.selectOption(accountNumber);
    }



}

  async ClickonOpenButton(){
    await this.Onewaccountbtn.click();
  }













}