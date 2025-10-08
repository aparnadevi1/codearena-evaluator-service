## How to setup a new Typescript Express project
1.npm init -y
2.npm install -D typescript
3.tsc --init   # for getting tsconfig.json
4.in tsconfig.json uncomment and change  "outDir": "./",  to  "outDir": "./dist", 
5. uncomment these  "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied 'any' type. */
     "strictNullChecks": true,                         /* When type checking, take into account 'null' and 'undefined'. */
    "strictFunctionTypes": true, 
     "noUnusedLocals": true,                           /* Enable error reporting when local variables aren't read. */
    "noUnusedParameters": true,   
at end add  "exclude": ["node_modules"]
and include "include":["./src/**/*.ts"]
