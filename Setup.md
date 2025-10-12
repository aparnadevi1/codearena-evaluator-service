## How to setup a new Typescript Express project
1.npm init -y
2.npm install -D typescript
npm install concurrently
3.tsc --init   # for getting tsconfig.json
4.in tsconfig.json uncomment and change  "outDir": "./",  to  "outDir": "./dist", 
5. uncomment these make relavant changes in tsconfig.json
 "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied 'any' type. */
     "strictNullChecks": true,                         /* When type checking, take into account 'null' and 'undefined'. */
    "strictFunctionTypes": true, 
     "noUnusedLocals": true,                           /* Enable error reporting when local variables aren't read. */
    "noUnusedParameters": true,   
at end add  "exclude": ["node_modules"]
and include "include":["./src/**/*.ts"]

6.Add the folloeing scripts in package.json
"scripts": {
    "build": "npx tsc",
    "watch": "npx tsc -w",
    "prestart": "npm run build",
    "start": "npx nodemon dist/index.js",
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "npx concurrently --kill-others \"npm run watch\" \"npm start\""
  },

7.npm run dev
