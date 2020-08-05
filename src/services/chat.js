export default class Chat {
  constructor(state = []) {
    this.state = state;
  }

  get() {
    return this.state;
  }

  add(message) {
    return new Chat([...this.state, message]);
  }

}
