helloGrunt
==========

The purpose of this project is to learn how to set up a minimum installation of grunt and karma for a HelloWorld project....and git.
 
## Prepare the project on local

- Create folder `mkdir helloGrunt`
- Create folder `mkdir app` inside
- Create files `touch README.md .gitignore app/HelloWorld.js`
- `git init`
- `git remote add origin git@github.com:rahife/helloGrunt.git`
- `git push -u origin master`

- [SSH problems?](https://help.github.com/articles/generating-ssh-keys/)

## Set up the project

- `npm init`
- `npm install grunt --save-dev`
- Create file `touch Gruntfile.js`
- `npm install grunt-karma --save-dev`
- `npm install karma-jasmine --save-dev`
- Create karma.conf.js: `./node_modules/karma/bin/karma init`
- Edit Gruntfile to add the karma task. More info about [grunt-karma](https://github.com/karma-runner/grunt-karma)
- Run grunt karma