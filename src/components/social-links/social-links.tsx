import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import * as Separator from "@radix-ui/react-separator";
import { separatorRoot } from "./social-link.css";

const SocialLinks = (props: {[x: string]: string}) => (
  <div className={props.marginClass} >
    <a href="#">
      <LinkedInLogoIcon className={props.iconImages}  />
    </a>
    <Separator.Root
      className={`${separatorRoot} ${props.separatorClass}`}
      decorative
      orientation="vertical"
      style={{ margin: "0 15px" }}
    />
    <a href="#">
      <GitHubLogoIcon className={props.iconImages}/>
    </a>
    <Separator.Root
      className={`${separatorRoot} ${props.separatorClass}`}
      decorative
      orientation="vertical"
      style={{ margin: "0 15px" }}
    />
    <a href="#">
      <InstagramLogoIcon className={props.iconImages}/>
    </a>
  </div>
);

export default SocialLinks;