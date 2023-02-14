import React, { ReactNode } from "react";
import FeaturedBox from "./FeaturedBox";
import Header from "./Header";

type Props = {
  children?: ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => (
  <div>
    <Header />

    {children}
  </div>
);
