import { type Page,type Locator ,expect } from "@playwright/test";

export class TestCasesPage{
    page:Page;
    TestCaseTitle:Locator;

    constructor(page:Page)
    {
        this.TestCaseTitle=page.locator("//span[contains(text(),'Below is the list of')]");

    }
    async ValidateThatTheUserIsNavigatedToTestCasesPageSuccessfully(){
        await expect(this.TestCaseTitle).toBeVisible();
    }

}