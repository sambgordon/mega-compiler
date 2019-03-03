# mega-compiler
mega-compiler utilizes Gulp to automatically watch and compile PostCSS, CoffeeScript, Pug, and run beautification tasks. Browsersync is then used to create a server and reload the page any time a change is made to the files being watched.

### File structure

All code to be compiled goes into `./src/pre`. PostCSS, CoffeeScript and Pug are then output to `./src/post` and finally the new `index.html` is beautified and compiled in the root directory.

    ├── src                     # Folder containing all pre and post-compiled files
    │   ├── pre                 # Contains files to be compiled  
    │       ├── index.pug       # Pug file  
    │       ├── script.coffee   # CoffeeScript file 
    │       └── style.css       # PostCSS file
    │   ├── post                # Contains files compiled using Gulp
    │       ├── index.html      # Compiled from ./pre/*.pug  
    │       ├── script.js       # Compiled from ./pre/*.coffee 
    │       └── style.css       # Compiled from ./pre/*.css        
    ├── index.html      
    ├── gulpfile.js             # Contains all Gulp tasks to be run
    └── package.json


### Requiring modules
    const gulp =            require('gulp'); //this project uses gulp 3.9.1 - everything else is a devDependency
    const postcss =         require('gulp-postcss');
    const autoprefixer =    require('gulp-autoprefixer'); //add vendor prefixes
    const browserSync  =    require('browser-sync').create(); //use browserSync to create server and reload page when gulp is run
    const coffee =          require('gulp-coffee');
    const pug =             require('gulp-pug');
    const beautify =        require('gulp-beautify'); //beautify pug output
