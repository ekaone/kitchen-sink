import React from "react";
import Image from "next/image";

function Cooking() {
  return (
    <div>
      <Image
        src="/assets/chef.svg"
        alt="Picture of chef"
        width={300}
        height={300}
      />
    </div>
  );
}

export default Cooking;
