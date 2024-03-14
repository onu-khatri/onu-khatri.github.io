import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import * as Separator from "@radix-ui/react-separator";

const SocialLinks = () => (
  <div>
    <a href="#">
      <LinkedInLogoIcon />
    </a>
    <Separator.Root
      className="SeparatorRoot"
      decorative
      orientation="vertical"
      style={{ margin: "0 15px" }}
    />
    <a href="#">
      <GitHubLogoIcon />
    </a>
    <Separator.Root
      className="SeparatorRoot"
      decorative
      orientation="vertical"
      style={{ margin: "0 15px" }}
    />
    <a href="#">
      <InstagramLogoIcon />
    </a>
  </div>
);

export default SocialLinks;