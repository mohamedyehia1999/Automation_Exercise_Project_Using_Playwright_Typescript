import{test} from '@playwright/test';
import {HomePage} from '../pages/homePage';
import {TestCasesPage} from '../pages/TestCasesPage';

test('Verify Test Cases Page',async ({page})=>{
    const homePage=new HomePage(page);
    const testCasesPage= new TestCasesPage (page);

    await homePage.goto();
    await homePage.OpenTestCasesPage();
    await testCasesPage.ValidateThatTheUserIsNavigatedToTestCasesPageSuccessfully();

})