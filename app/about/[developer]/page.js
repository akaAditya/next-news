"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

// /pages/about/developer

const Developer = () => {
  const path = usePathname();
  const params = useSearchParams();
  const name = "Aditya";
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];
  const developer = details.map((data) => {
    if (path === "/about/1") {
      if (data.id === 1) {
        return `${data.name} - ${data.role}`
      }
    } else if (path === "/about/2") {
      if (data.id === 2) {
        return `${data.name} - ${data.role}`
      }
    } else if (path === "/about/3") {
      if (data.id === 3) {
        return `${data.name} - ${data.role}`
      }
    } else{
      return "Developer doesn't exist";
    }
  })
  return (
    <div>
      <h1>{developer}</h1>
    </div>
  );
};
export default Developer;
