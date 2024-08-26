import NavigationBar from "@/app/(navigation)/NavigationBar";
import { ReactNode } from "react";

export default function PageLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
}
