

// 0 - 100 55.33
// Window Size: 3
/*

1, 2, 3, 2, 3

[ 3, 2, 3 ]

8/3

/*

const cpu = new RollingAverage(3);
const memory = new RollingAverage(5)

ra.add(1); 
ra.add(2);
ra.add(3);
ra.add(2);
ra.add(3);
// ...


ra.getAverage(); // 
*/


class RollingAverage {

    constructor(max_length) {
      this.arr = [];
      this.arr_length = max_length;
      this.sum = 0;
    }
  
    add(val) {
      if (this.arr.length == this.arr_length) {
        this.sum = this.sum - this.arr.shift();
        // shift unshift
      }
      this.arr.push(val);
      this.sum = this.sum + val;
    }
  
    getAverage() {
      return this.sum / this.arr.length;
    }
  }
  
  
  const cpuSimulation = new RollingAverage(3);
  
  cpuSimulation.add(1);
  cpuSimulation.add(2);
  console.log(cpuSimulation.getAverage());//  1.5
  cpuSimulation.add(3); 
  console.log(cpuSimulation.getAverage()); // 2
  cpuSimulation.add(3);
  console.log(cpuSimulation.getAverage()); // 2.66
  cpuSimulation.add(3);
  console.log(cpuSimulation.getAverage());
  
  
  