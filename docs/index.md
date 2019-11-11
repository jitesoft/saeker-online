# Documentation

## Contribution Guidelines

Please,check out the [Code of Conduct](https://github.com/jitesoft/saeker-online/blob/master/.github/CODE_OF_CONDUCT.md) 
and mentally accept it before you start to contribute to this project.

Contributions to the project are greatly accepted, there are many ways to contribute,
such as writing new content, add new features to the page or just change the style a bit,
everything is much appreciated!

When you work on the project, you should work in your own fork (as long as you are not a code owner),
when you are ready to add the changes to the repository, create a Pull Request for the development branch.  
This will allow us to test  the changes before adding it to the main branch i.e., deploying it.

Also: everything submitted to the repository will fall under the same license as the project in whole, that is, the MIT license.  
Work can not be retracted.

## Code Standard

This project uses `JavaScript` and `Scss` as "languages", while all content is done
in markdown files. The `scss` standard is not set, so as long as it's readable, it will probably
pass an inspection!

When it comes to the JavaScript there are two parts:

* `js`
* `vue`

The common javascript, that is, none-vue components follows the `@jitesoft/eslint-config` javascript standard
this standard is basically the javascript `semistandard` (standard with semicolons!).  
When coding, be sure to use the eslint configuration added in the sources and make sure you
run `npm run test` before creating a pull request!

Any new code added to the `js` directory will have to have tests (jest) implemented.  
Code without coverage will not be accepted.

The `vue` directory uses two eslint configurations, the same one as the above + the `plugin:vue/essentials` standard.
As with the other javascript, this should also pass the code standard tests and are ran with 
the same command.

## Setup

The development setup is quite straight forward.  
Install the npm packages (`npm i` or even `npm ci`) and run `npm run watch`.   
If you wish to run the tests, use the `npm test` command and if you wish to build the 
source code to check out the compiled code, run `npm run build:prod`!

## Development

The project is split up in a few different directories, most of which are located under the `src` directory.   

```
src/
    content/
    html/
    img/
    js/
    styles/
    vue/
```

### Content

The content directory is where all the actual page content resides. Each page have its own folder
in which the pages markdown file is located. When there are more than one language, there will be more files
and they are intended to be named `<page-name>.<lang-code>.md` to be correctly loaded.  
If a new language is added, the `routes.json` file in the `src` root have to be updated,
and the same have to be done if there are new pages added.

### Html

The HTML folder contains the template (handlebars) for the index page and a 404 html page which is used to redirect
users when they enter a subpage by url and not from the index.

### Img

Inside the img directory, all the images of the application resides. Some of the images are used by the loader
to generate favicons and such, but they are all reachable from the code.

### js

The JS folder contains all javascript that is not directly connected to the UI. All the application logic is supposed to 
reside here, while at the moment, it's quite sparse.

### styles

The styles directory only contains global variables and mixins. They are included via webpack into the application
and does not need to be imported in the code!

### vue

The vue directory is where all the vue.js files reside, it is probably the place where most work is done (sub content),
Try to keep the directory structure as logical as possible, so that it is easy to work with!  

## End

Good luck and have fun!
