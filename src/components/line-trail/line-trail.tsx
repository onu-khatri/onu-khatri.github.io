import { gsap } from "gsap";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { svgBase, traceLine } from "./line-trail.css";

gsap.registerPlugin(useGSAP);
gsap.defaults({ease: 'none'});

const svgns = "http://www.w3.org/2000/svg";
const ease = 0.75;
const total = 175;

const pointer = { 
  x: window.innerWidth  / 2, 
  y: window.innerHeight / 2 
};

let leader = pointer;

function createLine(leader: {x: number, y: number}, i: number): SVGLineElement {
  const root = document.querySelector("#lineTrail");
  const line = document.createElementNS(svgns, "line");
  line.classList.add(`${traceLine}`);

  if(root)
  root.appendChild(line);
  
  gsap.set(line, { x: -15, y: -15, alpha: (total - i) / total });
  
  gsap.to(line, {
    duration: 1000,
    x: "+=1",
    y: "+=1",
    repeat: -1,
    modifiers: {
      x: function() {
        const posX = +gsap.getProperty(line, "x");
        const leaderX = +gsap.getProperty(leader, "x");
        
        const x = posX + (leaderX - posX) * ease;
        line.setAttribute("x2", String(leaderX - x));
        return x;
      },
      y: function() {
        const posY = +gsap.getProperty(line, "y");
        const leaderY = +gsap.getProperty(leader, "y");
        
        const y = posY + (leaderY - posY) * ease;
        line.setAttribute("y2", String(leaderY - y));
        return y;
      }
    }
  });  
  
  return line;
}

let hasCalled = false;

export const LineTrail = ()  => {

  useEffect(() => { 
    if(hasCalled) return;
    
    hasCalled = true;
    window.addEventListener("mousemove", function(event) {
      pointer.x = event.clientX;
      pointer.y = event.pageY;
    });

    for (let i = 0; i < total; i++) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      leader = createLine(leader, i) as any;
    }
  }, []);
  
  return <svg id="lineTrail" className={svgBase}></svg>
};