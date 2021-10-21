import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { LIGHTMODE_TOGGLE } from "../Redux/actions";

const LightModeToggle = () => {
  const lightModeEnabled = useSelector(
    (state) => state.preferences.lightModeEnabled
  );
  const dispatch = useDispatch();

  return (
    <div class="switch">
      <input
        type="checkbox"
        checked={lightModeEnabled}
        onChange={() => dispatch({ type: LIGHTMODE_TOGGLE })}
      />
      <label></label>
    </div>
  );
};

export default LightModeToggle;
