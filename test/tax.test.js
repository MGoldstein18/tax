const taxCalculator = require('../taxCalc')
const chai = require('chai')
const expect = chai.expect

describe('Calculate tax using income', () => {
    it('should correctly calculate 18% bracket', () => {
        let income = 100000
        let expectedTax = 18000
        let actualTax = taxCalculator.taxCalc(income)
        expect(actualTax).to.equal(expectedTax)
    })
    it('should correctly calculate 26% bracket', () => {
        let income = 200000
        let expectedTax = 36332
        let actualTax = taxCalculator.taxCalc(income)
        expect(actualTax).to.equal(expectedTax)
    })
    it('should correctly calculate 31% bracket', () => {
        let income = 400000
        let expectedTax = 93039.5
        let actualTax = taxCalculator.taxCalc(income)
        expect(actualTax).to.equal(expectedTax)
    })
    it('should correctly calculate 36% bracket', () => {
        let income = 500000
        let expectedTax = 127875
        let actualTax = taxCalculator.taxCalc(income)
        expect(actualTax).to.equal(expectedTax)
    })
    it('should correctly calculate 39% bracket', () => {
        let income = 600000
        let expectedTax = 165207
        let actualTax = taxCalculator.taxCalc(income)
        expect(actualTax).to.equal(expectedTax)
    })
    it('should correctly calculate 41% bracket', () => {
        let income = 800000
        let expectedTax = 245040.9
        let actualTax = taxCalculator.taxCalc(income)
        expect(actualTax).to.equal(expectedTax)
    })
    it('should correctly calculate 45% bracket', () => {
        let income = 2000000
        let expectedTax = 757041
        let actualTax = taxCalculator.taxCalc(income)
        expect(actualTax).to.equal(expectedTax)
    })
})