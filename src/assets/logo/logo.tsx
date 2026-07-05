import Image from "next/image";
import type { SVGAttributes } from "react";
import logo from "../../../public/logo.png"

const Logo = (props: SVGAttributes<SVGElement>) => {
  return (
    <div className="flex items-center gap-2.5">
        <Image src={logo} alt="Logo" width={280} height={80} loading="eager" priority className="h-12 w-auto" />
      </div>
  );
};

export default Logo;
