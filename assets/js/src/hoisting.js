class Hoisting {
  logs () {
    console.log(typeof nonexisting); // undefined
    // console.log(nonexisting); // referenceError not defined
  }

  hoist () {
    function scoped() {
      // a = 0;
      var b = 100;
      console.log('Some code...');

      // It converts into
      // var b;
      // console.log('Some code...');
      // b = 100;
    }

    scoped();
    // console.log(a); // refErr
    // console.log(b);
  }

  esnext () {
    const intouchable = 0;

    console.log(intouchable);
    // intouchable  = 1; // err
  }

  run () {
    this.logs();
    this.hoist();
    this.esnext();
  }
}

export default Hoisting;
