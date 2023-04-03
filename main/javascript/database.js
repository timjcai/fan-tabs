export class Database {
  constructor(dataset) {
    this.dataset = dataset;
  }

  remove(index) {
    if (this.dataset.length === index) {
      return this.dataset = this.dataset.slice(0, this.dataset.length-1);
    } else if (index === 1) {
      return this.dataset = this.dataset.slice(1, this.dataset.length);
    } else if (index === 2){
      const first = [this.dataset[0]];
      const second = this.dataset.slice(2, this.dataset.length);
      return this.dataset = first.concat(second);
    } else {
      const lowendMax = index - 1;
      const highendMin = index;
      return this.dataset = this.dataset.slice(0,lowendMax).concat(this.dataset.slice(highendMin, this.dataset.length));
    }
  }

  totalRound () {
    return this.dataset.length
  }

  currentRound () {
    return 1;
  }
}
