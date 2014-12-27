helloGrunt
==========

The purpose of this project is to learn how to set up a minimum installation of grunt for a HelloWorld project....and git.
 
## Prepare the project on local

- Create folder `mkdir helloGrunt`
- Create folder `mkdir app` inside
- Create files `touch README.md .gitignore app/HelloWorld.js`
- `git init`
- `git remote add origin git@github.com:rahife/helloGrunt.git`
- `git push -u origin master`

## Problems with git?

- [SSH problems?](https://help.github.com/articles/generating-ssh-keys/)

## Set up the project

- `npm init`
- `npm install grunt --save-dev`
- Create file `touch Gruntfile.js`
- Basic Gruntfile set up [here](http://gruntjs.com/getting-started)
- `npm install grunt-karma --save-dev`
- `npm install karma-jasmine --save-dev`