import React from "react";
import * as Styled from "./Styles";
import { Input } from "../../../Form/Styles";

const Profile = () => {
  return (
    <Styled.Wrapper>
      <h1>Profile</h1>
      <p>Change login credentials</p>
      {/* <Input type="text" value={email} onChange={handleEmailChange}></Input> */}
    </Styled.Wrapper>
  );
};

export default Profile;
