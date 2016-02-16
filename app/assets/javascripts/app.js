angular.module('anotherWall', ['ui.router', 'templates'])
.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'home/_home.html',
                controller: 'mainCtrl',
                resolve: {
                  postPromise: ['posts', function(posts){
                    return posts.getAll();
                  }]
                }
            })
            .state('posts', {
              url: '/posts/{id}',
              templateUrl: 'posts/_posts.html',
              controller: 'PostsCtrl'
            });
        $urlRouterProvider.otherwise('home');
    }
]);