angular.module('app.controllers', [])
  
.controller('adicionarCtrl', ['$scope', '$stateParams', '$ionicLoading', '$state', '$rootScope', '$ionicPopup', 'ShellService',
function ($scope, $stateParams, $ionicLoading, $state, $rootScope, $ionicPopup, ShellService) {

	/* LOADING FUNCTION */
	$scope.showLoading = function() {
		$ionicLoading.show()
	};
	$scope.hideLoading = function(){
		$ionicLoading.hide();
	};

	$scope.modal = function(title, template){
		var alertPopup = $ionicPopup.alert({
     		title: title,
     		template: template
   		});   		
	};

	$scope.adicionarUsuario = function(user){
		$scope.showLoading();
		ShellService.adicionarUsuario(user).then(function(response){
			if(response.status == 200){
				var alertPopup = $ionicPopup.alert({
	     			title: 'Adicionado',
	     			template: 'Usuário Adicionado com Sucesso!',	     		
			       	okText: 'Ok'
   				});
   				$scope.hideLoading();
   				$state.go('menu.listaDeUsuRios');
			} else {
				var alertPopup = $ionicPopup.alert({
	     			title: 'Erro',
	     			template: 'Usuário já existente na base de dados!',	     		
			       	okText: 'Ok'
   				});
   				$scope.hideLoading();
			}
		});
	}
}])
   
.controller('listaDeUsuRiosCtrl', ['$scope', '$stateParams', '$ionicLoading', '$state', '$rootScope', '$ionicPopup', 'ShellService',
function ($scope, $stateParams, $ionicLoading, $state, $rootScope, $ionicPopup, ShellService) {

	/* LOADING FUNCTION */
	$scope.showLoading = function() {
		$ionicLoading.show()
	};
	$scope.hideLoading = function(){
		$ionicLoading.hide();
	};
	/* END - LOADING FUNCTION */

	$scope.listarUsuarios = function(){
		$scope.showLoading();
		ShellService.listarUsuarios().then(function(usuariosData){
			console.log("usuarios: " + usuariosData);
			$scope.usuariosList = usuariosData;
			$scope.hideLoading();
		});
		$scope.$broadcast('scroll.refreshComplete');
	}
	$scope.listarUsuarios();

	$scope.deletarUsuario = function(usuario){
		var confirmPopup = $ionicPopup.confirm({
			title: 'Excluir usuario',
			template: 'Tem certeza que deseja excluir o usuario '+ usuario.userName + ' - ' + usuario.password + '?'
		});
		confirmPopup.then(function(res) {
		    if(res) {
		    	$scope.showLoading();
				ShellService.deletarUsuario(usuario)
				.then(function(response){
					if(response.status == 200){
						var alertPopup = $ionicPopup.alert({
			     			title: 'Deletado',
			     			template: 'Usuário deletado com sucesso!',	     		
					       	okText: 'Ok'
   						});
   						$scope.hideLoading();
   						$state.go('menu.listaDeUsuRios');
			} else {
					var alertPopup = $ionicPopup.alert({
	     				title: 'Erro',
	     				template: 'Usuário inexistente na base de dados!',	     		
			       		okText: 'Ok'
   					});
   					$scope.hideLoading();
			}		
					$scope.listarUsuarios();
				});
		    } else {
		       return;
		    }
		});
	}
}])
   
.controller('verificarCtrl', ['$scope', '$stateParams', '$ionicLoading', '$state', '$rootScope', '$ionicPopup', 'ShellService',
function ($scope, $stateParams, $ionicLoading, $state, $rootScope, $ionicPopup, ShellService) {
	/* LOADING FUNCTION */
	$scope.showLoading = function() {
		$ionicLoading.show()
	};
	$scope.hideLoading = function(){
		$ionicLoading.hide();
	};

	$scope.modal = function(title, template){
		var alertPopup = $ionicPopup.alert({
     		title: title,
     		template: template
   		});   		
	};

	$scope.verificarUsuario = function(user){
		$scope.showLoading();
		ShellService.verificarUsuario(user).then(function(response){
			if(response.status == 200){
				var alertPopup = $ionicPopup.alert({
	     			title: 'Usuário Existente',
	     			template: 'Usuário existente na base de dados!',	     		
			       	okText: 'Ok'
   				});
   				$scope.hideLoading();
   				$state.go('menu.listaDeUsuRios');
			} else {
				var alertPopup = $ionicPopup.alert({
	     			title: 'Usuário Inexistente',
	     			template: 'Usuário e/ou senha inválidos!',	     		
			       	okText: 'Ok'
   				});
   				$scope.hideLoading();
   				$state.go('menu.listaDeUsuRios');
			}
		});
	}
}])
   
.controller('menuCtrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {


}])
   
.controller('ajudaCtrl', ['$scope', '$stateParams', '$state', 'ShellService', '$ionicLoading', '$ionicPopup', '$rootScope',
function ($scope, $stateParams, $state, ShellService, $ionicLoading, $ionicPopup, $rootScope) {
	/* LOADING FUNCTION */
	$scope.showLoading = function() {
		$ionicLoading.show()
	};
	$scope.hideLoading = function(){
		$ionicLoading.hide();
	};
	/* END - LOADING FUNCTION */

	$scope.listarComandos = function(){
		$scope.showLoading();
		ShellService.listarComandos().then(function(comandosData){
			$scope.comandosList = comandosData;
			$scope.hideLoading();
		});
	}
	$scope.listarComandos();
}])

.controller('editarCtrl', ['$scope', '$stateParams', '$state', 'ShellService', '$ionicLoading', '$ionicPopup', '$rootScope',
function ($scope, $stateParams, $state, ShellService, $ionicLoading, $ionicPopup, $rootScope) {
	/* LOADING FUNCTION */
	$scope.showLoading = function() {
		$ionicLoading.show()
	};
	$scope.hideLoading = function(){
		$ionicLoading.hide();
	};
	/* END - LOADING FUNCTION */

	$scope.modal = function(title, template){
		var alertPopup = $ionicPopup.alert({
     		title: title,
     		template: template
   		});   		
	};

	$scope.editarUsuario = function(user,newPassword){
		$scope.showLoading();
		ShellService.editarUsuario(user, newPassword).then(function(response){
			if(response.status == 200){
				var alertPopup = $ionicPopup.alert({
	     			title: 'Editado',
	     			template: 'Usuário editado com sucesso!',	     		
			       	okText: 'Ok'
   				});
   				$scope.hideLoading();
   				$state.go('menu.listaDeUsuRios');
			} else {
				var alertPopup = $ionicPopup.alert({
	     			title: 'Erro',
	     			template: 'Usuário inexistente na base de dados!',	     		
			       	okText: 'Ok'
   				});
   				$scope.hideLoading();
			}
		});
	}
}])

 