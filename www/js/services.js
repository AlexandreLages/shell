angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('ShellService', ['$http', function($http){
	return {
		adicionarUsuario: function(user){
			URL = 'http://' + ip + ':8080/shell/user';
			body = {
				user: user
			}
			return $http.post(URL, body).then(function(response){
				return response;
			}).catch(function(response){
				return response;
			});
		},
		editarUsuario: function(user, newPassword){
			URL = 'http://' + ip + ':8080/shell/user/editar/';
			body = {
				user: user,
				newPassword: newPassword
			}
			return $http.post(URL, body).then(function(response){
				return response;
			}).catch(function(response){
				return response;
			});
		},
		verificarUsuario: function(user){
			URL = 'http://' + ip + ':8080/shell/user/login';
			body = {
				userName: user.userName,
				password: user.password
			}
			return $http.post(URL, body).then(function(response){
				return response;
			}).catch(function(response){
				return response;
			});	
		},
		listarComandos: function(){
			URL = 'http://' + ip + ':8080/shell/command/help';
			return $http.get(URL).then(function(response){
				comandosData = response.data;
				return comandosData;
			}).catch(function(response){
				return response;
			});	
		},
		listarUsuarios: function(){
			URL = 'http://' + ip + ':8080/shell/user/list';
			return $http.get(URL).then(function(response){
				usuariosData = response.data;
				return usuariosData;
			}).catch(function(response){
				return response;
			});
		},
		deletarUsuario: function(usuario){
			URL = 'http://' + ip + ':8080/shell/user/delete/';
			body = {
				userName: usuario.userName,
				password: usuario.password
			}
			return $http.post(URL, body).then(function(response){
				return response;
			}).catch(function(response){
				return response;
			});
		}
	}
}]);

var ip = "192.168.1.9";