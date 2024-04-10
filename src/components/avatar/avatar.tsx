import * as Avatar from "@radix-ui/react-avatar";
import { avatarFallback, avatarImage, avatarRoot } from "./avatar.css";

const RoundAvatar = (props: {[x: string]: string}) => (
<Avatar.Root className={`${avatarRoot} ${props.avatarSize}`}>
            <Avatar.Image
              className={avatarImage}
              src= {props.src}//"profile.jpg"
              alt= {props.alt} //"Anup Singh"
            />
            <Avatar.Fallback className={avatarFallback} delayMs={600}>
              {props.alt}
            </Avatar.Fallback>
          </Avatar.Root>
);

export default RoundAvatar;