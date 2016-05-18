(function(){
  angular.module('speakerManagement')
    .factory('talkService', talkService)



    talkService.$inject = ['$http']

  function talkService($http){
    var apiUrl = '/api/talks/'
    var service = {
      index: index,
      show: show,
      create: create,
      update: update,
      destroy: destroy
    }
    return service

    //factory functions:
    function index(){
      return $http.get(apiUrl)
    }

    function show(id){
      return $http.get(apiUrl + id)
    }

    function create(data){
      return $http.post(apiUrl, data)
    }

    function update(id, data){
      return $http.patch(apiUrl + id, data)
    }

    function destroy(id){
      return $http.delete(apiUrl + id)
    }
  }
})()
