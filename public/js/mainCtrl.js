(function(){
  angular.module('speakerManagement')
    .controller('MainController', MainController)

  MainController.$inject = ['talkService', '$state']

  function MainController(talkService, $state){
    var vm = this
    vm.title = "Main Controller"
    vm.newTalk = {}

    vm.talks = []

    talkService.index().success(function(results){
      console.log(results)
      vm.talks = results
    })

    vm.destroy = function(id, index){
      talkService.destroy(id).success(function(response){
        console.log(response)
        vm.users.splice(index, 1)
      })
    }

    vm.create = function(){
      talkService.create(vm.newTalk).success(function(response){
        $state.go('detail', {id: response.talk._id})
      })
    }
  }
})()
