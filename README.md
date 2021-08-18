raylen.js
------------

### What is raylen.js
**raylen.js** is a wrapper for **Abuse IP DB**

### Usage
Check IP Address
```js
const wrapper = require('raylen.js')

wrapper.checkip("IP Address", "API Key").then(data => console.log(data))
```
Report IP Address
```js
const wrapper = require('raylen.js')

wrapper.reportip("IP Address", "API KEY", "REASON", "Category").then(data => console.log(data))
```
