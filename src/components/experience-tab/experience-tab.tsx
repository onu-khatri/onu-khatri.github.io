import * as Tabs from '@radix-ui/react-tabs';
import { expDuration, tabsContent, tabsList, tabsRoot, tabsTrigger } from './experience-tab.css';

const ExperienceTabs = () => (
  <Tabs.Root className={tabsRoot} defaultValue="tab1" orientation="vertical">
    <Tabs.List className={tabsList} aria-label="Manage your account">
      <Tabs.Trigger className={tabsTrigger} value="tab1">
      <div>Careerbuilder.com</div>
        <div className={expDuration}>2020 - Continue</div>
      </Tabs.Trigger>
      <Tabs.Trigger className={tabsTrigger} value="tab2">
      <div>Admiral Group plc</div>
        <div className={expDuration}>2016 - 2020</div>
      </Tabs.Trigger>
      <Tabs.Trigger className={tabsTrigger} value="tab3">      
      <div>E2E Research Services</div>
        <div className={expDuration}>2013 - 2016</div>
      </Tabs.Trigger>
      <Tabs.Trigger className={tabsTrigger} value="tab4">
        <div>Work As FreeLancer</div>
        <div className={expDuration}>2012 - 2013</div>
      </Tabs.Trigger>
      <Tabs.Trigger className={tabsTrigger} value="tab5">
        <div>Aptara</div>
        <div className={expDuration}>2011 - 2012</div>
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content className={tabsContent} value="tab1">
      <p className="Text">Make changes to your account here. Click save when you're done.</p>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="name">
          Name
        </label>
        <input className="Input" id="name" defaultValue="Pedro Duarte" />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="username">
          Username
        </label>
        <input className="Input" id="username" defaultValue="@peduarte" />
      </fieldset>
      <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
        <button className="Button green">Save changes</button>
      </div>
    </Tabs.Content>
    <Tabs.Content className={tabsContent} value="tab2">
      <p className="Text">Change your password here. After saving, you'll be logged out.</p>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="currentPassword">
          Current password
        </label>
        <input className="Input" id="currentPassword" type="password" />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="newPassword">
          New password
        </label>
        <input className="Input" id="newPassword" type="password" />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="confirmPassword">
          Confirm password
        </label>
        <input className="Input" id="confirmPassword" type="password" />
      </fieldset>
      <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
        <button className="Button green">Change password</button>
      </div>
    </Tabs.Content>
    <Tabs.Content className={tabsContent} value="tab3">
      <p>Junior Web Developer</p>
      <p>Worked as a Junior Software developer on .Net platform and handled the top three revenue generating projects of organization. I started my work with Web-Form ASP.net and jquery then also learn the MVC and AngularJs</p>
      <p>I Created survey based web-projects for Nickelodeon and The Guardian which show the comparison and statics between different brand of UK, US and Aus. Also develop a cycle-training project for UK users that helped organization to register their users online as well as track the learning performance.</p>
      <p> In projects, we also provided D3.js based charts. User were able to download reports in pptx and pdf formats which we created using OpenXML 2.0. I also wrote a library based on OpenXML that could generate Powerpoint Presentations files with dynamic data</p>
      <p>In addition to client project, I also developed a internal MIS project that worked as HR panel, Leave Management System, Task Management System as well as Project Management System
</p>
    </Tabs.Content>
    <Tabs.Content className={tabsContent} value="tab4">
      <p>WinForm and ASP.Net Developer</p>
      <p>
      I Worked as a freelancer on .NET platform with more than two clients, mainly with <i>GIIT Pvt. Ltd</i>. It was great experience to complete A-Z of development by understanding the client requirements and goals. 
      </p>
      <p>
      Successfully deliver the School Management tools, Leave management tool, An online exam portal for IT coaching Institute and also upgrade 2 projects from web-form to MVC pattern.
      </p>
      <p>I also developed a store-management web-portal for <i>GIIT Pvt. Ltd.</i> to manage the products, orders and sale of the data warehouse that can be accessed by certain employees of specific roles. This portal provides access to add and alter the products, generate the reports for sale and orders. It also raises alarms for admin in certain conditions. I also updated this Asp.net web-form project to MVC project. </p>
    </Tabs.Content>
    <Tabs.Content className={tabsContent} value="tab5">
      <p>XML & VB Programmer</p>
      <p>
      Aptara offers end-to-end creative services, from ideation and visualization to production for print and digital delivery. 
      I worked to build, style and maintain the quality of End-to-end digital content transformation.
      </p>
      <p>
        I composed XML workflows, content, layout to transform the data into interactive PDF.
        Also work on plugin development to automate the digital transformation of data from XML to pdf, using VB.Net.
      </p>
      <p>It was fun to transform the xml content to digital using XSLT and then finally create a publishable PDF. </p>
    </Tabs.Content>
  </Tabs.Root>
);

export default ExperienceTabs;