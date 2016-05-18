(function(){
  angular.module('speakerManagement')
    .controller('DetailController', DetailController)

  DetailController.$inject = ['talkService', '$stateParams']

  function DetailController (talkService, $stateParams){
    var vm = this
    vm.title = "This is the Detail Controller."

    talkService.show($stateParams.id).success(function(results){
      vm.talk = results
      console.log(vm.talk)
    })

    vm.edit = function(){
      vm.editing = true
      vm.editingTalk = {
        firstName: vm.talk.firstName,
        lastName: vm.talk.lastName,
        email: vm.talk.email,
        twitterHandle: vm.talk.twitterHandle,
        talkTitle: vm.talk.talkTitle,
        meetupDate: vm.talk.meetupDate,
        comments: vm.talk.comments
      }
    }

    vm.update = function(){
      talkService.update($stateParams.id, vm.editingTalk).success(function(response){
        vm.editing = false
        // console.log(response)
        vm.talk = response.talk
      })
    }
  }
})()
