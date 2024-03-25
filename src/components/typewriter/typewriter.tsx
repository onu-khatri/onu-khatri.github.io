import { Component } from "react";
import { cursor } from "./typewriter.css";
import React from "react";

export interface TypeWriterProps {
  staticContent: string;
  staticContentClass: string;
  dynamicValues: {typeText:string, staticBeginning?: string}[];
  dynamicValuesClass: string;
  typingDelay : number;
  erasingDelay : number;
  newTextDelay : number;
}

export class Typewriter extends Component {
  cursorRef: React.RefObject<HTMLElement>;
  typeAreaRef: React.RefObject<HTMLElement>;
  staticElementRef: React.RefObject<HTMLElement>;

  charIndex = 0;
  textArrayIndex = 0;

  constructor(public props: TypeWriterProps) {
    super(props);
    this.cursorRef = React.createRef();
    this.typeAreaRef = React.createRef();
    this.staticElementRef = React.createRef();
}

get cursorElement() : HTMLElement {
  return this.cursorRef.current;
}

get typeAreaElement() : HTMLElement {
  return this.typeAreaRef.current;
}

get staticElement() : HTMLElement {
  return this.staticElementRef.current;
}

componentDidMount(): void {
  if(this.props.dynamicValues.length) 
    setTimeout(() => this.typeData(), this.props.typingDelay + 250);
}

typeData() {
  if (this.charIndex < this.props.dynamicValues[this.textArrayIndex].typeText.length) {
    if(!this.cursorElement.classList.contains("typing")) 
      this.cursorElement.classList.add("typing");

    this.typeAreaElement.textContent += this.props.dynamicValues[this.textArrayIndex].typeText.charAt(this.charIndex);
    this.staticElement.textContent = this.props.staticContent + this.props.dynamicValues[this.textArrayIndex].staticBeginning;

    this.charIndex++;
    setTimeout(() => this.typeData(), this.props.typingDelay);
  } 
  else {
    this.cursorElement.classList.remove("typing");
    setTimeout(() => this.erase(), this.props.newTextDelay);
  }
}

erase() {
	if (this.charIndex > 0) {
    if(!this.cursorElement.classList.contains("typing")) this.cursorElement.classList.add("typing");
    this.typeAreaElement.textContent = this.props.dynamicValues[this.textArrayIndex].typeText.substring(0, this.charIndex-1);
    this.staticElement.textContent = this.props.staticContent + this.props.dynamicValues[this.textArrayIndex].staticBeginning;
    this.charIndex--;
    setTimeout(() => this.erase(), this.props.erasingDelay);
  } 
  else {
    this.cursorElement.classList.remove("typing");
    this.textArrayIndex++;
    if(this.textArrayIndex>=this.props.dynamicValues.length) 
      this.textArrayIndex=0;
    setTimeout(() => this.typeData(), this.props.typingDelay + 1100);
  }
}

render(): React.ReactNode {
  return <>
  <span ref={this.staticElementRef} className={this.props.staticContentClass}>{this.props.staticContent}</span>
  <span ref={this.typeAreaRef} className={`typed-text ${this.props.dynamicValuesClass}`}></span>
  <span ref={this.cursorRef} className={cursor}>&nbsp;</span>
  </>
}

}

export default Typewriter;