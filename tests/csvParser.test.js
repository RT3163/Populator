const CsvParser = require("../CsvParser")

const CsvParser = require('./CsvParser')

describe ('CSV parser', () => {

    it ('returns an array of objects from a CSV string' , () => {
        const input = 'firstName,lastName\nNick,TheRuler'
        const expected = [
            {
                firstName: 'Rick',
                lastName: 'TheRuler'
            }
        ]

        const actual = new CsvParser().readLines(input)

        // assert
        expect(actual).toBe(expected)

    })
})