import React from "react";
import GlobeIcon from "../../../assets/icons/GlobeIcon";
import MailIcon from "../../../assets/icons/MailIcon";
import PhoneIcon from "../../../assets/icons/PhoneIcon";
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
  return (
    <div className="mt-5">
      <div className="text-2xl font-bold">Contact Me</div>
      <div className="mt-3 space-y-3">
        {data?.phone !== "" && (
          <div className="flex items-center space-x-4">
            <PhoneIcon /> <span>9626987569</span>
          </div>
        )}
        {data?.email !== "" && (
          <div className="flex items-center space-x-4">
            <MailIcon /> <span>ajoalex012@gmail.com</span>
          </div>
        )}
        {data?.website !== "" && (
          <div className="flex items-center space-x-4">
            <GlobeIcon /> <span>devpenzil.dev</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactMe;