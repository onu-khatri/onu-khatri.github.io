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
    </FlipCard.frontSide>

    <FlipCard.backSide>
      <div>
        <p>
          This TDP is group of multiple sub projects that work on different
          technologies:
        </p>
        <ul style={{padding: "0", listStyle: "square inside", columnGap: "20px", columnCount: "2"}}>
          <li style={{width: "max-content", position: 'relative', left: "-5px"}}>
            <span>Home Page</span>
          </li>
          <li style={{width: "max-content", position: 'relative', left: "-5px"}}>
            <span>Messages</span>
          </li>
          <li style={{width: "max-content", position: 'relative', left: "-5px"}}>
            <span>Candidate Search</span>
          </li>
          <li style={{width: "max-content", position: 'relative', left: "-5px"}}>
            <span>Search Settings</span>
          </li>
          <li style={{width: "max-content", position: 'relative', left: "-5px"}}>
            <span>Candidate Detail</span>
          </li>
        </ul>
      </div>
      <div style={{padding: "28px 10px 5px"}}>
        <span style={{color: "white", borderBottom: "2px solid rgb(238, 78, 98)", padding: "2px 2px"}}>Participate as</span>: Senior Full-Stack Engineer
        </div>
    </FlipCard.backSide>
  </FlipCard>
);
