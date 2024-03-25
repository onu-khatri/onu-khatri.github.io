import * as Avatar from "@radix-ui/react-avatar";
import { avatarFallback, avatarImage, avatarRoot } from "./avatar.css";

const RoundAvatar = (props: {[x: string]: string}) => (
<Avatar.Root className={`${avatarRoot} ${props.avatarSize}`}>
            <Avatar.Image
              className={avatarImage}
              src="profile.jpg"
              alt="Anup Singh"
            />
            <Avatar.Fallback className={avatarFallback} delayMs={600}>
              Anup Singh
            </Avatar.Fallback>
          </Avatar.Root>
);

export default RoundAvatar;