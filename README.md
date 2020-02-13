# tslint-rules
Standard tslint rules 

## Installation

` npm i @fourjs/tslint-rules -D `

Extend `@fourjs/tslint-rules` to apply rules.

```
{
  "extends": "@fourjs/tslint-rules",
  "rulesDirectory": [
    "codelyzer"
  ]
}
```

Override rules by adding rules as mentioned below 
```
{
  "extends": "@fourjs/tslint-rules",
  "rules": {
    // add rules here...
  },
  "rulesDirectory": [
    "codelyzer"
  ]
}
```
