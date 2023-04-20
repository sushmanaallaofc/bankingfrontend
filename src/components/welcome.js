import { useState } from "react";
const Welcome = () => {
  const [name] = useState(localStorage.getItem("token1"));

  return (
    <>
      {name ? <p style={{color:'grey'}} className="welcome">Welcome {name}!</p> :<></>}
    </>
  );
};
export default Welcome;
