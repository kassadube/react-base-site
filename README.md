# react-base-site

##Static Server

For environments using Node, the easiest way to handle this would be to install serve and let it handle the rest:
``` npm
npm install -g serve
serve -s build
```

The last command shown above will serve your static site on the port 5000. Like many of serve’s internal settings, the port can be adjusted using the -p or --port flags.

Run this command to get a full list of the options available:

``` node
serve -h
```

add express to run from build dir

``` node
node / nodemone server.js
```

### firebase

add firebase account kassadubes@gmail.com

``` node
npm install -g firebase-tools
firebase login
firebase init
```
to deploy 

``` node
firebase deploy
```
https://react-start-93b26.firebaseapp.com/

## github

npm install --save gh-pages

https://kassadube.github.io/react-base-site/