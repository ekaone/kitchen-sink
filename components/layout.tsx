import React, { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

function Layout({ children }: PropsType) {
  return <div>{children}</div>;
}

export default Layout;
