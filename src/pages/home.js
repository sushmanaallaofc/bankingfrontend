import React from 'react';
import Card from "../components/card.js";
import Welcome from '../components/welcome.js';

const Home = () => {
    return (
   <>
   <Welcome/>
   <Card 
   className="home-page"
   hdrcolor="maroon"
   hdrtext="white"
   bodycolor="white"
   bodytext="maroon"
   header="Welcome to SHIVAMIT PRO-BANK"
   title="Our bank provides Top-notch services"
   text="For all your internet Bankings needs!"
   body={(<div className='d-flex justify-content-center'><img src="bank.png" 
   className="img-fluid w-75" 
   alt="Bank"/></div>)}
   />
   </>
    );
}
export default Home;