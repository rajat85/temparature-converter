app.config(function($stateProvider, $urlRouterProvider) {
	  // For any unmatched url
	  $urlRouterProvider.otherwise("/converter");
	  //
	  // Now set up the states
	  $stateProvider
	  .state('tempconverter', {
	  	url: "/converter",
	  	templateUrl: "partials/converter.html",
	  	controller: "TemparatureConverterController",
	  	controllerAs: "vm"
	  });
});