# tslint-rules
[![Build Status](https://semaphoreci.com/api/v1/nimjetushar/tslint-rules/branches/master/shields_badge.svg)](https://semaphoreci.com/nimjetushar/tslint-rules)
<br>
[![GitHub license](https://img.shields.io/github/license/nimjetushar/tslint-rules)](https://github.com/nimjetushar/tslint-rules/blob/master/LICENSE)

Standard tslint rules 

## Installation

` npm i @fourjs/tslint-rules -D `

Extend `@fourjs/tslint-rules` to apply rules.

```
{
  "extends": "@fourjs/tslint-rules"
},
"rulesDirectory": [
  "node_modules/tslint-eslint-rules/dist/rules"
]
```

Override rules by adding rules as mentioned below 
```
{
  "extends": "@fourjs/tslint-rules",
  "rules": {
    // add rules here...
  },
  "rulesDirectory": [
    "node_modules/tslint-eslint-rules/dist/rules"
  ]
}
```

## Peer Dependencies

```
npm i tslint-eslint-rules -D
```