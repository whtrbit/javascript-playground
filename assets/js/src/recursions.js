class Recursions {
  fractorial () {
    const fractorial = n => {
      if (n < 0) throw Error('It\'s fractorial man...');
      if (n === 0) return 1;

      const result = n * (fractorial(n - 1));

      return result;
    };
    console.log(fractorial(170)); // max
  }

  getMax () {
    const sampleArr = [0,1,2,3,4,5, 10, 6,7,8,9];
    const getMax = arr => {
      const nums = arr.slice();

      if (nums.length === 1) return nums[0];
      if (nums[0] < nums[1]) {
        nums.splice(0, 1);
      } else {
        nums.splice(1, 1);
      }

      return getMax(nums);
    };
    console.log(getMax(sampleArr));
  }

  swimmingCounting() {
    const iterate = n => {
      console.time('iterate');
      for (let i = 1; i <= n; i++) {
        if (i === n) {
          console.timeEnd('iterate');
          console.log('Break.');
        }
      }
    };
    const recurse = n => {
      console.time('recurse');
      if (n === 0) {
        console.timeEnd('recurse');
        console.log('Break.');
      } else {
        let nn = n - 1;
        recurse(nn);
      }
      // console.log(n); // for loop :D
    };
    iterate(8001);
    recurse(7379); // call stack size -(+degree)
  }

  grow () {
    const grow = n => {
      if (n <= 0) {
        return 0;
      }
      else if (n <= 2) {
        return 1;
      } else {
        return grow(n - 1) + grow(n - 2);
      }
    };
    console.log(grow(8));
  }

  reverseString () {
    const reverseString = string => {
      if (string === "") {
        return "";
      } else {
        return reverseString(string.substring(1)) + string.charAt(0);
      }
    };
    console.log(reverseString('live ,evil'));
  }

  run () {
    this.fractorial();
    this.getMax();
    this.swimmingCounting();
    this.grow();
    this.reverseString();
  }
}

export default Recursions;
