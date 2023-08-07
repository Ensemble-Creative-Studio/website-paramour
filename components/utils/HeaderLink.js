"use client";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

const HeaderLink = ({ href, children }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const url = `${pathname}${searchParams}`;
    setIsActive(url === href);
  }, [pathname, searchParams, href]);

  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    
    // Now push the new route
    window.location.href = href;
  };

  return (
    <Link className={isActive ? "active" : ""} href={href}>
      {children}
    </Link>
  );
};

export default HeaderLink;
