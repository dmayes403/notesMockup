angular.module('notesApp')
  .controller('mainCtrl', function($scope, mainSrvc){
      $scope.notes = mainSrvc.getNotes();
      console.log($scope.notes);

      $scope.setCurrentNoteTopics = function(NoteTopics){
        $scope.CurrentNoteTopics = NoteTopics.notes;
        console.log($scope.CurrentNoteTopics);
      }

      $scope.setCurrentNote = function(NoteObject){
        $scope.currentNote = NoteObject;
        console.log($scope.currentNote);
      }
  })
