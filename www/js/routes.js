angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

  .state('menu.adicionar', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/adicionar.html',
        controller: 'adicionarCtrl'
      }
    }
  })

  .state('menu.listaDeUsuRios', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/listaDeUsuRios.html',
        controller: 'listaDeUsuRiosCtrl'
      }
    }
  })

  .state('menu.editar', {
    url: '/page/8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/editar.html',
        controller: 'editarCtrl' 
      }
    }
  })

  .state('menu.verificar', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/verificar.html',
        controller: 'verificarCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.ajuda', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ajuda.html',
        controller: 'ajudaCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page7')


});