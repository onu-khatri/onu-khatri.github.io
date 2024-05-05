import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import * as Separator from "@radix-ui/react-separator";
import { separatorRoot } from "./social-link.css";

const SocialLinks = (props: {[x: string]: string}) => (
  <div className={props.marginClass} >
    <a href="https://www.linkedin.com/in/onu-khatri" target="_blank">
      <LinkedInLogoIcon className={props.iconImages}  />
    </a>
    <Separator.Root
      className={`${separatorRoot} ${props.separatorClass}`}
      decorative
      orientation="vertical"
      style={{ margin: "0 15px" }}
    />
    <a href="https://github.com/onu-khatri" target="_blank">
      <GitHubLogoIcon className={props.iconImages}/>
    </a>
    <Separator.Root
      className={`${separatorRoot} ${props.separatorClass}`}
      decorative
      orientation="vertical"
      style={{ margin: "0 15px" }}
    />
    <a href="https://www.instagram.com/2.5.akshar?igsh=MXhkOTA2cjR3b3ZjNQ==" target="_blank">
      <InstagramLogoIcon className={props.iconImages}/>
    </a>
    <Separator.Root
      className={`${separatorRoot} ${props.separatorClass}`}
      decorative
      orientation="vertical"
      style={{ margin: "0 15px" }}
    />
    <a href="mailto:onu.khatri@gmail.com">
      <EnvelopeClosedIcon className={props.iconImages}/>
    </a>
  </div>
);

export default SocialLinks;