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