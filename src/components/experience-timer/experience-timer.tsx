import { Component, createRef } from "react";
import { divTimer, sinceTimer, spanTimer, timer } from "./experience-timer.css";

export class ExperienceTimer extends Component {
  counterRef: React.RefObject<HTMLDivElement>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(props: any) {
    super(props);
    this.counterRef = createRef<HTMLDivElement>();
  }

  updateTimer() {
    if (!this.counterElement) return;
    // yyyy-MM-dd HH:mm:ss
    const past = Date.parse("2011-11-01 00:00:00");
    const now = new Date();
    // eslint-disable-next-line
    const diff = now as any as number - past;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12));
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor(diff / (1000 * 60));
    const secs = Math.floor(diff / 1000);

    const y = years;
    const M = months - years * 12;
    const d = days - months * 30;
    const h = hours - days * 24;
    const m = mins - hours * 60;
    const s = secs - mins * 60;

    this.counterElement.innerHTML =
      `<div style="display: block" ><span class='${spanTimer} ${sinceTimer}'>since: 2011.11.01</span></div>`
      +`<div class='${divTimer}'>${y}<span class='${spanTimer}'>years</span></div>`
      +`<div class='${divTimer}'>${M}<span class='${spanTimer}'>months</span></div>`
      +`<div class='${divTimer}'>${d}<span class='${spanTimer}'>days</span></div>`
      +`<div class='${divTimer}'>${h}<span class='${spanTimer}'>hours</span></div>`
      +`<div class='${divTimer}'>${m}<span class='${spanTimer}'>min</span></div>`
      +`<div class='${divTimer}'>${s}<span class='${spanTimer}'>sec</span></div>`;
  }

  componentDidMount(): void {
    setInterval(() => this.updateTimer(), 1000);
  }

  get counterElement(): HTMLElement | null {
    return this.counterRef.current;
  }

  render(): React.ReactNode {
    return <div ref={this.counterRef} className={timer}></div>;
  }
}
