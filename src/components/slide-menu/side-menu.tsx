//import React from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
  Cross2Icon,
  HomeIcon,
  PersonIcon,
  FileIcon,
  ReaderIcon,
  ArchiveIcon,
  RocketIcon,
  HamburgerMenuIcon
 // DoubleArrowDownIcon,
} from "@radix-ui/react-icons";
import AvatarImage from "../avatar/avatar";
import SocialLinks from "../social-links/social-links";
import {
  avatarSize,
  collapsibleContent,
  collapsibleRoot,
  DropdownMenuArrow,
  iconButton,
  iconImages,
  linkData,
  linkText,
  mediaSeparatorRoot,
  menuContainer,
  menuItem,
  menuList,
  navIconImages,
  separatorRoot,
  socialMargins,
  //triggerAvatarSize,
  userName,
} from "./side-menu.css";
import * as Separator from "@radix-ui/react-separator";
import React from "react";

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


const CollapsibleSideMenu = () => {
  const [open, setOpen] = React.useState(true);
  
  return (
    <div className={menuContainer}>
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={iconButton} aria-label="Menu">
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal >
      <DropdownMenu.Content className={`${collapsibleRoot} ${collapsibleContent}`} sideOffset={5} side="bottom">
      <AvatarImage avatarSize={avatarSize} src="profile.jpg" alt="Anup Singh"/>
        <div className={userName}>
          <span>Anup Singh</span>
        </div>
        <SocialLinks separatorClass = {mediaSeparatorRoot} iconImages={iconImages} />
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

        <DropdownMenu.Arrow className={DropdownMenuArrow} />
      </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
    </div>
  )
  return (
    <Collapsible.Root
      className={collapsibleRoot}
      open={open}
      onOpenChange={setOpen}
    >
      <Collapsible.Content className={collapsibleContent} forceMount>
        <AvatarImage avatarSize={avatarSize} src="profile.jpg" alt="Anup Singh"/>
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
          display: "block",
          position: "absolute",
          width: "45px", height: "45px", top: "1px"
        }}
      >
        <Collapsible.Trigger asChild>
          <button className={iconButton}>
            {open ? <Cross2Icon /> : <HamburgerMenuIcon />}
          </button>
        </Collapsible.Trigger>
      </div>
    </Collapsible.Root>
  );
};

export default CollapsibleSideMenu;
