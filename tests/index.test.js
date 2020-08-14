describe('The populatron', () => {
  it('should print the world population', () => {
      let calledWith;
      process.argv[2] = './data/worldcitiespop.csv'

      const savedLog = console.log

      console.log = (...args) => { 

        calledWith = args
      }

      require('../index.js')
      console.log = savedLog

      expect(calledWith[0]).toEqual('World Population is: 83199992')
  })
});

let numbers = [1,2,3,4]

let newNumbers = [-4,-3,-2,-1,0, ...numbers]