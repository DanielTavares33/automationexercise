import { createBdd } from 'playwright-bdd';
import { test } from '../support/fixtures';
import { allure } from '../support/allure-helpers';

const { When } = createBdd(test);

When('I click on the {string} button', async ({ homePage, loginPage, contactUsPage, productsPage, checkoutPage, paymentPage }, buttonText: string) => {
  allure.feature('User Interactions');
  allure.story('Button Clicks');
  allure.severity('normal');
  
  switch (buttonText) {
    case 'Signup / Login':
      await homePage.clickButton();
      break;
    case 'Signup':
      await loginPage.clickSignupButton();
      break;
    case 'Login':
      await loginPage.clickLoginButton();
      break;
    case 'Delete Account':
      await loginPage.clickDeleteAccount();
      break;
    case 'Logout':
      await loginPage.clickLogout();
      break;
    case 'Contact Us':
      await homePage.clickContactUs();
      break;
    case 'Test Cases':
      await homePage.clickTestCases();
      break;
    case 'Products':
      await homePage.clickProducts();
      break;
    case 'Cart':
      await homePage.clickCart();
      break;
    case 'Continue Shopping':
      await productsPage.clickContinueShopping();
      break;
    case 'View Cart':
      await productsPage.clickViewCart();
      break;
    case 'Proceed To Checkout':
      await checkoutPage.proceedToCheckout();
      break;
    case 'Register / Login':
      await checkoutPage.clickRegisterLoginInModal();
      break;
    case 'Place Order':
      await checkoutPage.placeOrder();
      break;
    case 'Pay and Confirm Order':
      await paymentPage.confirmPayment();
      break;
    case 'Submit':
      await contactUsPage.submitForm();
      break;
    case 'Home':
      await contactUsPage.clickHomeButton();
      break;
    case 'Continue':
      await paymentPage.clickContinue();
      break;
    default:
      throw new Error(`Unknown button: ${buttonText}`);
  }
});
