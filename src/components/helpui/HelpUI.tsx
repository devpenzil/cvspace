import React from "react";

function HelpUI() {
  const editor = [
    "You can add, update, delete your details with the editor.",
    " You can delete your account in the settings menu. You can't undo the process once you deleted.",
  ];
  const preview = [
    "Print the resume with the print button at the bottom left.",
    "Remove unwanted section from the print by using the filter icon on the preview page.",
    "Drag and change the position of the sections in the preview page.",
    "If you are on a mobile device, you can't preview or print your resume. But still can edit the details.",
  ];
  return (
    <div>
      <div>
        <input type="checkbox" id="helpui" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="helpui"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-xl font-bold text-center">User Guide</h3>
            <div className="mt-2">
              <div className="text-lg font-semibold">Editor Page</div>
              {editor.map((str, i) => {
                return (
                  <p key={i} className="mt-1 text-sm font-semibold ml-3">
                    {str}
                  </p>
                );
              })}
            </div>
            <div className="mt-2">
              <div className="text-lg font-semibold">Preview Page</div>
              {preview.map((str, i) => {
                return (
                  <p key={i} className="mt-1 text-sm font-semibold ml-3">
                    {str}
                  </p>
                );
              })}
            </div>
            <div className="mt-3">
              <div className="alert  shadow-lg">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-info flex-shrink-0 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>
                    If you face any issues. Report it{" "}
                    <a
                      target="_blank"
                      href="https://github.com/devpenzil/cvspace/issues/new/choose"
                      className="underline hover:text-purple-500"
                      rel="noreferrer"
                    >
                      here
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpUI;
