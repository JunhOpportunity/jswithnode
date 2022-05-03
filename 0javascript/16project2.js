class Agent {
  constructor(name, partName, workTime) {
    this.name = name;
    this.partName = partName;
    this.workTime = workTime;
  }
}

class realAgent extends Agent {
  PAY_RATE = 10000;
  money() {
    return this.workTime * this.PAY_RATE;
  }
}

class partTimeAgent extends Agent {
  PAY_RATE = 8000;
  money() {
    return this.workTime * this.PAY_RATE;
  }
}

const agentA = new realAgent('지수', '청소', 10);
console.log(agentA.money(), '원');

const agentB = new partTimeAgent('준수', '청소', 10);
console.log(agentB.money(), '원');
