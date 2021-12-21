const calc = require("./calc")

describe("calc", () => {

    it("Should return 5 when substract 10 - 5", () => {
        const result = calc.subtract(10, 5)
        expect(result).toEqual(5)
    })

    it("Should return 4 when sum 2 + 2", () => {
        const result = calc.sum(2, 2)
        expect(result).toEqual(4)
    })

    it("Should return 16 when multiple 4 * 4", () => {
        const result = calc.multiple(4, 4)
        expect(result).toEqual(16)
    })
})