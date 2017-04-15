class Generators {
  simpleGenerator () {
    function *gen () {
      yield 1;
      yield 2;

      return 3;
    }
    let it = gen();
    console.log('simpleGenerator', it.next());
    console.log('simpleGenerator', it.next());
    console.log('simpleGenerator', it.next()); // done: true with no value
  }

  playingWithGenerator () {
    function *gen (x) {
      console.log('x', x);
      let y = 2 * (yield (x + 1));
      console.log('y', y);
      let z = yield y / 3;
      console.log(z);
      return x + y + z;
    }

    let it = gen(4);
    console.log('playingWithGenerator', it.next().value);
    console.log('playingWithGenerator', it.next(6).value);
    console.log('playingWithGenerator', it.next(2).value);
  }

  run () {
    this.simpleGenerator();
    this.playingWithGenerator();
  }
}

export default Generators;
