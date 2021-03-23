import React from "react";
import Ztext from "react-ztext";

interface ChildrenProps {
  children: React.ReactNode;
}

/** pre-defined ZText props */

// interface ZTextProps {
//   depth: string;
//   direction: string;
//   event: string;
//   eventRotation: string;
//   eventDirection: string;
//   fade: boolean;
//   layers: number;
//   perspective: string;
//   children: React.ReactNode;
//   style?: React.CSSProperties;
// }

function Logo({ children }: ChildrenProps) {
  return (
    <Ztext
      depth=".7rem"
      direction="both"
      event="pointer"
      eventRotation="30deg"
      eventDirection="default"
      fade={false}
      layers={10}
      perspective="500px"
    >
      {children}
    </Ztext>
  );
}

export default Logo;
