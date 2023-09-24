"use client";

import Link from "next/link";
import React from "react";

// /about

const AboutUsPage = () => {
  return (
    <React.Fragment>
      <h1>About-Us Page</h1>
      <ul>
        <li><Link href='/about/1'>Yash</Link></li>
        <li><Link href='/about/2'>Vaibhav</Link></li>
        <li><Link href='/about/3'>Suresh</Link></li>
      </ul>
    </React.Fragment>
  );
};
export default AboutUsPage;
