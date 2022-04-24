import React, { useState } from "react";
import PenIcons from "../../../assets/icons/PenIcons";
import TrashIcon from "../../../assets/icons/TrashIcon";
import AppBtn from "../../../components/appbtn/AppBtn";
import AppDate from "../../../components/appdate/AppDate";
import AppInput from "../../../components/appinput/AppInput";
import AppTextArea from "../../../components/apptextarea/AppTextArea";
import ElementHeader from "../../../components/elementheader/ElementHeader";
import EmptyBlock from "../../../components/emptyblock/EmptyBlock";

function Declaration() {
  const [qdata, Setqdata] = useState({
    showinprint: true,
    qualifications: [],
  });
  return (
    <div className="container mx-auto">
      <ElementHeader title="Declaration" triggerchange={() => {}} />
      <div className="w-full flex justify-around">
        <div className="w-1/2 pt-6 ">
          <AppTextArea
            label="Declaration"
            loading={false}
            value=""
            triggerchange={() => {}}
          />
          <AppBtn label="Save" />
        </div>
      </div>
    </div>
  );
}

export default Declaration;
