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
              url: '/posts/{id:int}',
              templateUrl: 'posts/_posts.html',
              controller: 'PostsCtrl',
              resolve: {
                  post: ['$stateParams', 'posts', function($stateParams, posts){
                      return posts.get($stateParams.id);
                  }] 
              }
            })
            .state('about', {
              url: '/about',
              templateUrl: 'about/_about.html'
            });
        $urlRouterProvider.otherwise('home');
    }
]);