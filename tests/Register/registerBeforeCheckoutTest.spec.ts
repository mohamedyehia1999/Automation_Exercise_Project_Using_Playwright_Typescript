import { test } from '@playwright/test';
import { HomePage } from '../../pages/homePage';
import { SignupLoginPage } from '../../pages/SignupLoginPage';
import { RegisterPage } from '../../pages/registerPage';
import { CheckOutPage } from '../../pages/CheckoutPage';
import { CartPage } from '../../pages/cartPage';
import { PaymentPage } from '../../pages/paymentPage';

const registerData = JSON.parse(JSON.stringify(require("../../utils/RegisterData.json")));
const paymentData = JSON.parse(JSON.stringify(require("../../utils/PaymentData.json")));
const registerCheckoutData = JSON.parse(JSON.stringify(require("../../utils/RegisterCheckoutData.json")));
test.describe('Register Before Checkout', () => {
  let homePage: HomePage;
  let signupLoginPage: SignupLoginPage;
  let registerPage: RegisterPage;
  let registerWhileCheckOutPage: CheckOutPage;
  let cartPage: CartPage;
  let paymentPage: PaymentPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    signupLoginPage = new SignupLoginPage(page);
    registerPage = new RegisterPage(page);
    registerWhileCheckOutPage = new CheckOutPage(page);
    cartPage = new CartPage(page);
    paymentPage = new PaymentPage(page);

    await homePage.goto();
  });

  test('should register before checkout and place order', async ({ page }) => {
    await homePage.openRegisterationPage();
    await signupLoginPage.validateatheSignupTitleISVisble();
    await signupLoginPage.signup(registerData.RegisterName, registerData.RegisterEmail);
    await registerPage.enterAccountInformation(
      registerData.Password, registerData.Day, registerData.Month, registerData.Year,
      registerData.Firstname, registerData.Lastname, registerData.CompanyName
    );
    await registerPage.enterAddressInformation(
      registerData.AddressName, registerData.CountryName, registerData.State,
      registerData.CityName, registerData.ZipCodeNumber, registerData.MobileNumber
    );
    await registerPage.verifyThatRegisterIsDoneSuccessfully(registerData.SuccesMessage);
    await registerPage.validateThatLoggedInAsUsernameIsVisible();

    await homePage.addProductToCartFromHomePageAndOpenCart();
    await cartPage.openCheckoutPage();
    await registerWhileCheckOutPage.validateAddressDetailsIsVisible();
    await registerWhileCheckOutPage.validateReviewOrderIsVisible();
    await registerWhileCheckOutPage.userCanAddComment(registerCheckoutData.comment);
    await registerWhileCheckOutPage.userCanPlaceOrder();
    await paymentPage.enterPaymentDetails(
      paymentData.NameOnCard, paymentData.CardNumber, paymentData.CVC,
      paymentData.ExpiryMonth, paymentData.ExpiryYear
    );
    await paymentPage.validateThatOrderIsPlacedSuccessfully();
    await registerPage.verifyThatAccountDeletedIsVisible(registerData.DeletedMessage);
  });

  test.afterEach(async ({ page }) => {
    await page.close(); 
  });
});
