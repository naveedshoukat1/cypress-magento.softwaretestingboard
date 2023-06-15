export class Cart {
    
    constructor() {
        this.selectItem = '.wrapper > .products > :nth-child(1)';
        this.mediumSize = '#option-label-size-143-item-168';
        this.sizeError = '#super_attribute\[143\]-error'
        this.colorBlack = '#option-label-color-93-item-49';
        this.colorErr = '#super_attribute\[93\]-error';
        this.quantity = '#qty';
        this.quantityErr = '#qty-error';
        this.addToCartBtn = '#product-addtocart-button';
        this.showCartBtn = '.showcart';
        this.checkoutCartBtn = '#top-cart-btn-checkout';
        this.companyNameField = 'input[name="company"]';
        this.streetAddressField1 = 'input[name="street[0]"]';
        this.streetAddressField2 = 'input[name="street[1]"';
        this.streetAddressField3 = 'input[name="street[2]"';
        this.cityName = 'input[name="city"]';
        this.stateName = 'select[name="region_id"]';
        this.postCode = 'input[name="postcode"]';
        this.countryName = 'select[name="country_id"]';
        this.telephoneNum = 'input[name="telephone"]';
        this.nextButton = '.button';
        this.placeOrderBtn = 'Place Order';
    
    }

    
    selectTops(){
        cy.get('#ui-id-5').trigger('mouseover')
        cy.get('#ui-id-17').trigger('mouseover').should('be.visible','contain', 'Tops')
    }
    selectJackets(){
        cy.get('#ui-id-19').trigger('mouseover').should('be.visible','contain', 'Jackets').click()
    }
    selectProduct(){
        cy.get(this.selectItem).should('be.visible').click()
    }
    selectSizeM(){
        cy.get(this.mediumSize)
        .should('be.visible', 'contain','M', 'not.have.class','selected', 'have.attr','aria-checked="false"').click()
        .should('be.visible','contain','M','have.class','selected','have.attr','aria-checked="true"')
        cy.get(this.sizeError).should('not.exist')
    }
    selectColorBlack(){
        cy.get(this.colorBlack)
        .should('be.visible', 'not.have.class','selected', 'have.attr','aria-checked="false"').click()
        .should('be.visible','have.class','selected','have.attr','aria-checked="true"')
        cy.get(this.colorErr).should('not.exist')
    }
    selectQuantity(){
        cy.get(this.quantity).should('have.value','1','have.title','Qty').type('{upArrow}')
        .should('not.have.class','mage-error','should.have.value','2').blur()
        cy.get(this.quantityErr).should('not.exist')
    }
    clickAddToCartButton(){
        cy.get(this.addToCartBtn).should('be.enabled','be.visible','contains','Add to Cart').click()
    }
    ClickShowCart(){
        cy.get(this.showCartBtn).click({force:true})
    }
    clickCheckoutCart(){
        cy.get(this.checkoutCartBtn).should('be.visible').click()
    }
    inputCompanyNameField(company){
        cy.get(this.companyNameField).should('have.class','input-text').clear().type(company)
    }
    inputStreetAddressField1(building){
        cy.get(this.streetAddressField1).should('have.class','input-text').clear().type(building)
    }
    inputStreetAddressField2(street){
        cy.get(this.streetAddressField2).should('have.class','input-text').clear().type(street)
    }
    inputStreetAddressField3(street){
        cy.get(this.streetAddressField3).should('have.class','input-text').clear().type(street)
    }
    inputCityNameField(city){
        cy.get(this.cityName).should('have.class','input-text').clear().type(city)
    }
    selectState(){
        cy.get(this.stateName).should('have.value', '').select('Mississippi')
    }
    inputZipCodeField(zipCode){
        cy.get(this.postCode).should('have.class','input-text').clear().type(zipCode)
    }
    selectCountry(){
        cy.get(this.countryName).select('Pakistan')
        cy.get('select[name="country_id"').should('have.value', 'PK')
    }
    inputTelephoneNumber(phone){
        cy.get(this.telephoneNum).should('have.class','input-text').clear().type(phone)
    }
    clickNextButton(){
        cy.get(this.nextButton).should('contain','Next').click()
    }
    clickPlaceOrderButton(){
        cy.contains(this.placeOrderBtn).should('have.class','action primary checkout', 'have.title','Place Order').click()
    }

}