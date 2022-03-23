import * as React from "react";
import colors from "/public/static/colors";
import Example, { exampleProps } from "../components/Example";
import CircleGraph from "../components/CircleGraph";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  background: `linear-gradient(to bottom, ${colors.dark}, ${colors.red})`,
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
};

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const docLink = {
  text: "TypeScript Documentation",
  url: "https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/",
  color: "#8954A8",
};

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

const examples = (data: string[]): JSX.Element[] => {
  return [
    <Example imageUrl="/" title="title" contents={["content1"]}></Example>,
  ];
};

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <div>
        <span>당신의 제품도</span>
        <span>Artificially Intelligent</span>
        <span>할 수 있습니다.</span>
        <span>Modern Application의 완성형을 경험하십시오</span>
      </div>
      <div>
        <span>시장을 선도하는 기술</span>
        <CircleGraph rate={42}></CircleGraph>
      </div>
      <div>{examples}</div>
      <div>
        <img></img>
        <img></img>
        <img></img>
      </div>
      <div>
        <span>
          Name
          <input></input>
        </span>
        <span>
          Name
          <input></input>
        </span>
      </div>
    </main>
  );
};

export default IndexPage;
