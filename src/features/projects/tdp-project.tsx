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
} from "./tdp-project.css";

export const TdpProject = () => (
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
        Talent Discovery Platform
      </h3>
      <div className={cardContentMargin} style={{minHeight: "8em"}}>
        TDP provide solutions and services to employers and recruiters.
        Recruiter can perform semantic search for the candidates, send the
        messages, jobs from the system and client can also add candidates to
        their ATS.
      </div>
      <div style={{minHeight: "7em"}}>
        <ul className={styleChipsContainer}>
          <li className={styleChip}>NodeJs, NestJs</li>
          <li className={styleChip}>.Net Core, Rest-API</li>
          <li className={styleChip}>S3, Lambda, SNS, SQS</li>
          <li className={styleChip}>MySql, MS SQL</li>
          <li className={styleChip}>Github, Jenkin, Docker</li>
          <li className={styleChip}>Redis</li>
          <li className={styleChip}>Angular 17</li>
        </ul>
      </div>
      <div style={{padding: "28px 10px 5px"}}>
        <span style={{color: "white", borderBottom: "2px solid rgb(238, 78, 98)", padding: "2px 2px"}}>Participate as</span>: Senior Full-Stack Engineer
        </div>
    </FlipCard.frontSide>

    <FlipCard.backSide>
      <div>
      <h3 className={`${cardTitleCss} ${cardContentMargin}`} style={{textAlign: "center"}}>
        Talent Discovery Platform
      </h3>
        <p>
          This TDP project is group of multiple sub projects that work on different
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
          <li style={{width: "max-content", position: 'relative', left: "-5px"}}>
            <span>Job Posting</span>
          </li>
          <li style={{width: "max-content", position: 'relative', left: "-5px"}}>
            <span>Campaign</span>
          </li>
          <li style={{width: "max-content", position: 'relative', left: "-5px"}}>
            <span>Analytics</span>
          </li>
        </ul>
        <h4 className={cardContentMargin} style={{margin: "0 0 8px 0"}}>My Role:</h4>
        <ul style={{margin: 0, width: "94%", paddingLeft: "11px"}}>
          <li className={backendList}>Develop and maintain project with hight quality code practices from front-end to back-end.</li>
          <li className={backendList}>Maintain project deployment on different environments with CI/CD and AWS Cloud</li>
          <li className={backendList}>Reviews and debugs code, collaborates with internal teams. </li>
          <li className={backendList}>Ensures software is up-to-date with the latest technologies. </li>
          <li className={backendList}>Provide technical guidance, mentorship to deliver successful software projects.</li>
        </ul>
      </div>
    </FlipCard.backSide>
  </FlipCard>
);
