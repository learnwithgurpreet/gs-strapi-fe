import React, { useState } from "react";

import Head from "next/head";
import Navbar from "../Navbar";
import Dropdown from "../Dropdown";

const data = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "/menu",
    label: "Menu",
  },
  {
    link: "/about",
    label: "About",
  },
  {
    link: "/contact",
    label: "Contact",
  },
];

const Layout = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Eggcellent - {title || `A fine dining restaurant`}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar
        data={data}
        onClickHandler={() => {
          window.scrollTo(0, 0);
          setIsOpen(!isOpen);
        }}
        isOpen={isOpen}
      />
      <Dropdown data={data} isOpen={isOpen} />
      {children}
    </>
  );
};

export default Layout;
