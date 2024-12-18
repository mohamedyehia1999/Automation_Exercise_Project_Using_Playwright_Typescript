import { type Page,type Locator ,expect } from "@playwright/test";

export class TestCasesPage{
    readonly page:Page;
    readonly testCaseTitle:Locator;

    constructor(page:Page)
    {
        this.testCaseTitle=page.locator("//span[contains(text(),'Below is the list of')]");

    }
    async validateThatTheUserIsNavigatedToTestCasesPageSuccessfully(){
        await expect(this.testCaseTitle).toBeVisible();
    }

}