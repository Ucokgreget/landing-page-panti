import Image from "next/image";
import type { SVGAttributes } from "react";
import logo from "../../../public/logo.png"

const Logo = (props: SVGAttributes<SVGElement>) => {
  return (
    <div className="flex items-center gap-2.5">
        <Image src={logo} alt="Logo" width={140} height={40} loading="eager" priority style={{ width: 'auto', height: 'auto' }} />
      </div>
  );
};

export default Logo;
