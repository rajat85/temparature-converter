function temparatureConverterController($stateParams) {
  var vm = this;

    vm.result = 0;
    vm.temp = 0;
    vm.fromUnits = null;
    vm.toUnits = null;
    vm.convert = function() {
      var celsius = 0;
      if (vm.fromUnit && vm.toUnit) {
        if (isNaN(vm.temp)) {
          alert("temperature must be a number");
          return 1;
        }
        switch(vm.fromUnit) {
          case 'celsius':
            celsius = parseFloat(vm.temp);
            break;
          case 'fahrenheit':
            celsius = (parseFloat(vm.temp) - 32) * 5 / 9;
            break;
        };
        switch(this.toUnit) {
          case 'celsius':
            this.result = parseFloat(celsius);
            break;
          case 'fahrenheit':
            this.result = parseFloat(celsius) * 9 / 5 + 32;
            break;
          };
      } else {
        alert("please select units");
      }
    };
};

temparatureConverterController.$inject = ['$stateParams'];

app.controller("TemparatureConverterController", temparatureConverterController);