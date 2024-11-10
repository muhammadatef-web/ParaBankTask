import {test,expect} from '@playwright/test';
import { RegisterPage } from './Pages/Registerpage';
import { Landingpage } from './Pages/Landingpage';
import { OpenAccount } from './Pages/OpenAccount';
import { AccountOverview } from './Pages/AccountsOverview';
import { UpdateContactinfo } from './Pages/UpdateContactinfo';
import{Homepage} from './Pages/Homepage';





test.beforeEach(async({page})=>{
  const log = new Landingpage(page);
  await log.openWebsite("https://parabank.parasoft.com/")


})

test("Verifyifuserabletoregister", async({page})=>
  {
const regpage = new RegisterPage(page);
const log = new Landingpage(page);
    await log.ClickonRegisterlink();
     await regpage.registerUser({
      firstname: 'atef',
       lastname: 'Doe',
       address: '123 Main St',
         city: 'New York',
         state: 'NY',
         zipcode: '10001',
         phone: '555-1234',
         ssn: '123-45-6789',
         username: 'atefdoe',
         password: 'password123',
         passwordConfirm: 'password123'
});
          await regpage.ClickonRegisterbutton();
            await regpage.verifyifconfirmationmessageisdisplayed();
                                                                      });




test("Checkifuserabletologintowebsite",async({page})=>{
const log = new Landingpage(page);
await log.fillUsername('a');
await log.fillPassword('aa');
await log.clickLoginButton();
await log.verifyLoginSuccess();
});

test("checkifuserabletoopenCheckingaccount",async({page})=>{
  const log = new Landingpage(page);
  const home = new Homepage(page);
await log.enterlogininfo('johndoe','password123');
const accountOverview = new AccountOverview(page);
const accountDetails = await accountOverview.getAccountDetails();

if (!accountDetails.accountNumber) {
  throw new Error('No account number found on the overview page.');
}
  const Open = new OpenAccount(page);
await home.Clickonnewaccountlink();
await Open.SelectCheckingAccountFromList();
await Open.Selectcustomeraccountfromlist(accountDetails.accountNumber);
await page.waitForTimeout(5000);
await Open.ClickonOpenButton();
})
test("checkifuserabletoviewhisaacount",async({page})=>{
  const log = new Landingpage(page);
  const home = new Homepage(page);
await log.enterlogininfo('johndoe','password123');
const accountOverview = new AccountOverview(page);
await home.ClickonAccountoverviewlink();
const accountNumber = await accountOverview.getAccountNumber();
expect(accountNumber).toBe('13677');

})   


test('Checkifuserabletoupdatecontact',async({page})=>{
  const log = new Landingpage(page);
  const home = new Homepage(page);
  await log.enterlogininfo('atefdoe','password123');
  const upd= new UpdateContactinfo(page);
  await home.ClickonupdateLink();
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
  await upd.updateUser({
    fname: 'aly',
    lname: 'Do',
    addressf: '1',
      cityf: 'N',
      statef: 'ismailia',
      zipcodef: '10',
      phonef: '555',
  })
    await upd.ClickUpdateBtn();
    await page.waitForTimeout(3000);
  await upd.verifyifconfirmationmessageisdisplayed();














})