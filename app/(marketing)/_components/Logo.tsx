import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src="/logo.svg"
        height={40}
        width={40}
        alt="Logo"
        className="dark:hidden"
      />
      <Image
        src="/logo-dark.svg"
        height={40}
        width={40}
        alt="Logo"
        className="hidden dark:block"
      />
      <p className={cn("font-semibold", poppins.className)}>Notion</p>
    </div>
  );
};
