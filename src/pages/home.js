import React from "react";
import Card from "../components/card.js";
import Welcome from "../components/welcome.js";
import BankIcon from "../components/bank.js";

const Home = () => {
  return (
    <>
      <Welcome />
      <Card
        className="home-page"
        hdrcolor="whitegrey"
        hdrtext="#030501"
        bodycolor="#F6F9F2"
        bodytext="#030501"
        header="Welcome to Happy Bank!!"
        title="Bringing happiness to your financial journey"
        text="Banking that leaves you feeling happy and fulfilled"
        body={<BankIcon />}
      />
    </>
  );
};
export default Home;
