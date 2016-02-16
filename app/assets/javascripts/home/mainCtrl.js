angular.module('anotherWall')
.controller('mainCtrl', [
    '$scope',
    'posts',
    function($scope, posts){
        $scope.posts = posts.posts;
        
        $scope.addPost = function(){
            if(!$scope.title || $scope.title === '') return;
            
            posts.create({
              title: $scope.title,
              link: $scope.link
            });
            
            $scope.title="";
            $scope.link="";
        };
        
        $scope.postVote = function(post){
          post.upvotes += 1;
        };
    }
]);