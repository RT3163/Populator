class PopulationCounter{
    constructor(fileReader, csvParser){
        this.fileReader = fileReader
        this.csvParser = csvParser
    }

    count(path) {
        const lines = this.fileReader.readFile(path)
        const cityData = this.csvParser.readLines(lines)
        const totalPopulation = cityData
            .filter(city => city.Population)
            .map(city => parseInt(city.Population))
            .reduce((acc, cur) => acc + cur, 0)

        return 'World Population is: ${totalPopulation}'
    }

    toReadFile(file){
        this.fileReader.readFile(file)
    }

    parseFile(file) {
        this.csvParser.readLines(file)
    }

}

module.exports = PopulationCounter