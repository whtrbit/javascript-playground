const einie = {
  e: 'E',
  m: 'm',
  c: 'c',
  getMassEquation: function () {
    return this.m + '=' + this.e + '/' + this.c + '*' + this.c;
  }
};

class FunctionInvocations {
  simpleBindFunc () {
    const massEquation = function () {
      console.log(this.getMassEquation());

      console.log(this.m);
      console.log(this.e);
      console.log(this.c);
    }.bind(einie)();
  }

  simpleCallApplyFunc () {
    const createRealEnergyEquation = function (momentum) {
      console.log(this.e + ' = ' + this.m + '(' + this.c + '*' + this.c + ') + (' + momentum + this.c + ')' + '(' + momentum + this.c + ')');
    };
    createRealEnergyEquation.call(einie, 'p');
    createRealEnergyEquation.apply(einie, ['p']);
  }

  currying () {
    const meetInspirationalPerson = function (birthDate, profession) {
      const hello = birthDate < 1000 ? 'Hi oldie! ' : 'Hi there! ';

      switch (profession) {
        case 'phisicist':
          return hello + 'Did you know that E = mc2 is not the full equation?';

        case 'engineer':
          return hello + 'Did you know that Nikola Tesla tricked Morgan to build his tower to make his electromagnetical experiments?';

        default:
          return hello + 'Did you know that Leonardo da Vinci had no formal education?';
      }
    };

    const greetOldEngineer = meetInspirationalPerson.bind(null, 600);
    console.log(greetOldEngineer());
    console.log(greetOldEngineer('engineer'));
  }

  curryingEinie () {
    const meetEinie = function (birthDate) {
      const hello = birthDate < 1000 ? 'Hi oldie! ' : 'Hi body! ';

      return hello + 'Did you know that ' + this.getMassEquation() + ' is not actually full equation?';
    };

    const greetEinie = meetEinie.bind(einie);
    console.log(greetEinie(1992));
  }

  run () {
    this.simpleBindFunc();
    this.simpleCallApplyFunc();
    this.currying();
    this.curryingEinie();
  }
}

export default FunctionInvocations;
