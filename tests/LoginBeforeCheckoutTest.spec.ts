import { test } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { SignupLoginPage } from '../pages/SignupLoginPage';
import { CheckOutPage } from '../pages/CheckoutPage';
import { CartPage } from '../pages/cartPage';
import { PaymentPage } from '../pages/paymentPage';

const loginData = JSON.parse(JSON.stringify(require("../utils/LoginData.json")));
const paymentData = JSON.parse(JSON.stringify(require("../utils/PaymentData.json")));
const registerCheckoutData = JSON.parse(JSON.stringify(require("../utils/RegisterCheckoutData.json")));
test.describe('Login Before Checkout', () => {
  let homePage: HomePage;
  let signupLoginPage: SignupLoginPage;
  let checkOutPage: CheckOutPage;
  let cartPage: CartPage;
  let paymentPage: PaymentPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    signupLoginPage = new SignupLoginPage(page);
    checkOutPage = new CheckOutPage(page);
    cartPage = new CartPage(page);
    paymentPage = new PaymentPage(page);

    await homePage.goto();
  });

  test('should login before checkout and place order', async ({ page }) => {
    await homePage.openLoginPage();
    await signupLoginPage.login(loginData.Email_Login, loginData.Password_Login);

    await homePage.addProductToCartFromHomePageAndOpenCart();
    await cartPage.openCheckoutPage();
    await checkOutPage.validateAddressDetailsIsVisible();
    await checkOutPage.validateReviewOrderIsVisible();
    await checkOutPage.userCanAddComment(registerCheckoutData.comment);
    await checkOutPage.userCanPlaceOrder();
    await paymentPage.enterPaymentDetails(
      paymentData.NameOnCard, paymentData.CardNumber, paymentData.CVC,
      paymentData.ExpiryMonth, paymentData.ExpiryYear
    );
    await paymentPage.validateThatOrderIsPlacedSuccessfully();
    await signupLoginPage.verifyThatAccountDeletedIsVisible(loginData.DeletedMessage);
  });

  test.afterEach(async ({ page }) => {
    await page.close(); 
  });
});