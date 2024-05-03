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
      <div className={cardContentMargin}>
      P4P allows clients and their entire recruitment team to pay only for
                  the resumes that they view instead of having to commit to the
                  monthly cost of a license.
      </div>
      <div>
        <ul className={styleChipsContainer}>
          <li className={styleChip}>.Net Core, Rest-API</li>
          <li className={styleChip}>Lambda, SNS, SQS</li>
          <li className={styleChip}>Postgresql</li>
          <li className={styleChip}>Redis</li>
          <li className={styleChip}>Angular 17</li>
          <li className={styleChip}>Github, Jenkin, Docker</li>
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
    </FlipCard.backSide>
  </FlipCard>
);
