type ButtonEl = HTMLButtonElement;
type ClickedQueue = [null | ButtonEl, null | ButtonEl];

class ClickedStateQueue {
  private queue: ClickedQueue = [null, null];
  constructor() {}

  public enqueue(buttonRef: ButtonEl) {
    buttonRef.classList.add("clicked");
    if (!this.queue[0]) {
      this.queue[0] = buttonRef;
    } else {
      this.queue[0].classList.remove("clicked");
      this.queue[1] = this.queue[0];
      this.queue[0] = buttonRef;
    }
  }

  public reset() {
    this.queue.forEach((el) => {
      el?.classList.remove("clicked");
    });
    this.queue.fill(null);
  }
}

export default new ClickedStateQueue();
