import {expect, type Locator, type Page} from '@playwright/test'; 

 export class AccountOverview{
readonly page:Page;
readonly accountrow:Locator;
readonly accountnum:Locator;
readonly balance:Locator;
readonly avialbleamount:Locator;



constructor(page: Page) {
    this.page = page;
    
    this.accountrow = page.locator('#accountTable tbody tr').first();
    this.accountnum=  this.accountrow.locator('td a');
    this.balance= this.accountrow.locator('td:nth-child(2)');
    this.avialbleamount=this.accountrow.locator('td:nth-child(3)');


}







async getAccountNumber(){

    const accountNumber = await this.accountnum.textContent();
    return accountNumber ? accountNumber.trim() : null;
}

     async getBalance() {
    const balance = await this.balance.textContent();
    return balance ? balance.trim() : null;
                         }

        async getAvailableAmount() {
        const availableAmount = await this.avialbleamount.textContent();
        return availableAmount ? availableAmount.trim() : null;
                        }

                        async getAccountDetails() {
                            const accountNumber = await this.getAccountNumber();
                            const balance = await this.getBalance();
                            const availableAmount = await this.getAvailableAmount();
                            
                            return {
                                accountNumber: accountNumber,
                                balance: balance,
                                availableAmount: availableAmount
                            };



                        }










 } 