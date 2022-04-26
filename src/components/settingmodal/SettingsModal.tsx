import React from "react";

function SettingsModal() {
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-primary absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Account Settings</h3>
          <div className="py-4">
            <h4 className="text-base font-bold">Delete your account</h4>
            <p className="py-3 text-sm font-semibold">
              By deleting your account, you will lost all your data and login
              information. we won't store any of your data.
            </p>
            <button className="btn btn-error">Delete account</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsModal;
