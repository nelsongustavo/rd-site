import {Builder, By, Key, until} from 'selenium-webdriver';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 5

const userA = new Builder().forBrowser('firefox').build();
const userB = new Builder().forBrowser('chrome').build();
const userAEmail = "userAFromSelenium@gmail.com";
const userBEmail = "userBFromSelenium@gmail.com";
const HOST = "http://localhost:3001";

describe('e2e test', () => {

  test("Navigate user A to home and price", () => {

    return userA.then(userA => {
      userA.get(HOST)
      userA.wait(until.elementLocated(By.css('#price')));
      userA.sleep(1000);
      userA.findElement(By.css('#price > a')).click();
      userA.wait(until.elementLocated(By.css('.price')));
      return userA.findElement(By.css('h2')).then(element => {
        element.getText().then(text => {
          expect(text).toEqual("Welcome to Price");
        });
      });
    });
  });

  test("Navigate user B to home, and contact", () => {
    return userB.then(userB => {
      userB.get(HOST)
      userB.wait(until.elementLocated(By.css('#contact')));
      userB.sleep(1000);
      userB.findElement(By.css('#contact > a')).click();
      userB.wait(until.elementLocated(By.css('.contact')));

      return userB.findElement(By.css('h2')).then(element => {
        element.getText().then(text => {
          expect(text).toEqual("Welcome to Contact");
        });
      });
    });
  });

  test("Send user B Form", () => {
    return userB.then(userB => {
      userA.sleep(1000);
      userB.findElement(By.name('email')).sendKeys(userBEmail, Key.RETURN);

      return userB.findElement(By.css('.result')).then(element => {
        element.getText().then(text => {
          expect(text).toEqual("Success!");
        });
      });
    });
  });

  test("Navigate User A to Contact and send the form", () => {
    return userA.then(userA => {
      userA.findElement(By.css('#contact > a')).click();
      userA.findElement(By.name('email')).sendKeys(userAEmail, Key.RETURN);
      userA.wait(until.elementLocated(By.css('.contact')));

      return userA.findElement(By.css('.result')).then(element => {
        element.getText().then(text => {
          expect(text).toEqual("Success!");
        });
      });
    });
  });

  test("Navigate User B to About", () => {
    return userB.then(userB => {
      userB.sleep(1000);
      userB.findElement(By.css('#about > a')).click();
      userB.wait(until.elementLocated(By.css('.about')));

      return userB.findElement(By.css('h2')).then(element => {
        element.getText().then(text => {
          expect(text).toEqual("Welcome to About");
        });
      });
    });
  });
});

afterAll(() => { userA.quit(), userB.quit() })
