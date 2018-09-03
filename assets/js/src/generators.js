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
      console.log('x', x); // => 5 in 1st iteration
      let y = 2 * (yield (x + 1));
      console.log('y', y);
      let z = yield y / 3; // => 12 in 2nd iteration
      console.log(z);
      return x + y + z;
    }

    let it = gen(4);
    console.log('playingWithGenerator', it.next().value);
    console.log('playingWithGenerator', it.next(6).value);
    console.log('playingWithGenerator', it.next(2).value);
  }

  async () {
    const fetch = () => new Promise ((resolve) => {
      setTimeout(() => resolve(100), 2000);
    });

    const promiseFunc = () => new Promise((resolve) => {
      fetch().then(res => {
        resolve(res + 1);
      });
    });

    promiseFunc().then(res => console.log(res));
  }

  asyncAwait () {
    const fetch = () => new Promise ((resolve) => {
      setTimeout(() => resolve('The reason I do it is '), 1000);
    });

    async function asyncFunc () {
      const result = await fetch();

      return result + 'to keep learning.';
    }

    asyncFunc().then(result => console.log(result));
  }

  bridgeOfDeath () {
    function *bridgeRiddle () {
      const riddle = yield 'What is it that belongs to you but others use it more than you?';
      console.log(riddle);

      if (riddle !== 'My name') return 'You shall not pass!';

      return 'You shall pass.';
    }

    const bridge = bridgeRiddle();
    const q = bridge.next().value;
    console.log(q);
    const a = bridge.next(prompt()).value;
    console.log(a);
  }

  run () {
    // this.simpleGenerator();
    // this.playingWithGenerator();
    // this.async();
    this.asyncAwait();
    this.bridgeOfDeath();
  }
}

export default Generators;
