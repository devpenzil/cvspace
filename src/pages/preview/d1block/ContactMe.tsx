import React from "react";
import GlobeIcon from "../../../assets/icons/GlobeIcon";
import MailIcon from "../../../assets/icons/MailIcon";
import PhoneIcon from "../../../assets/icons/PhoneIcon";
import PreviewWrapper from "../../../components/previewwrapper/PreviewWrapper";
interface props {
  data: {
    bio?: string;
    email?: string;
    jobtitle?: string;
    name?: string;
    phone?: string;
    website?: string;
  };
}
function ContactMe({ data }: props) {
  console.log(data);

  return (
    <PreviewWrapper path="personal-info">
      <div>
        <div className="text-2xl font-bold">Contact Me</div>
        <div className="mt-3 space-y-3">
          {data?.phone !== "" && (
            <div className="flex items-center space-x-4 print:space-x-1">
              <div className="print:hidden">
                <PhoneIcon />
              </div>{" "}
              <span>{data.phone}</span>
            </div>
          )}
          {data?.email !== "" && (
            <div className="flex items-center space-x-4 print:space-x-1">
              <div className="print:hidden">
                <MailIcon />
              </div>{" "}
              <span>{data.email}</span>
            </div>
          )}
          {data?.website !== "" && (
            <div className="flex items-center space-x-4 print:space-x-1">
              <div className="print:hidden">
                <GlobeIcon />
              </div>{" "}
              <span>{data.website}</span>
            </div>
          )}
        </div>
      </div>
    </PreviewWrapper>
  );
}

export default ContactMe;
