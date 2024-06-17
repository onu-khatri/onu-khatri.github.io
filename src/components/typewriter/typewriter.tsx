import { Component } from "react";
import { checkBoxBullet, cursor, listItemType } from "./typewriter.css";
import React from "react";

export interface TypeWriterProps {
  staticContent: string;
  staticContentClass: string;
  dynamicValues: { typeText: string; staticBeginning?: string };
  dynamicValuesClass: string;
  startDelay: number;
  typingDelay: number;
  erasingDelay: number;
  newTextDelay: number;
}

export class Typewriter extends Component {
  cursorRef: React.RefObject<HTMLElement>;
  typeAreaRef: React.RefObject<HTMLElement>;
  staticElementRef: React.RefObject<HTMLElement>;
  listRef: React.RefObject<HTMLLIElement>

  charIndex = 0;
  textArrayIndex = 0;

  constructor(public props: TypeWriterProps) {
    super(props);
    this.cursorRef = React.createRef();
    this.typeAreaRef = React.createRef();
    this.staticElementRef = React.createRef();
    this.listRef = React.createRef();
  }

  get cursorElement(): HTMLElement | null {
    return this.cursorRef.current;
  }

  get listItemElement(): HTMLElement | null {
    return this.listRef.current;
  }

  get typeAreaElement(): HTMLElement | null {
    return this.typeAreaRef.current;
  }

  get staticElement(): HTMLElement | null {
    return this.staticElementRef.current;
  }

  componentDidMount(): void {
    if (this.props.dynamicValues.typeText.length)
      setTimeout(() => this.typeData(), this.props.startDelay);
  }

  typeData() {
    if (!this.cursorElement || !this.staticElement || !this.typeAreaElement)
      return;

    if (this.charIndex < this.props.dynamicValues.typeText.length) {
      if (!this.cursorElement.classList.contains("typing"))
        this.cursorElement.classList.add("typing");

      this.cursorElement.style.display = "inline-block";

      if (this.listItemElement) this.listItemElement.style.display = "block";

      this.typeAreaElement.textContent +=
        this.props.dynamicValues.typeText.charAt(this.charIndex);

      this.staticElement.textContent =
        this.props.staticContent + this.props.dynamicValues.staticBeginning;

      this.charIndex++;
      setTimeout(() => this.typeData(), this.props.typingDelay);
    } else {
      this.cursorElement.classList.remove("typing");
      this.cursorElement.style.display = "none";
      //setTimeout(() => this.erase(), this.props.newTextDelay);
    }
  }

  render(): React.ReactNode {
    return (
      <li ref={this.listRef} className={listItemType}>
        <span className={checkBoxBullet} ></span>
        <span
          ref={this.staticElementRef}
          className={this.props.staticContentClass}
        >
          {this.props.staticContent}
        </span>
        <span
          ref={this.typeAreaRef}
          className={`typed-text ${this.props.dynamicValuesClass}`}
        ></span>
        <span ref={this.cursorRef} className={cursor}>
          &nbsp;
        </span>
      </li>
    );
  }
}

export default Typewriter;
