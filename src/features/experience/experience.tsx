import { CalendarIcon, FigmaLogoIcon } from "@radix-ui/react-icons";
import { Box } from "../../components/box/box";
import TimeLineContainer from "../../components/time-line/time-line-container/time-line-container";
import TimeLineItem from "../../components/time-line/time-line-item/time-line-item";
import {
  avatarSize,
  companyHolder,
  datePlaceHolder,
  experienceRoot,
  headerTitle,
  paraHolder,
  timerHolder,
} from "./experience.css";
import { ExperienceTimer } from "../../components/experience-timer/experience-timer";

export default function Experience() {
  return (
    <Box className={`row ${experienceRoot}`} as="article" name="experience">
      <h2 style={{ marginBottom: "2em" }}>Experience</h2>
      <div className={timerHolder}>
        <ExperienceTimer />
      </div>
      <TimeLineContainer>
        <TimeLineContainer.item>
          <TimeLineItem.icon
            alt="CareerBuilder"
            src="icons/cb.png"
            avatarSize={avatarSize}
          ></TimeLineItem.icon>
          <Box>
            <h3 className={headerTitle}>Sr. Full-stack Software Engineer</h3>
            <div className={datePlaceHolder}>
              <CalendarIcon /> June 2020 - Current
            </div>
            <h4 className={companyHolder}>
              <FigmaLogoIcon /> CareerBuilder.com, Noida
            </h4>
            <p className={paraHolder}>
              CareerBuilder is an employment website that operates in the United
              States and Europe. Here, We use data-driven technology and
              personalized tools to help match employers with great candidates
              based on individual wants, needs, and unique skill sets.
            </p>
            <p>
              I'm working on the Talent Discovery Platform of CareerBuilder.com
              that provide solutions and services to employers and recruiters. 
              Recruiter can perform semantic search for the candidates, send the messages, jobs from the system and client can also add candidates to their ATS.
            </p>
            <p>
              We recently developed two new solutions for clients: Pay Per
              Resume and Pay For Performance.
              <ul>
                <li>
                  "Pay Per Resume" is an innovative approach to recruitment that
                  allows clients and their entire recruitment team to pay only for
                  the resumes that they view instead of having to commit to the
                  monthly cost of a license.
                </li>
                <li>
                  "Pay For Performance" model offers a more flexible way to
                  advertise all client jobs, and is designed to align what
                  client pay with what we deliver. When client qualify, client
                  only spend when candidates apply to their positions.
                </li>
              </ul>
            </p>
          </Box>
        </TimeLineContainer.item>
        <TimeLineContainer.item>
          <TimeLineItem.icon
            alt="Admiral"
            src="icons/admiral.png"
            avatarSize={avatarSize}
          ></TimeLineItem.icon>
          <Box>
            <h3 className={headerTitle}>Senior Web Developer</h3>
            <div className={datePlaceHolder}>
              <CalendarIcon /> Nov 2015 - Jun 2020
            </div>
            <h4 className={companyHolder}>
              <FigmaLogoIcon /> Admiral Group Plc, InspopIndia.com Pvt. Ltd,
              Gurugram
            </h4>
            <p className={paraHolder}>
              InspopIndia.com was a branch of Admiral Group Plc in India to
              provide the technical support for the Insurance based products
              like Rastreator. Rastreator.com is Spain’s most popular online
              insurance broker and price comparison platform. Rastreator.com
              Provide different comparison products for Car, Telephony, Travel,
              Energy and Finance.
            </p>
            <p>
              I worked as a Senior Web Developer for 7 projects of company. I
              provided support for Rastreator.com and upgraded their projects
              from old technologies to .net core and Angular like Car-Insurance
              and Telephony. I also developed new projects from scratch Like:
              <ul>
                <li>
                  Wakeel.com: It is an insurance comparison project which
                  provide services for Gulf and MENA countries.
                </li>
                <li>
                  MultiProduct for Rastreator.com: Affiliate selling of car
                  products on Amazon.com
                </li>
                <li>
                  Viajes for Rastreator.com: Affiliate selling of bookings for
                  Booking.com and Flight tickets for Kayak.com
                </li>
                <li>
                  adopta-un-perro.rastreator.com: A public welfare project for
                  spain, where people can adopt the dogs.
                </li>
              </ul>
            </p>
          </Box>
        </TimeLineContainer.item>
        <TimeLineContainer.item>
          <TimeLineItem.icon
            alt="E2E"
            src="icons/E2E.png"
            avatarSize={avatarSize}
          ></TimeLineItem.icon>
          <Box>
            <h3 className={headerTitle}>Junior Web Developer</h3>
            <div className={datePlaceHolder}>
              <CalendarIcon /> Nov 2013 - Nov 2015
            </div>
            <h4 className={companyHolder}>
              <FigmaLogoIcon /> E2E Research Pvt. Ltd, New Delhi
            </h4>
            <p className={paraHolder}>
              Worked as a Junior Software developer on .Net platform and handled
              the top three revenue generating projects of organization. I
              Created survey based web-projects for Nickelodeon and The Guardian
              which show the comparison and statics between different brand of
              UK, US and Aus. Also developed a cycle-training project for UK
              users that helped organization to register their users online as
              well as track the learning performance.
            </p>
            <p className={paraHolder}>
              In projects, we also provided D3.js based charts. User were able
              to download reports in pptx and pdf formats which we created using
              OpenXML 2.0. I also wrote a library based on OpenXML that could
              generate Powerpoint Presentations files with dynamic data
            </p>
            <p className={paraHolder}>
              In addition to client projects, I also developed an internal MIS
              project that worked as HR panel, Leave Management System, Task
              Management System as well as Project Management System
            </p>
          </Box>
        </TimeLineContainer.item>

        <TimeLineContainer.item>
          <TimeLineItem.icon
            alt="FreeLancer"
            avatarSize={avatarSize}
            src="icons/freelancer.png"
          ></TimeLineItem.icon>
          <Box>
            <h3 className={headerTitle}>WinForm and ASP.Net Developer</h3>
            <div className={datePlaceHolder}>
              <CalendarIcon /> Dec 2012 - Nov 2013
            </div>
            <h4 className={companyHolder}>
              <FigmaLogoIcon /> Work as a Freelancer
            </h4>
            <p className={paraHolder}>
              I Worked as a freelancer on .NET platform with more than two
              clients, mainly with <i>GIIT Pvt. Ltd</i>. It was great experience
              to complete A-Z of development by understanding the client
              requirements and goals. Successfully deliver the School Management
              tools, Leave management tool, An online exam portal for IT
              coaching Institute and also upgrade 2 projects from web-form to
              MVC pattern.
            </p>
            <p className={paraHolder}>
              I also developed a store-management web-portal for{" "}
              <i>GIIT Pvt. Ltd.</i> to manage the products, orders and sale of
              the data warehouse that can be accessed by certain employees of
              specific roles. This portal provides access to add and alter the
              products, generate the reports for sale and orders. It also raises
              alarms for admin in certain conditions. I also updated this
              Asp.net web-form project to MVC project.{" "}
            </p>
          </Box>
        </TimeLineContainer.item>

        <TimeLineContainer.item>
          <TimeLineItem.icon
            alt="Aptara"
            src="icons/aptara.jpg"
            avatarSize={avatarSize}
          ></TimeLineItem.icon>
          <Box>
            <h3 className={headerTitle}>XML & VB Programmer</h3>
            <div className={datePlaceHolder}>
              <CalendarIcon /> Nov 2011 - Nov 2012
            </div>
            <h4 className={companyHolder}>
              <FigmaLogoIcon /> Aptara Pvt. Ltd., New Delhi
            </h4>
            <p className={paraHolder}>
              Aptara offers end-to-end creative services, from ideation and
              visualization to production for print and digital delivery. I
              worked to build, style and maintain the quality of End-to-end
              digital content transformation.
            </p>
            <p className={paraHolder}>
              I composed XML workflows, content, layout to transform the data
              into interactive PDF. Also work on plugin development to automate
              the digital transformation of data from XML to pdf, using VB.Net.
              It was fun to transform the xml content to digital using XSLT and
              then finally create a publishable PDF.{" "}
            </p>
          </Box>
        </TimeLineContainer.item>
      </TimeLineContainer>
    </Box>
  );
}
