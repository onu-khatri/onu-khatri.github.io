import AvatarImage from "../../components/avatar/avatar";
import FlipCard from "../../components/flip-card/flip-card";
import FrontSide from "../../components/flip-card/front-side";
import { backendList } from "./tdp-p4p.css";
import {
  cardContentMargin,
  cardTitleCss,
  companyCardLogo,
  headerImageContainer,
  styleChip,
  styleChipsContainer,
} from "./tdp-project.css";

export const TdpP4P = () => (
  <FlipCard>
    <AvatarImage
      isSquare="true"
      alt="CareerBuilder"
      className={companyCardLogo}
      src="icons/cb.png"
    ></AvatarImage>

    <FlipCard.frontSide>
      <FrontSide.headerImage
        imageClass={headerImageContainer}
        src="thumbnails/TDP-thumb.jpg"
      />
      <h3 className={`${cardTitleCss} ${cardContentMargin}`}>
        Pay For Performance
      </h3>
      <div className={cardContentMargin} style={{minHeight: "8em"}}>
      P4P model offers a more flexible way to advertise all client jobs, and is designed to align what client pay with what we deliver. 
      When client qualify, client only spend when candidates apply to their positions.
      </div>
      <div style={{minHeight: "7em"}}>
        <ul className={styleChipsContainer}>
          <li className={styleChip}>.Net Core, Rest-API</li>
          <li className={styleChip}>Lambda, SNS, SQS</li>
          <li className={styleChip}>Postgresql</li>
          <li className={styleChip}>Redis</li>
          <li className={styleChip}>Angular 17</li>
          <li className={styleChip}>Github, Jenkin, Docker</li>
        </ul>
      </div>
      <div style={{padding: "28px 10px 5px"}}>
        <span style={{color: "white", borderBottom: "2px solid rgb(238, 78, 98)", padding: "2px 2px"}}>Participate as</span>: Senior Full-Stack Engineer
        </div>
    </FlipCard.frontSide>

    <FlipCard.backSide>
      <div>
      <h3 className={`${cardTitleCss} ${cardContentMargin}`} style={{textAlign: "center"}}>
        Pay For Performance
      </h3>
        <p>
          Project is developed with micro-front end and microservices design. It uses AWS Lambda, SQS and SNS for the communication between the services.
        </p>
        <h4 className={cardContentMargin} style={{margin: "0 0 8px 0"}}>My Role:</h4>
        <ul style={{margin: 0, width: "94%", paddingLeft: "11px"}}>
          <li className={backendList}>Develop and maintain frontend and backend based on micro design.</li>
          <li className={backendList}>Create Lambda Functions, SNS Topics, and SQS Listeners</li>
          <li className={backendList}>Create and maintain Schema, Types, Tables and Functions on PostgreSQL DB. </li>
          <li className={backendList}>Reviews and optimize code, collaborates with internal teams. </li>
          <li className={backendList}>Ensures software is up-to-date with the latest technologies. </li>
          <li className={backendList}>Provide technical guidance, mentorship to the team members</li>
        </ul>
      </div>
    </FlipCard.backSide>
  </FlipCard>
);
