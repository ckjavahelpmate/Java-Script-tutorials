/*
Import Statements in JavaScript
-------------------------------------------------
-> Import statements are used to bring in functions, objects, or primitives that have been exported from another module.
-> This allows for modular code organization and reuse across different files.
Example:
-------------------------------------------------
import { functionName } from './moduleFile.js'; 
-------------------------------------------------
In the example above, `functionName` is imported from the module file located at `./moduleFile.js`. This allows you to use `functionName` in the current file.


Step-by-Step Guide to import in JavaScript
-------------------------------------------------
Step-01 :: export the desired functions or variables using the `export` keyword.
Step-02 :: Specify the type in package.json as "module" to enable ES6 module support.
Step-03 :: import the exported functions or variables using the `import` statement in another file.

Types of import Statements
-------------------------------------------------
1. Named Imports: Import specific functions or variables by their names. -> named experts should be imported within curly braces.

   Syntax to export: export function functionName() { ... }
   Syntax: import { functionName } from './moduleFile.js';

   Example :
                1.   export function power(base, exponent) {
                        return Math.pow(base, exponent);
                    }

                2. import { power } from './Data.js/Math.js';

                3. Console.log(power(2, 3)); // Outputs: 8
------------------------------------------------------------------------

2. Default Imports: Import the default export from a module. -> default export should be imported without curly braces.

    Syntax to export: export default functionName() { ... }

    Syntax to import: import functionName from './moduleFile.js';

    Example:
            1.    export default function add(a, b) {
                    return a + b;
                    }

            2.   import add from './moduleFile.js';

            3.    console.log(add(2, 3)); // Outputs: 5
------------------------------------------------------------------------

3. Import All: Import all exports from a module as an object.
    Syntax: import * as moduleName from './moduleFile.js';

    Example:
    import * as MathUtils from './Data.js/Math.js';

    console.log(MathUtils.power(2, 3)); // Outputs: 8
    console.log(MathUtils.add(2, 3));   // Outputs: 5
------------------------------------------------------------------------

4. importing the .json files (ES2020 and later):
    Syntax: import data from './dataFile.json' assert { type: 'json' };

    Example:
    import userData from './userData.json' assert { type: 'json' };

    console.log(userData.name); // Outputs: John Doe
    console.log(userData.email); // Outputs: John@gmail.com
-------------------------------------------------------------------

*/

(async () => {
  const m = await import('./data/testData.json', { assert: { type: 'json' } });
  console.log(m.default);
})();