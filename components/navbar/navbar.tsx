import HamburgerIcon from "@/assets/HamburgerIcon";
import type { FunctionComponent, ReactElement } from "react";
import { Button } from "../ui/button";

const Navbar: FunctionComponent = (): ReactElement => {
  return (
    <nav className="h-[54px] border-b">
      <div className="h-full flex justify-between">
        <div className="h-full p-4">Logo</div>
        <div className="h-full grid place-items-center p-4">
          <HamburgerIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
