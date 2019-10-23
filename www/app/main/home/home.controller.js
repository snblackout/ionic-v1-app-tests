(function () {
    'use strict';

    var moduleName = 'app.home';

    angular.module(moduleName)
        .controller('HomeCtrl', Ctrl);

    Ctrl.$inject = ['$injector', '$rootScope'];
    function Ctrl($injector, $rootScope) {
        var vm = this;
        var HomeSvc = $injector.get('HomeSvc');
      
        init();

        function init() {
           // _find();
        }
        function _find() {
            HomeSvc.find().then(function (data) {
                vm.list = data;
            }, function (err) {
                console.log('Error occurred while fetching data', err);
                $rootScope.$broadcast('notify-service-error', err);
            });
        }
    }
})();
