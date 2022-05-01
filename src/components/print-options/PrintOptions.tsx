/* eslint-disable jsx-a11y/anchor-is-valid */
import { SketchPicker } from "react-color";
import { colors } from "../../types/editorTypes";
interface props {
  value: colors;
  changepbg: (e: any) => void;
  changepsbg: (e: any) => void;
  changeptx: (e: any) => void;
  changestx: (e: any) => void;
}
function PrintOptions({
  value,
  changepbg,
  changepsbg,
  changeptx,
  changestx,
}: props) {
  return (
    <div>
      <div>
        <input type="checkbox" id="color-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="color-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">Choose Colors</h3>
            <div
              tabIndex={0}
              className="collapse collapse-plus  bg-base-100 rounded-box"
            >
              <div className="collapse-title font-medium">
                Primary BackGround Color
              </div>
              <div className="collapse-content flex justify-center">
                <SketchPicker
                  width="100%"
                  color={value.primarybg}
                  onChangeComplete={(e) => {
                    changepbg(e.hex);
                  }}
                />
              </div>
            </div>

            <div
              tabIndex={0}
              className="collapse collapse-plus  bg-base-100 rounded-box"
            >
              <div className="collapse-title font-medium">
                Secondary BackGround Color
              </div>
              <div className="collapse-content flex justify-center">
                <SketchPicker
                  width="100%"
                  color={value.primarybg}
                  onChangeComplete={(e) => {
                    changepsbg(e.hex);
                  }}
                />
              </div>
            </div>

            <div
              tabIndex={0}
              className="collapse collapse-plus  bg-base-100 rounded-box"
            >
              <div className="collapse-title font-medium">
                Primary Text Color
              </div>
              <div className="collapse-content flex justify-center">
                <SketchPicker
                  width="100%"
                  color={value.primarybg}
                  onChangeComplete={(e) => {
                    changeptx(e.hex);
                  }}
                />
              </div>
            </div>

            <div
              tabIndex={0}
              className="collapse collapse-plus  bg-base-100 rounded-box"
            >
              <div className="collapse-title font-medium">
                Secondary Text Color
              </div>
              <div className="collapse-content flex justify-center">
                <SketchPicker
                  width="100%"
                  color={value.primarybg}
                  onChangeComplete={(e) => {
                    changestx(e.hex);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrintOptions;
