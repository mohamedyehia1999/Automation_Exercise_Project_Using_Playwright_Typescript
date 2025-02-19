import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { CategoryPage } from '../pages/categoryPage';

test.describe('Category Navigation Tests', () => {
    let homePage: HomePage;
    let categoryPage: CategoryPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        categoryPage = new CategoryPage(page);

        await test.step('Navigate to homepage and verify', async () => {
            await homePage.goto();
        });
    });

    test('Navigate through Women category', async () => {
        await test.step('Verify category section is visible', async () => {
            await categoryPage.verifyCategoryPageTitleIsVisible();
        });

        await test.step('Navigate to Women Dress category', async () => {
            await categoryPage.clickOnWomenCategoryAndOpenDress();
        });

        await test.step('Verify women category page', async () => {
            await categoryPage.verifyCategoryTitleIsVisible();

        });
    });

    test('Navigate through Men category', async () => {
        await test.step('Verify category section is visible', async () => {
            await categoryPage.verifyCategoryPageTitleIsVisible();
        });

        await test.step('Navigate to Men category', async () => {
            await categoryPage.clickOnMenCategoryAndOpenTshirts();
        });

        await test.step('Verify men category page', async () => {
            await categoryPage.verifyCategoryTitleIsVisible();
        });
    });

    test.afterEach(async ({ page }) => {
        await page.close();
    });
});