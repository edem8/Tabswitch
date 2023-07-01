import React from "react";
import TipCards from "../components/TipCards";
import { AiFillAlert } from "react-icons/ai";
import { AiFillFormatPainter } from "react-icons/ai";
import { AiFillEnvironment } from "react-icons/ai";

function Tips() {
  return (
    <div className="care">
      <TipCards
        icon={<AiFillAlert size={25} />}
        text1={"The first Burn"}
        text2={"Burn for 4 hours"}
        text3={"for a clean and"}
        text4={"even burn"}
      />

      <TipCards
        icon={<AiFillFormatPainter size={25} />}
        text1={"Trim the Wick"}
        text2={"Trim For about 4mm"}
        text3={" to 6mm before "}
        text4={" each burn"}
      />

      <TipCards
        icon={<AiFillEnvironment size={25} />}
        text1={"Trim the Wick"}
        text2={"To about 4 to"}
        text3={"6mm before each"}
        text4={"burn"}
      />
    </div>
  );
}

export default Tips;
