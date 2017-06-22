const einie = {
  e: 'E',
  m: 'm',
  c: 'c',
  getMassEquation: function () {
    return this.m + '=' + this.e + '/' + this.c + '*' + this.c;
  }
};

class FunctionInvocations {
  bindFunc () {
    const massEquation = function () {
      console.log(this.getMassEquation());

      console.log(this.m);
      console.log(this.e);
      console.log(this.c);
    }.bind(einie)();
  }

  callApplyFunc () {
    const createRealEnergyEquation = function (momentum) {
      console.log(this.e + ' = ' + this.m + '(' + this.c + '*' + this.c + ') + (' + momentum + this.c + ')' + '(' + momentum + this.c + ')');
    };
    createRealEnergyEquation.call(einie, 'p');
    createRealEnergyEquation.apply(einie, ['p']);
  }

  run () {
    this.bindFunc();
    this.callApplyFunc();
  }
}

export default FunctionInvocations;
