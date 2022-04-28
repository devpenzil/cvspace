import React from "react";
import Star from "../../../assets/icons/Star";
import StarRating from "../../../components/starrating/StarRating";
interface props {
  data: any;
}
function LanguageSummary({ data }: props) {
  return (
    <>
      {data && (
        <div className="mt-10">
          <div className="text-2xl font-bold">Language</div>
          <div className="space-y-3 mt-3">
            {Object.entries(data).map((obj: any, i) => {
              console.log(obj);

              return (
                <div
                  className="flex items-center justify-between flex-wrap"
                  key={i}
                >
                  <div>{obj[1].language}</div>
                  <StarRating value={obj[1].rate} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default LanguageSummary;
