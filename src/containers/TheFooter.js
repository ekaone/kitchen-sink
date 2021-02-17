import React from "react";
import { CFooter } from "@coreui/react";

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a
          href="https://ekaprasetia.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Eka
        </a>
        <span className="ml-1">&copy; 2021 Eka.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a
          href="https://ekaprasetia.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Eka
        </a>
      </div>
    </CFooter>
  );
};

export default React.memo(TheFooter);
