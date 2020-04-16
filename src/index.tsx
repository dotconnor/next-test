import React from "react";

const Container: React.FC<{}> = ({ children }) => {
  return (
    <div>
      <div>Container!</div>
      <div>{children}</div>
    </div>
  );
};

export { Container };
