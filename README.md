# Create-Express-App
Create an express application without setting it up yourself

## Note
**There isn't an npm package at the time of creation but it will be created soon.**
If you still want to try it out
```bash
git clone https://github.com/BeenHashed/create-express-app.git
cd create-express-app
npm link
create-express-app my-app
```
## Overview

```
npx create-express-app my-app
```
This will create a directory called "my-app" with express and the cors module installed by default in the MVC architecture but you can also change the template to an EJS template or a minimal template.

You can also install create-express-app globally and use it from there if you so choose but using npx is recommened using npx to ensure that you always use the latest version of create-express-app.
```bash
npm install -g create-express-app
create-express-app m-yapp
```

The Default Project Structure will look like this after its been created 
```
my-app
├── controllers
├── models
├── views
├── routes
├── index.js
├── package.json
```

## Flags Overview
There are flags in create-express-app to make it more dynamic to fit your needs.
There are currently 4 flags in create-express-app
They are **-t, -a, -f, and -i**

### -t
The -t flag changes the template of the express application. 
There are 3 templates which are **MVC, EJS, and none**
All the flags can be used together
The default template is MVC but you can still be explicit if you want 
```
npx create-express-app my-app -t mvc

my-app
├──  node_modules
├── controllers
├── models
├── views
├── routes
├── index.js
├── package.json
```

```
npx create-express-app my-app -t ejs

my-app
├──  node_modules
├── controllers
├── models
├── views
    ├──  index.ejs
├── index.js
├── package.json
```

```
npx create-express-app my-app -t none

my-app
├──  node_modules
├── index.js
├── package.json
```


### -a 
The -a flag adds new folders to your project 
Example
```bash
npx create-express-app my-app -a logs lib
```

### -f
The -f flag adds new files to your project 
Example
```bash
npx create-express-app my-app -a somthing.js README.md
```

### -i 
The -i flag installs other npm packages to your files 
Example
```bash
npx create-express-app my-app -i mongoose lodash
```

## License 
The license for this project is [MIT](https://opensource.org/licenses/MIT).
