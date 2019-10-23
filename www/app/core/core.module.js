(function () {
    'use strict';

    var moduleName = 'app.core',
            requires = [
                'ionic',
                'ngStorage',
                'ngCordova',
                'cordova-plugin-facebook4'
            ];

    angular.module(moduleName, requires);

})();
