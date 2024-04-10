//import React from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import {
  Cross2Icon,
  HomeIcon,
  PersonIcon,
  FileIcon,
  ReaderIcon,
  ArchiveIcon,
  RocketIcon,
 // DoubleArrowDownIcon,
} from "@radix-ui/react-icons";
import RoundAvatar from "../avatar/avatar";
import SocialLinks from "../social-links/social-links";
import {
  avatarSize,
  collapsibleContent,
  collapsibleRoot,
  iconButton,
  iconImages,
  linkData,
  linkText,
  menuItem,
  menuList,
  navIconImages,
  separatorRoot,
  socialMargins,
  //triggerAvatarSize,
  userName,
} from "./side-menu.css";
import * as Separator from "@radix-ui/react-separator";

const Link = ({ ...props }) => (
  <NavigationMenu.Link asChild>
    <>
      <a href={props.href}>
        <div className={linkData}>
          <div>{props.children}</div>
          <div className={linkText}>
            <span>{props.name}</span>
          </div>
        </div>
      </a>
    </>
  </NavigationMenu.Link>
);

/*const AvatarOpenSymbol = () => (
  <>
    <RoundAvatar avatarSize={triggerAvatarSize} /> <DoubleArrowDownIcon />
  </>
);*/

export interface SideMenuProps {
  open: boolean,
  setOpen: (value: boolean) => void
}

const CollapsibleSideMenu = (props: SideMenuProps) => {
  return (
    <Collapsible.Root
      className={collapsibleRoot}
      open={props.open}
      onOpenChange={props.setOpen}      
    >
      <Collapsible.Content className={collapsibleContent} forceMount>
        <RoundAvatar avatarSize={avatarSize} />
        <div className={userName}>
          <span>Anup Singh</span>
        </div>
        <SocialLinks marginClass={socialMargins} iconImages={iconImages} />
        <Separator.Root className={separatorRoot} />
        <div>
          <NavigationMenu.Root orientation="vertical">
            <NavigationMenu.List className={menuList}>
              <NavigationMenu.Item className={menuItem}>
                <Link href="/" name="Home">
                  <HomeIcon className={navIconImages} />
                </Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item className={menuItem}>
                <Link href="/" name="About">
                  <PersonIcon className={navIconImages} />
                </Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item className={menuItem}>
                <Link href="/" name="Experience">
                  <FileIcon className={navIconImages} />
                </Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item className={menuItem}>
                <Link href="/" name="Portfolio">
                  <ReaderIcon className={navIconImages} />
                </Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item className={menuItem}>
                <Link href="/" name="Projects">
                  <ArchiveIcon className={navIconImages} />
                </Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item className={menuItem}>
                <Link href="/" name="Self Initiatives">
                  <RocketIcon className={navIconImages} />
                </Link>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Root>
        </div>
      </Collapsible.Content>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Collapsible.Trigger asChild>
          <button className={iconButton}>
            {props.open ? <Cross2Icon /> : ''}
          </button>
        </Collapsible.Trigger>
      </div>
    </Collapsible.Root>
  );
};

export default CollapsibleSideMenu;
