// entry point of the application
const fs = require('fs')
const PopulationCounter = require('./PopulationCounter')
const FileReader = require('./FileReader')
const CsvParser = require('./CsvParser')

const parser = new CsvParser()
const reader = new FileReader(fs)
const populationCounter = new PopulationCounter(reader, parser)

const path = process.argv[2]
const response = populationCounter.count(path)

console.log(response)
