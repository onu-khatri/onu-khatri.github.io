import AvatarImage from "../../components/avatar/avatar";
import FlipCard from "../../components/flip-card/flip-card";
import FrontSide from "../../components/flip-card/front-side";
import {
  cardContentMargin,
  cardTitleCss,
  companyCardLogo,
  headerImageContainer,
  styleChip,
  styleChipsContainer,
} from "./tdp-project.css";
import { backendList } from "./wakeel.css";

export const Wakeel = () => (
  <FlipCard>
    <AvatarImage
      isSquare="true"
      alt="CareerBuilder"
      className={companyCardLogo}
      src="icons/admiral.png"
    ></AvatarImage>

    <FlipCard.frontSide>
      <FrontSide.headerImage
        imageClass={headerImageContainer}
        src="thumbnails/wakeel.png"
      />
      <h3 className={`${cardTitleCss} ${cardContentMargin}`}>
        Wakeel.com
      </h3>
      <div className={cardContentMargin} style={{minHeight: "8em"}}>
      Wakeel: Comparison of Car Insurances in Saudi Arabia. website provides free digital tools, 
      independent insurance policy comparisons from trusted partner companies, and outstanding customer support.
      </div>
      <div style={{minHeight: "7em"}}>
        <ul className={styleChipsContainer}>
          <li className={styleChip}>.Net Core</li>
          <li className={styleChip}>Angular</li>
          <li className={styleChip}>RabbitMQ</li>
          <li className={styleChip}>MS Sql Server</li>
          <li className={styleChip}>Team Foundation Server</li>
        </ul>
      </div>
      <div style={{padding: "28px 10px 5px"}}>
        <span style={{color: "white", borderBottom: "2px solid rgb(238, 78, 98)", padding: "2px 2px"}}>Participate as</span>: Senior Software Developer
        </div>
    </FlipCard.frontSide>

    <FlipCard.backSide>
    <div style={{fontSize: "1em"}}>
      <h3 className={`${cardTitleCss} ${cardContentMargin}`} style={{textAlign: "center"}}>
        Wakeel.com
      </h3>
        <p style={{textAlign: "justify"}}>
          Project is developed based on Clean Architecture with CQRS and Angular on frontend. RabbitMQ is used to communicate within the services. 
          Create a SSO and centralized authentication system using ASP.Net Identity. On Angular side, it render Customer Journey to ask required questions dynamically, 
          A Quote Fetching System get quotes from the providers based on user's answers.</p>
        
        <h4 className={cardContentMargin} style={{margin: "0 0 8px 0"}}>My Role:</h4>
        <ul style={{margin: 0, width: "94%", paddingLeft: "11px"}}>
          <li className={backendList}>Requirement analyze and Client related documentation.</li>
          <li className={backendList}>Build and Task completions, TFS branch-code manage</li>
          <li className={backendList}>Create and maintain Schema, Types, Tables and Functions on MS SQL Server. </li>
          <li className={backendList}>Reviews and optimize code, maintain Core and data-contract libraries. </li>
        </ul>
      </div>
    </FlipCard.backSide>
  </FlipCard>
);
