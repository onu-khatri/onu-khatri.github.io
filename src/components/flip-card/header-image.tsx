import { headerImageContainer } from "./header-image.css";

export const HeaderImage = (props: { src: string; imageClass?: string; className?: string; }) => (
  <div className={`${headerImageContainer} ${props.className}`}>
    <img className={`${props.imageClass}`} src={props.src} />
  </div>
);
