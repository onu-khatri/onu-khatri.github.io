import * as Avatar from "@radix-ui/react-avatar";
import { avatarFallback, avatarImage, avatarRoot } from "./avatar.css";

const RoundAvatar = () => (
<Avatar.Root className={avatarRoot}>
            <Avatar.Image
              className={avatarImage}
              src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
              alt="Anup Singh"
            />
            <Avatar.Fallback className={avatarFallback} delayMs={600}>
              Anup Singh
            </Avatar.Fallback>
          </Avatar.Root>
);

export default RoundAvatar;