const FileReader = require('../FileReader')
const CsvParser = require('../CsvParser')
const PopulationCounter = require('../PopulationCounter')


describe('The Population Counter (The Dependant)', () => {

    it ('Mocking the FileReader Depedency (return string)', () => {

        // setup
        const csvParser = new CsvParser()

        const mockRead = jest.fn()
        const mockFileReader = { readFile: mockRead }
        const fileReader = new PopulationCounter(mockFileReader, csvParser)
        const expected = ""

        // excercise
        fileReader.toReadFile(expected)

        // assert
        expect(mockRead).toHaveBeenCalledWith(expected)
    })

    it ('Mocking the CsvParser Depedency', () => {
        //setup
        const fileReader = new FileReader()

        const mockParse = jest.fn();
        const mockCsvParser = { readLines: mockParse}
        const popCounter = new PopulationCounter(fileReader, mockCsvParser)
        const expected = []

        //exercise
        popCounter.parseFile(expected)

        //assert
        expect(mockParse).toHaveBeenCalledWith(expected);
    })

    it('should return a computed population', () => {
        //setup
        const expectedPath = '/path/to/a/file'
        const fileContents = "Country,City,AccentCity,Region,Population\nus,Denver,Denver,Colorado,2000000"

        const parsed = [
            {
                Country: 'us',
                City: 'Denver',
                AccentCity: 'Denver',
                Region: 'Colorado',
                Population: '2000000'

            }
        ]

        const expected = 'World Population is: 2000000'


        const mockFileReader = {
            readFile: jest.fn().mockImplementation(() => fileContents)
        }

        const mockCsvParser = {
            readLines: jest.fn().mockImplementation(() => parsed)
        }

        const instanceUnderTest = new PopulationCounter(mockFileReader, mockCsvParser)

        // excercise 
        const actual = instanceUnderTest.count(expectedPath)

        expect(mockFileReader.readFile).toHaveBeenCalledWith(expectedPath)
        expect(mockCsvParser.readLines).toHaveBeenCalledWith(fileContents)
        expect(actua).toEqual(expected)
    }) 

})