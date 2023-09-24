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
  return (
    <div>
      <h1>{name}</h1>
      {details.map((data) => {
        if (path === "/about/1") {
          if (data.id === 1) {
            <h1>
              {data.name}, {data.role}
            </h1>;
          }
        } else if (path === "/about/2") {
          if (data.id === 2) {
            <h1>
              {data.name}, {data.role}
            </h1>;
          }
        } else if (path === "/about/3") {
          if (data.id === 3) {
            <h1>
              {data.name}, {data.role}
            </h1>;
          }
        } else {
          <h2>{"Developer doesn't exist"}</h2>;
        }
      })}
    </div>
  );
};
export default Developer;
