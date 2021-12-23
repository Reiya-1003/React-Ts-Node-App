import React from "react";

const Login = () => {
  return (
    <div>
      <div>
        <label>
          ID
          <br />
          <input type="text" />
        </label>
      </div>
      <div>
        <label>
          PW
          <br />
          <input type="password" />
        </label>
      </div>
      <div>
        <input type="submit" value="ログイン" />
      </div>
    </div>
  );
};

export default Login;
