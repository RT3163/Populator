const FileReader = require('../FileReader')

describe('The FileReader Class', () => {

    it ('Returns a string of the file read in (open file)', () => {
        //setup
        let fileReader = new FileReader()
        //use small test file to verify output
        let testFile = "../smallTestFile.csv";
        const expected = "Country,City,AccentCity,Region,Population,Latitude,Longitude\nad,aixas,Aix�s,6,,42.4833333,1.4666667\nad,aixirivali,Aixirivali,6,,42.4666667,1.5\nad,aixirivall,Aixirivall,6,,42.4666667,1.5\nad,aixirvall,Aixirvall,6,,42.4666667,1.5\nad,aixovall,Aixovall,6,,42.4666667,1.4833333\nd,andorra,Andorra,7,,42.5,1.5166667\nad,andorra la vella,Andorra la Vella,7,20430,42.5,1.5166667";

        //exercise & assert
        expect(fileReader.readFile(testFile)).toBe(expected)
    })

    it ('should return the contents of a file', () => {
        // setup
        const csvFileContents = 'Country,City,AccentCity,Region,Population\nus,Denver,Denver,Colorado,200000'

        const fs = {
            readFileSync: jest.fn().mockImplementation(() => csvFileContents)
        }

        const filePath = '/path/to/a/file'

        const actual = new FileReader[fs].readFile(filePath)

        expect(actual).toEqual(csvFileContents)
    })
})
