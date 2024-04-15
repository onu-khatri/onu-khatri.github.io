import { DesktopIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Box } from "../../components/box/box";
import {
  aboutInfo,
  imagesStyle,
  intoPara,
  IntroContainer,
  toolKitList,
  toolKitListItem,
  toolTitle,
} from "./introduction.css";

export const Introduction = () => {

  
  return <Box className={`row  ${IntroContainer}`} as="article" reset={false}>
    <Box className={`col-md-6 ${aboutInfo}`}>      
      <h2>About Me:</h2>
      <p className={intoPara}>
        A Full-Stack web developer and designer (sometimes) with 12 years
        commercial experience creating successful websites with engaging,
        meaningful user experiences.
      </p>
      <p className={intoPara}>
        As a full-stack developer, I am well-versed in .NET Core and
        NodeJS for back-end support. Also, works on Javascript and its
        frameworks such as Angular and React js. I am able to take ideas from conception to
        completion, handling the entire process from start to finish.
      </p>
      <p className={intoPara}>
        In addition to office projects, I am also developing repositories on github. 
        I created them for my-own learning and some of them are production-ready, now. Feel free to visit my <a href="https://github.com/onu-khatri">GitHub account <GitHubLogoIcon/></a>
      </p>
      <p className={intoPara}>
        Other than coding, I spend my free time drawing sketches or playing
        old-school video games. 🤓 I also love to read books and meditate!
      </p>
      <p>
        Whether you're a business owner looking to get started on a app or web development project with a freelance web developer, 
        a developer looking to collaborate on something cool, or just wanting to say hi, shoot me a message and let's work together.
      </p>
      <p>For more details on this part of my experience, see my CV.</p>
      
    </Box>
    <Box className="col-md-6">
      <h2 style={{marginLeft: "2vw"}}>
        My ToolKit <DesktopIcon height={25} width={25} style={{marginLeft: "16px", position: "absolute"}} />
      </h2>
      <ul className={toolKitList}>
        <li className={toolKitListItem}>
          <span>
            <img className={imagesStyle} src="./icons/dotnet-core.svg" />
          </span>
          <span className={toolTitle}>.Net Core</span>
        </li>
        <li className={toolKitListItem}>
          <span>
            <img className={imagesStyle} src="./icons/c-50.png" />
          </span>
          <span className={toolTitle}>C#</span>
        </li>
        <li className={toolKitListItem}>
          <span>
            <img className={imagesStyle} src="./icons/grpcio-icon.svg" />
          </span>
          <span className={toolTitle}>GRPC</span>
        </li>
        <li className={toolKitListItem}>
          <span>
            <img className={imagesStyle} src="./icons/nodejs-64.png" />
          </span>
          <span className={toolTitle}>NodeJS</span>
        </li>
        <li className={toolKitListItem}>
          <span>
            <img className={imagesStyle} src="./icons/nest-js-icon.svg" />
          </span>
          <span className={toolTitle}>Nest.JS</span>
        </li>
        <li className={toolKitListItem}>
          <span>
            <img
              className={imagesStyle}
              src="./icons/amazon-web-services-64.png"
            />
          </span>
          <span className={toolTitle}>AWS</span>
        </li>
        <li className={toolKitListItem}>
          <span>
            <img
              className={imagesStyle}
              src="./icons/docker-64.png"
            />
          </span>
          <span className={toolTitle}>Docker</span>
        </li>
        <li className={toolKitListItem}>
          <span>
            <img className={imagesStyle} src="./icons/sql-60.png" />
          </span>
          <span className={toolTitle}>SQL</span>
        </li> 
        <li className={toolKitListItem}>
          <span>
            <img className={imagesStyle} src="./icons/postgresql-50.png" />
          </span>
          <span className={toolTitle}>PostgreSql</span>
        </li>
        <li className={toolKitListItem}>
          <span>
            <img className={imagesStyle} src="./icons/mysql-48.png" />
          </span>
          <span className={toolTitle}>MySql</span>
        </li>
        <li className={toolKitListItem}>
          <span>
            <img className={imagesStyle} src="./icons/redis-50.png" />
          </span>
          <span className={toolTitle}>Redis</span>
        </li>
        <li className={toolKitListItem}>
          <span>
            <img className={imagesStyle} src="./icons/rabbitmq-trans.svg" />
          </span>
          <span className={toolTitle}>RabbitMQ</span>
        </li>
        <li className={toolKitListItem}>
          <span>
            <img className={imagesStyle} src="./icons/angular-50.png" />
          </span>
          <span className={toolTitle}>Angular</span>
        </li>
        <li className={toolKitListItem}>
          <span>
            <img className={imagesStyle} src="./icons/react-80.png" />
          </span>
          <span className={toolTitle}>React</span>
        </li>
        <li className={toolKitListItem}>
          <span>
            <img className={imagesStyle} src="./icons/javascript-64.png" />
          </span>
          <span className={toolTitle}>Javascript</span>
        </li>
        <li className={toolKitListItem}>
          <span>
            <img className={imagesStyle} src="./icons/typescript-50.png" />
          </span>
          <span className={toolTitle}>Typescript</span>
        </li>
        <li className={toolKitListItem}>
          <span>
            <img className={imagesStyle} src="./icons/sass-avatar-50.png" />
          </span>
          <span className={toolTitle}>Saas</span>
        </li>
        <li className={toolKitListItem}>
          <span>
            <img className={imagesStyle} src="./icons/css3-50.png" />
          </span>
          <span className={toolTitle}>CSS 3</span>
        </li>
        <li className={toolKitListItem}>
          <span>
            <img className={imagesStyle} src="./icons/html5-64.png" />
          </span>
          <span className={toolTitle}>HTML 5</span>
        </li>
        <li className={toolKitListItem}>
          <span>
            <img className={imagesStyle} src="./icons/github-50.png" />
          </span>
          <span className={toolTitle}>GitHub</span>
        </li>
        <li className={toolKitListItem}>
          <span>
            <img className={imagesStyle} src="./icons/accessibility-80.png" />
          </span>
          <span className={toolTitle}>Accessibility</span>
        </li>
        <li className={toolKitListItem}>
          <span>
            <img className={imagesStyle} src="./icons/gdpr-50.png" />
          </span>
          <span className={toolTitle}>GDPR</span>
        </li>
      </ul>
    </Box>
  </Box>
};
