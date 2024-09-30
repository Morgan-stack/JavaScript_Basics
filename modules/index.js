import
     brand, 
    //{ add, subtract } 
    * as Lib
from './lib.js'

//To call function when import using * as Lib
Lib.add(10,10)

// In terminal, enter npm init -y
// Add "type": "module", so can run
// Alternatively, just do node --experimental-modules index.js 
