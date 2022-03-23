import React from "react";

export type exampleProps = {
  imageUrl: string;
  title: string;
  contents: string[];
};

const Example = (props: exampleProps): JSX.Element => {
  return (
    <div>
      <img src={props.imageUrl} />
      <span>{props.title}</span>
      {props.contents.map((content) => (
        <span>{content}</span>
      ))}
    </div>
  );
};

export default Example;
