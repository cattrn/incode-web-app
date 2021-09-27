Proper documentation needs to be written up. In the meantime, have this.

## Installation

## Folder Structure

```bash
/config # 3rd party service config goes here
/controllers # api functions for routes
/middleware # middleware functions, including validation
/models # schemas for creating documents and querying the db
/routes # express router files that link to controller logic
/templates # emails, error messages and other copy
/utils # common functions
index.js
package.json
.gitignore
.env.sample
.eslintrc.json # eslint config
.prettierrc.json # prettier config
```

[Read more](https://medium.com/codechef-vit/a-better-project-structure-with-express-and-node-js-c23abc2d736f)

## Dependencies

**bcrypt** creating hashes for passwords

**cors** allowing front-end connection with back-end

**dotenv** reading .env files

**express** backend framework

**joi** validator

**jsonwebtoken** authenticate users

**lodash** [extra cool methods](https://lodash.com/), use if you wish, delete if you wish

**mongoose** connect and query mongodb

**morgan** http request logger

**nodemailer** send emails, requires SMTP host (Cat is still researching who to use)

**uuid** create uuids, may not need this

**winston** [logging library.](https://www.npmjs.com/package/winston) probably decent but more research needed.

## Dev Dependencies

**cross-env** use/set environmental variables in scripts

**eslint** for picking up coding errors

**jest** for writing tests

**nodemon** dev environment with continuous monitoring

**prettier** code formatter
