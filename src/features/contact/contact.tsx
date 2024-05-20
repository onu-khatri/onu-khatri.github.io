import {
  EnvelopeClosedIcon,
  LinkedInLogoIcon,
  MobileIcon,
} from "@radix-ui/react-icons";
import { Box } from "../../components/box/box";
import { whiteA } from "@radix-ui/colors";

export const Contact = () => (
  <Box as="article" className="row" style={{ textAlign: "center" }}>
    <div style={{ margin: "50px 0 50px 0" }}>
      <h2 style={{ margin: 0, padding: 0 }}>Reach Out To Me</h2>
      <p
        style={{
          color: whiteA.whiteA9,
          fontSize: "1em",
          padding: 0,
          margin: "0 0 20px 0",
        }}
      >
        DISCUSS A PROJECT OR JUST WANT TO SAY HI?
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          rowGap: "24px",
          columnGap: "64px",
          justifyContent: "center",
          margin: "50px 0 0 0 ",
        }}
      >
        <div
          style={{
            color: whiteA.whiteA9,
            fontSize: "1.2em",
            padding: 0,
            margin: "10px 10px 0 0",
          }}
        >
          <span>Message me: </span>
          <a
            href="https://www.linkedin.com/in/onu-khatri"
            target="_blank"
            style={{
              fontWeight: "600",
              position: "relative",
              textDecoration: "none",
              paddingLeft: "24px",
              fontSize: "0.9em",
            }}
          >
            &nbsp;&nbsp;
            <LinkedInLogoIcon
              style={{
                width: "24px",
                height: "24px",
                position: "absolute",
                left: "10px",
                bottom: "-1px"
              }}
            />
            &nbsp;&nbsp;LinkedIn
          </a>
        </div>
        <div
          style={{
            color: whiteA.whiteA9,
            fontSize: "1.2em",
            padding: 0,
            margin: "10px 10px 0 0",
          }}
        >
          <span>Send Email: </span>
          <a
            href="mailto:onu.khatri@gmail.com"
            target="_blank"
            style={{
              fontWeight: "600",
              position: "relative",
              textDecoration: "none",
              paddingLeft: "26px",
              fontSize: "0.9em"
            }}
          >
            &nbsp;&nbsp;
            <EnvelopeClosedIcon
              style={{
                width: "24px",
                height: "24px",
                position: "absolute",
                left: "10px",
                bottom: "-1px"
              }}
            />
            &nbsp;&nbsp;Onu.Khatri@gmail.com
          </a>
        </div>

        <div
          style={{
            color: whiteA.whiteA9,
            fontSize: "1.2em",
            padding: 0,
            margin: "10px 10px 0 0",
          }}
        >
          <span>Call Me: </span>
          <a
            href="tel:+918570000751"
            target="_blank"
            style={{
              fontWeight: "600",
              position: "relative",
              textDecoration: "none",
              paddingLeft: "18px",
              fontSize: "0.9em"
            }}
          >
            &nbsp;&nbsp;
            <MobileIcon
              style={{
                width: "24px",
                height: "24px",
                position: "absolute",
                left: "10px",
                bottom: "-1px"
              }}
            />
            &nbsp;&nbsp;+91-8570000751
          </a>
        </div>
      </div>
    </div>
    <div
      style={{
        margin: "75px 0 50px 0",
        color: "White",
        textAlign: "center",
        fontSize: "1.3em",
      }}
    >
      <span>Made with ❤️ by Anup Singh</span>
    </div>
  </Box>
);
