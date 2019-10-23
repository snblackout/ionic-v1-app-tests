(function () {
    'use strict';

    var moduleName = 'app.home';

    angular.module(moduleName)
        .controller('HomeCtrl', Ctrl);

    Ctrl.$inject = ['$injector', '$rootScope', '$scope'];
    function Ctrl($injector, $rootScope, $scope) {
        var vm = this;
        var HomeSvc = $injector.get('HomeSvc');

        init();

        var fbPermissions = ["public_profile","email"];

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

      $scope.connectFacebook = function() {

        if (typeof facebookConnectPlugin !== 'undefined') {

          facebookConnectPlugin.getLoginStatus(function(successLIS){
            if(successLIS.status === 'connected'){
              alert('facebook is connected');
            }
            else {
              facebookConnectPlugin.logout(function(successLO) {

                $scope.facebookConnectLogin();

              }, function(failureLO){

                $scope.facebookConnectLogin();

              });

            }
          });

        }

      }

      $scope.facebookConnectLogin = function() {

        facebookConnectPlugin.login(fbPermissions, function(successLI){

          if (successLI) {
            if (successLI.status === "connected") {

              alert('facebook is connected after login');

            } else {

              alert('failed to login with facebook');

            }
          } else {

            alert('failed to login with facebook, successLI was nothing');

          }

        }, function(failureLI) {

          alert('error login with facebook: ' + JSON.stringify(failureLI));

        });

      }

    }
})();
