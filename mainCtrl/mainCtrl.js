angular.module('notesApp')
  .controller('mainCtrl', function($scope, mainSrvc){
      $scope.notes = mainSrvc.getNotes();
      console.log($scope.notes);
  })
