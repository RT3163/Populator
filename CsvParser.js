class CsvParser {
    constructor() {
    }

    readLines(csvString) {
        const line = csvString.split('\n')
        const keys = lines[0].split(',')
        const values = lines.slice(1)

        return values.map(value => value.split(',')
            .reduce((acc, value, index) => ({...acc, [keys[index]]: value}, {}))
    }
}

module.exports = CsvParser