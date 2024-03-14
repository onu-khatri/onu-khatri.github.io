import React from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import * as Separator from "@radix-ui/react-separator";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import {
  RowSpacingIcon,
  Cross2Icon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";
import RoundAvatar from "../../components/avatar/avatar";

const Link = ({ ...props }) => (
  <NavigationMenu.Link asChild>
    <a href={props.href}>{props.name}</a>
  </NavigationMenu.Link>
);

const CollapsibleSideMenu = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible.Root
      className="CollapsibleRoot"
      open={open}
      onOpenChange={setOpen}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Collapsible.Trigger asChild>
          <button className="IconButton">
            {open ? <Cross2Icon /> : <RowSpacingIcon />}
          </button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content>
        <div>
          <RoundAvatar />
        </div>
        <div>
          
        </div>
        <div>
          <NavigationMenu.Root orientation="vertical">
            <NavigationMenu.List>
              <NavigationMenu.Item>
                <Link href="/" name="Home" />
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <Link href="/" name="About" />
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <Link href="/" name="Resume" />
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <Link href="/" name="Portfolio" />
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <Link href="/" name="Projects" />
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <Link href="/" name="Work" />
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Root>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};

export default CollapsibleSideMenu;
