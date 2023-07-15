const fetcher = require("./async")

describe("1st async", () => {
    it("should return a correct todo", () => {
        fetcher(1).then((todo) => {
        expect(todo.id).toBe(1)
        })
    })
})

// the above test's better practice:

describe("2nd async", () => {
    it("return correct todo", async() => {
        const todo = await fetcher(4)
        expect(todo.id).toBe(4),
        5000
    })
})