class FileReader {
    constructor(fs) {
        this.fs = fs
    }

    
    readFile(filepath) {
        return this.fs.readFileSync(filepath, 'utf-8')
        
    }
}

module.exports = FileReader