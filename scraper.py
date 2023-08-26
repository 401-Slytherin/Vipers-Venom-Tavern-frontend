from playwright.sync_api import sync_playwright

website = "http://localhost:3000/"

def login(url_str):
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=False, slow_mo=1000)
        page = browser.new_page()
        page.goto(url_str)

        page.click("button:has-text('Log in')")

        page.click("form:has-text('Username')")
        page.type("input[name='username']", "admin")

        page.fill("input[name='password']", "1234")

        page.click("button:has-text('Log in')")

        page.click("button:has-text('Profile')")

        page.pause()

        browser.close()


def create_user(url_str):
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=False, slow_mo=1000)
        page = browser.new_page()
        page.goto(url_str)

        page.click("button:has-text('Sign up')")

        page.fill("input[name='username']", "bots_user")
        page.fill("input[name='regemail']", "bot_email@gmail.com")
        page.fill("input[name='regpassword']", "1234")
        page.fill("input[name='confirm-password']", "1234")

        page.click("button:has-text('Create an account')")

        page.pause()

        browser.close()


if __name__ == "__main__":
    login(website)
    create_user(website)
