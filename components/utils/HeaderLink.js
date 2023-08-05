"use client";
import { useEffect,useState } from "react";
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


  return (
    <Link className={isActive ? "active" : ""} href={href}>
      {children}
    </Link>
  );
};

export default HeaderLink;
