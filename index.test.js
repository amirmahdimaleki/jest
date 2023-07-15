// const { describe } = require("yargs")
const sum = require("./index")

describe("first rest", () => {
    it("sum test giving 3 and 4 to equal 7", () => {
      expect(sum(3, 4)).toBe(7)

    })
})
 

describe("second test block", () => {
    it("the sum is NOT equal to 10  when giving 6 and 1", () => {
        expect(sum(1, 6)).not.toBe(10)
    })
})