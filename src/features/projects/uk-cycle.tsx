import AvatarImage from "../../components/avatar/avatar";
import FlipCard from "../../components/flip-card/flip-card";
import FrontSide from "../../components/flip-card/front-side";
import {
  backendList,
  cardContentMargin,
  cardTitleCss,
  companyCardLogo,
  headerImageContainer,
  styleChip,
  styleChipsContainer,
} from "./rastreator.css";

export const Rastreator = () => (
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
        src="thumbnails/rastreator.png"
      />
      <h3 className={`${cardTitleCss} ${cardContentMargin}`}>
      @Rastreator Comparador
      </h3>
      <div className={cardContentMargin} style={{minHeight: "8em"}}>
        Rastreator provide the price comparison for Car/Bike insurances, Telephony packages, Energy and Mortgages with with guaranteed prices and exclusive offers of partners. 
      </div>
      <div style={{minHeight: "7em"}}>
        <ul className={styleChipsContainer}>
          <li className={styleChip}>.Net Core, Rest-API</li>
          <li className={styleChip}>Angular</li>
          <li className={styleChip}>MS SQL</li>
          <li className={styleChip}>Redis, RabbitMQ</li>
          <li className={styleChip}>Azure, Docker</li>
          <li className={styleChip}>TFS</li>
          <li className={styleChip}>GDPR</li>
        </ul>
      </div>
      <div style={{padding: "28px 10px 5px"}}>
        <span style={{color: "white", borderBottom: "2px solid rgb(238, 78, 98)", padding: "2px 2px"}}>Participate as</span>: Associate Software Engineer
        </div>
    </FlipCard.frontSide>

    <FlipCard.backSide>
      <h3 className={`${cardTitleCss} ${cardContentMargin}`} style={{textAlign: "center"}}>
        @Rastreator Comparador
      </h3>
        <p>
          This Rastreator project is group of multiple projects that work with different partners and
          technologies:
        </p>
        <ul style={{padding: "0", listStyle: "square inside", columnGap: "20px", columnCount: "2"}}>
          <li style={{width: "max-content", position: 'relative', left: "-5px"}}>
            <span>Car Comparison</span>
          </li>
          <li style={{width: "max-content", position: 'relative', left: "-5px"}}>
            <span>Bike Comparison</span>
          </li>
          <li style={{width: "max-content", position: 'relative', left: "-5px"}}>
            <span>Telephony Comparison</span>
          </li>
          <li style={{width: "max-content", position: 'relative', left: "-5px"}}>
            <span>Travel: Flight & Hotels</span>
          </li>
          <li style={{width: "max-content", position: 'relative', left: "-5px"}}>
            <span>Energy Plans</span>
          </li>
          <li style={{width: "max-content", position: 'relative', left: "-5px"}}>
            <span>Mortgages</span>
          </li>
        </ul>
        <h4 className={cardContentMargin} style={{margin: "28px 0 8px 0"}}>My Role:</h4>
        <ul style={{margin: 0, width: "94%", paddingLeft: "11px"}}>
          <li className={backendList}>Code development for Websites and Apis in MVC, Angular, .net Core.</li>
          <li className={backendList}>Build and Sprint management</li>
          <li className={backendList}>Create Centralize tracking system. </li>
          <li className={backendList}>Migrate old project to new technologies. </li>
          <li className={backendList}>Code Review and Regular update with new technologies.</li>
          <li className={backendList}>Provide internal trainings to team to be sync with technologies updates and changes</li>
        </ul>
    </FlipCard.backSide>
  </FlipCard>
);
