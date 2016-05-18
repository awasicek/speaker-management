(function(){
  angular.module('speakerManagement', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){

      //handle any attempts to routes other than what is listed below
      $urlRouterProvider.otherwise('/')

      //my established routes
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: '/partials/home.html'
        })
        .state('talks', {
          url: '/talks',
          templateUrl: '/partials/talks.html',
          controller: 'MainController as main'
        })
        .state('newTalk', {
          url: '/talk/new',
          templateUrl: '/partials/new.html',
          controller: "MainController as main"
        })
        .state('detail', {
          url: '/talk/:id',
          templateUrl: '/partials/detail.html',
          controller: 'DetailController as detail'
        })
    })
})()
