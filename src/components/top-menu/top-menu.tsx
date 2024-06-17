//import React from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import {
  HomeIcon,
  PersonIcon,
  FileIcon,
  ArchiveIcon,
  RocketIcon,
  //DoubleArrowDownIcon,
} from "@radix-ui/react-icons";
import AvatarImage from "../avatar/avatar";
import SocialLinks from "../social-links/social-links";
import {
  activeLink,
  avatarButton,
  avatarContainer,
  avatarSize,
  collapsibleContent,
  collapsibleRoot,
  iconImages,
  linkData,
  linkText,
  menuContent,
  menuItem,
  menuList,
  navIconImages,
  navigationLinks,
  pageTopScrollBar,
  separatorRoot,
  //separatorRoot,
  socialMargins,
  stickyMenuContainer,
  userInfoContent,
  //triggerAvatarSize,
  userName,
} from "./top-menu.css";
import { motion, useScroll, useSpring } from "framer-motion";
import { Link } from "react-scroll";

const LinkItem = ({ ...props }) => (
  <NavigationMenu.Link asChild>
    <Link
    className={linkData}
    activeClass={activeLink}
    to={props.to}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    >
      <div>{props.children}</div>
          <div className={linkText}>
            <span>{props.name}</span>
          </div>
    </Link>
  </NavigationMenu.Link>
);

const CollapsibleTopMenu = () => {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  return (
    <div className={stickyMenuContainer}>      
      <button className={avatarButton}>
      <AvatarImage avatarSize={avatarSize} src="profile.jpg" alt="Anup Singh"/>
      </button>
      <Collapsible.Root
        className={collapsibleRoot}
        open={true}
      >
        <Collapsible.Content className={collapsibleContent}>
          <div className={menuContent}>
          <div className={avatarContainer}></div>
            <div className={userInfoContent}>
              <div className={userName}>
                <span>Anup Singh</span>
              </div>
              <SocialLinks
                marginClass={socialMargins}
                separatorClass = {separatorRoot}
                iconImages={iconImages}
              />
            </div>
            <div className={navigationLinks}>
              <NavigationMenu.Root orientation="horizontal">
                <NavigationMenu.List className={menuList}>
                  <NavigationMenu.Item className={menuItem}>
                    <LinkItem href="/" name="Home" to="home">
                      <HomeIcon className={navIconImages} />
                    </LinkItem>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item className={menuItem}>
                    <LinkItem href="/" name="About" to="about">
                      <PersonIcon className={navIconImages} />
                    </LinkItem>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item className={menuItem}>
                    <LinkItem href="/" name="Experience" to="experience">
                      <FileIcon className={navIconImages} />
                    </LinkItem>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item className={menuItem}>
                    <LinkItem href="/" name="Projects" to="projects">
                      <ArchiveIcon className={navIconImages} />
                    </LinkItem>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item className={menuItem}>
                    <LinkItem href="/" name="Self Initiatives" to="initiates">
                      <RocketIcon className={navIconImages} />
                    </LinkItem>
                  </NavigationMenu.Item>
                </NavigationMenu.List>
              </NavigationMenu.Root>
            </div>
          </div>
        </Collapsible.Content>
      </Collapsible.Root>
      <motion.div
        className={pageTopScrollBar}
        style={{ scaleX }}
      />
      </div>
  );
};

export default CollapsibleTopMenu;
