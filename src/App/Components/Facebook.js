import React, { useState } from "react";
import FacebookLoginBtn from "react-facebook-login";

const FacebookLogin = () => {
  let facebookData;
  let initialState = { auth: false, name: "", picture: "" };
  const [state, setState] = useState(initialState);
  let componentClicked = () => {
    console.log("Facebook btn clicked");
  };
  let responseFacebook = (response) => {
    console.log(response);
    if (response.status !== "unknown")
      setState({
        auth: true,
        name: response.name,
        picture: response.picture.data.url,
      });
  };
  let renderFacebook = () => {
    return state.auth
      ? (facebookData = (
          <div
            style={{
              width: "400px",
              margin: "auto",
              background: "#f4f4f4",
              padding: "20px",
              color: "#000",
            }}
          >
            <img src={state.picture} alt={state.name} />
            <h2>Welcome {state.name}!</h2>
          </div>
        ))
      : (facebookData = (
          <FacebookLoginBtn
            appId="157686272949212"
            autoLoad={true}
            fields="name,picture"
            onClick={componentClicked}
            callback={responseFacebook}
          />
        ));
  };
  console.log(facebookData);
  return (
    <>
      {renderFacebook()}
      {/* {facebookData} */}
    </>
  );
};

export default FacebookLogin;
