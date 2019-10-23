Ionic App Base
=====================

A starting project inspired by John Papa [style guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md) for [Ionic Side Menu](http://ionicframework.com/docs/api/directive/ionSideMenus/) that supports SCSS. 

You can tweak the `www/app/core/menu.html` to have other layouts instead of Ionic Side Menu.

## Getting Started##

Once you clone/checkout the repo in your local, run `npm install` in project directory to install the required node modules. 

>Ensure that node, cordova and ionic is installed in your system. Follow [Ionic Getting Started](http://ionicframework.com/getting-started/) to troubleshoot.

Run `ionic serve` to launch the app in web browser.

## Using this project

The app is divided into three main folder resides under `app` folder.  
> This section is in draft mode. We will keep it updating.

1. __auth__: should contain authentication related components.
2. __core__: provides layout to the app, contains app/global codes and hosts other components/sections
3. __main__: should contains app components like Home, About etc
4. __common__: contains the common components to be used across app


## Additional optional libraries included in the project

* __ngstorage__ : An AngularJS module that makes Web Storage working in the Angular Way. Visit https://github.com/gsklee/ngStorage
