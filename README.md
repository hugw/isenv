# Environment Utility Functions

### API

#### CURRENT_ENV

Return current environment.

Usage:
```javascript
import { CURRENT_ENV } from 'isenv'
console.log(CURRENT_ENV) # => development
```

#### IS_DEV / IS_TEST / IS_STAG / IS_PROD

Return a boolean based on current environment variable tested.

Usage:
```javascript
import { IS_DEV, IS_TEST, IS_STAG, IS_PROD } from 'isenv'

console.log(process.env.NODE_ENV) # => production

console.log(IS_DEV) # => false
console.log(IS_STAG) # => false
console.log(IS_TEST) # => false
console.log(IS_PROD) # => true
```

#### isDev / isStag / isTest / isProd

Test current the environment and return variables passed as arguments
in case of position and negative results. Second param is optional and defaults to "false".

Usage:
```javascript
import { isDev, isStag, isTest, isProd } from 'isenv'

const a = 'a'
const b = 'b'

console.log(process.env.NODE_ENV) # => production

console.log(isDev(a, b)) # => b
console.log(isDev(a)) # => false

console.log(isStag(a, b)) # => b
console.log(isStag(a)) # => false

console.log(isTest(a, b)) # => b
console.log(isTest(a)) # => false

console.log(isProd(a, b)) # => a
console.log(isProd(a)) # => a
```

#### isntDev / isntStag / isntTest / isntProd

Test current the environment using exclusive contexts and return variables passed as arguments
in case of position and negative results. Second param is optional and defaults to "false".

Usage:
```javascript
import { isntDev, isntStag, isntTest, isntProd } from 'isenv'

const a = 'a'
const b = 'b'

console.log(process.env.NODE_ENV) # => production

console.log(isntDev(a, b)) # => a
console.log(isntDev(a)) # => a

console.log(isntStag(a, b)) # => a
console.log(isntStag(a)) # => a

console.log(isntTest(a, b)) # => a
console.log(isntTest(a)) # => a

console.log(isntProd(a, b)) # => b
console.log(isntProd(a)) # => false
```

***

The MIT License (MIT)

Copyright (c) 2017 Hugo W. - me@hugw.io

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
