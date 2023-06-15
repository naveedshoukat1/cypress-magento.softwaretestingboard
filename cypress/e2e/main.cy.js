/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import { Cart } from '../pages/cart';
const cart = new Cart();

describe('initiates', () => {
  beforeEach(() => {
    cy.viewport('macbook-16')
    cy.visit('/', { failOnStatusCode: false })
  })

  it('performs everything', () => {
    cy.signin('naveed.shoukat+1@invozone.com','A@miN2017');
    cy.signout();
    cy.wait(2000)
    cy.signup();
    let company = faker.company.buzzNoun();
    let building = faker.location.buildingNumber();
    let street = faker.location.streetAddress(true)
    let city = faker.location.city();
    let zipCode = faker.location.zipCode('######');
    let phone = faker.phone.number('+92 123 ### ## ##');
    cart.selectTops();
    cart.selectJackets();
    cart.selectProduct();
    cy.wait(12000)
    cart.selectSizeM();
    cart.selectColorBlack();
    cart.clickAddToCartButton();
    cy.wait(4000)
    cart.ClickShowCart();
    cy.wait(200)
    cart.clickCheckoutCart();
    cy.wait(12000)
    cart.inputCompanyNameField(company);
    cart.inputStreetAddressField1(building);
    cart.inputStreetAddressField2(street);
    cart.inputCityNameField(city);
    cart.selectState();
    cart.inputZipCodeField(zipCode);
    cy.wait(2000)
    cart.selectCountry();
    cy.wait(5000)
    cart.inputTelephoneNumber(phone);
    cy.wait(4000)
    cart.clickNextButton();
    cy.wait(5000)
    cart.clickPlaceOrderButton();
  })
})