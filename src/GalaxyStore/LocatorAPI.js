import React, { useState, useEffect } from "react";
import axios from "axios";

const LocatorAPI = () => {
  const [state, setState] = useState({
      countryName: '',
      countryCode: '',
      countryCity: '',

  });

  useEffect(() => {
    axios.get("https://ipapi.co/json/")
      .then
      ((response) => {
        console.log(response.data);
        setState({
          countryName: (response.data.country_name),
          countryCode: (response.data.country_calling_code),
          countryCity: (response.data.city),
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return <div>
      <p>{state.countryName}</p>
      <p>{state.countryCode}</p>
      <p>{state.countryCity}</p>
  </div>;
};

export default LocatorAPI;
