import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { LIGHTMODE_TOGGLE } from "../Redux/actions";

const LightModeToggle = () => {
  const lightModeEnabled = useSelector(
    (state) => state.preferences.lightModeEnabled
  );
  const dispatch = useDispatch();

  return (
    <label class="label">
      <div class="toggle">
        <input
          class="toggle-state"
          type="checkbox"
          name="check"
          value="check"
          checked={lightModeEnabled}
          onChange={() => dispatch({ type: LIGHTMODE_TOGGLE })}
        />
        <div class="indicator"></div>
      </div>
    </label>
  );
};

export default LightModeToggle;
