"use client";

import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
  className?: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const TransitionLink = ({
  children,
  href,
  className,
  ...props
}: TransitionLinkProps) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    //run animation
    const body = document.querySelector("body");
    body?.classList.add("page-transition");
    //sleep for some time
    await sleep(300);

    router.push(href);
    await sleep(500);
    body?.classList.remove("page-transition");
  };

  return (
    <Link
      onClick={(e) => handleTransition(e)}
      className={className}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
};

export default TransitionLink;
