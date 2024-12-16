import { FC, memo } from "react";

import Socials from "../Socials";

const currentYear = new Date().getFullYear();

const Footer: FC = memo(() => (
  <div className="relative bg-neutral-900 px-4 pb-6 pt-12 sm:px-8 sm:pb-8 sm:pt-14">
    <div className="flex flex-col items-center gap-y-6">
      <div className="flex gap-x-4 text-neutral-500">
        <Socials />
      </div>
      <span style={{ fontSize: "20px" }} className="text-xs text-neutral-300">
        ∞ JamesDeeMedia | Est. 2020
      </span>
      <span style={{ fontSize: "12px" }} className="text-xs text-neutral-200">
        © Copyright {currentYear} James D'Ilario
      </span>
    </div>
  </div>
));

Footer.displayName = "Footer";
export default Footer;
