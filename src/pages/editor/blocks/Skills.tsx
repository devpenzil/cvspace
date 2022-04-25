/* eslint-disable @typescript-eslint/no-unused-vars */
import e from "express";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import PenIcons from "../../../assets/icons/PenIcons";
import TrashIcon from "../../../assets/icons/TrashIcon";
import AppBtn from "../../../components/appbtn/AppBtn";
import AppDate from "../../../components/appdate/AppDate";
import AppInput from "../../../components/appinput/AppInput";
import AppRange from "../../../components/apprange/AppRange";
import AppTextArea from "../../../components/apptextarea/AppTextArea";
import ElementHeader from "../../../components/elementheader/ElementHeader";
import EmptyBlock from "../../../components/emptyblock/EmptyBlock";
import { singleskills } from "../../../types/editorTypes";

function Skills() {
  const [qdata, Setqdata] = useState({
    skills: [1, 2, 3, 4],
  });
  const [singleData, SetSingleData] = useState<singleskills>({
    name: "",
    value: "",
  });
  const addItem = () => {
    if (singleData.name === "") {
      toast.error("Fill all mandatory fields");
      return false;
    }
  };

  return (
    <div className="container mx-auto">
      <ElementHeader title="Skills" />
      <div className="w-full flex justify-around">
        <div className="w-1/3 pt-6 ">
          <>
            <AppInput
              loading={false}
              triggerchange={(e) => {
                SetSingleData({ ...singleData, name: e });
              }}
              value={singleData.name}
              label="Add your skill"
              mandatory
            />
            <AppRange
              triggerChange={(e) => {
                SetSingleData({ ...singleData, value: e });
              }}
            />
            <AppBtn
              label="Save"
              triggerClick={() => {
                addItem();
              }}
            />
          </>
        </div>
        <div className="w-1/3">
          {qdata.skills.length === 0 && <EmptyBlock />}
          {qdata.skills.map((obj, i) => {
            return (
              <div className="py-2" key={i}>
                <div className="card w-full bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">HTML</h2>
                    <progress
                      className="progress progress-primary w-full"
                      value={40}
                      max={100}
                    />
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
