import { usePathname, useRouter } from "next/navigation";
import React from "react";

export const RouterWrapper = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  const router = useRouter();

  const pathname = usePathname();

  return <>{children}</>;
};
