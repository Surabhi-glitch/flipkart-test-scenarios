import{test, expect} from '@playwright/test';

test('Flipkart Login', async({page}) => {

    await page.goto('https://www.flipkart.com/');
    await expect(page).toHaveTitle('Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');
    const title = await page.title();
    console.log(title);   
// Log into the flipkart
    await page.locator('//span[contains(text(), "Login")]').click();
    await expect(page.locator('//span[contains(text(), "Get access to your Orders, Wishlist and Recommendations")]')).toBeVisible();
    await page.waitForTimeout(2000);

    await page.locator('//*[@id="container"]/div/div[3]/div/div[2]/div/form/div[1]/input').fill('9818735466');    
    console.log('Phone number entered');
    await page.locator('//button[contains(text(), "Request OTP")]').click();
    console.log('OTP requested');
    await page.waitForTimeout(20000);

    await expect(page.locator('//span[contains(text(), "Surabhi")]')).toBeVisible({timeout: 5000});
    console.log('Logged into the flipkart');
    await page.waitForTimeout(20000);


})

test('Add product to cart', async({page})=> {
    
    await page.goto('https://www.flipkart.com/');
    await expect(page.getByPlaceholder('Search for Products, Brands and More')).toBeVisible({timeout: 5000}); //FLipkart searchbox
    console.log('Flipkart home page loaded');

    await page.locator('//span[contains(text(), "Mobiles & Tablets")]').click();  //Mobiles & Tablets
    console.log('Mobiles & Tablets selected');
    await page.waitForTimeout(5000);

    await expect(page.locator('//h1[contains(text(),"Mobile Phones")]')).toBeVisible({timeout: 5000}); //Mobile Phones
    console.log('Mobile Phones page loaded');
    await page.waitForTimeout(5000);

    
    // Set up page event listener before clicking the link
    const context = page.context();
    const newTab = context.waitForEvent('page');
    
    const mobile = await page.locator('//a[text()="Apple iPhone 16 (White, 128 GB)"]'); //Apple iPhone 16 (White, 128 GB)
    await mobile.scrollIntoViewIfNeeded();
    await page.waitForTimeout(5000);
    await mobile.click();
    
    // Wait for the new page to open
    const newPage = await newTab;
    await newPage.waitForLoadState();
    console.log('New page title:', await newPage.title());
    console.log('Apple iPhone 16 (White, 128 GB) selected');
    await page.waitForTimeout(3000);

    await newPage.locator('//button[contains(text(), "Add to cart")]').click();
    console.log('Added to Cart');
    await page.waitForTimeout(5000);
})    
test('Place Order', async({page}) => {
    
})




