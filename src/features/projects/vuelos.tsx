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

export const AdmiralTravel = () => (
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
        src="thumbnails/Vuelos.png"
      />
      <h3 className={`${cardTitleCss} ${cardContentMargin}`}>
        @Rastreator-Vuelos
      </h3>
      <div className={cardContentMargin}>
      Vuelos: is a search page to find the hotels, flights, rent-cars and travel insurance. 
      Page redirects users to the Booking.com and Kayak.com as per their selected dates and destinations.
      Vuelos is best example to expand business with Affiliated marketing.
      </div>
      <div>
        <ul className={styleChipsContainer}>
          <li className={styleChip}>.Net Core</li>
          <li className={styleChip}>Javascript</li>
          <li className={styleChip}>Redis</li>
          <li className={styleChip}>MS Sql Server</li>
        </ul>
      </div>
      
      <div style={{padding: "28px 10px 5px"}}>
        <span style={{color: "white", borderBottom: "2px solid rgb(238, 78, 98)", padding: "2px 2px"}}>Participate as</span>: Associate Software Engineer
        </div>
    </FlipCard.frontSide>

    <FlipCard.backSide>
    <h3 className={`${cardTitleCss} ${cardContentMargin}`} style={{textAlign: "center"}}>
        @Rastreator-Vuelos
      </h3>
      <div>
        <p style={{textAlign: "justify"}}>
        Viajes is a project of Rastreator, to provide dynamic links and to gather data of the user who want to travel in Spain. 
        This project helps Rastreator to start a Affiliated-marketing based project and increase the SEO-links and visibility at search engine indexes.
        </p>
        <h4 className={cardContentMargin} style={{margin: "0 0 8px 0"}}>My Role:</h4>
        <ul style={{margin: 0, width: "94%", paddingLeft: "11px"}}>
          <li className={backendList}>Requirement analyze and Client related documentation.</li>
          <li className={backendList}>Build and Task completions, TFS branch-code manage</li>
          <li className={backendList}>Create and maintain Schema, Types, Tables and Functions on MS SQL Server. </li>
          <li className={backendList}>Reviews and optimize code, maintain the JS libraries. </li>
        </ul>
      </div>
    </FlipCard.backSide>
  </FlipCard>
);
