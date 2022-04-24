import React, { useState } from "react";
import PenIcons from "../../../assets/icons/PenIcons";
import TrashIcon from "../../../assets/icons/TrashIcon";
import AppBtn from "../../../components/appbtn/AppBtn";
import AppDate from "../../../components/appdate/AppDate";
import AppInput from "../../../components/appinput/AppInput";
import AppRange from "../../../components/apprange/AppRange";
import AppTextArea from "../../../components/apptextarea/AppTextArea";
import ElementHeader from "../../../components/elementheader/ElementHeader";
import EmptyBlock from "../../../components/emptyblock/EmptyBlock";

function Skills() {
  const [qdata, Setqdata] = useState({
    showinprint: true,
    qualifications: [],
  });
  return (
    <div className="container mx-auto">
      <ElementHeader title="Skills" triggerchange={() => {}} />
      <div className="w-full flex justify-around">
        <div className="w-1/3 pt-6 ">
          <>
            <AppInput
              loading={false}
              triggerchange={() => {}}
              value=""
              label="Add your skill"
            />
            <AppRange />
            <AppBtn label="Save" />
          </>
        </div>
        <div className="w-1/3">
          {qdata.qualifications.length === 0 && <EmptyBlock />}
          {qdata.qualifications.map((obj, i) => {
            return (
              <div className="py-3">
                <div className="card w-full bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">B.com with CA</h2>
                    <div>12/05/2002 - 13/05/2006</div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rem laboriosam,
                    </p>
                    <div className="card-actions justify-end">
                      <span className="cursor-pointer">
                        <PenIcons />
                      </span>
                      <span className="cursor-pointer">
                        <TrashIcon />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
