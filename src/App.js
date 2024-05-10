import React from "react";
import Card from "../src/components/Card";
import Asmaa from "../src/assets/asmaa.jpg";
import Latifa from "../src/assets/Latifa1.jpg";
import Chaima from "../src/assets/Chaima.jpg";
import Sanad from "../src/assets/saned.jpg";
import Basmala from "../src/assets/basmala.jpg";
import Sidou from "../src/assets/sidou.jpg";
import Roua from "../src/assets/roua.jpg";

function App() {
  return (
    <div className="flex flex-col items-center">
      {/* President */}
      <u><h1 className="text-2xl mt-9 font-bold">President / Vice President</h1></u>
      <div className="flex justify-center items-center ">
        <div className="flex flex-col md:flex-row">
          <Card name="Roua Madoui" img={Roua} role="President" />
          <Card name="Latifa boudiaf" img={Latifa} role="Vice President" />
        </div>
      </div>
      {/* Managers */}
      <u><h1 className="text-2xl mt-9 font-bold">Managers / Leaders</h1></u>
      <div className="flex justify-center items-center">
        <div className="flex flex-wrap justify-center">
        {/* <Card name="Moundher Mesphar" img={Asmaa} role="External Relationships Manager" /> */}
        
          <Card name="Asmaa Rebiha" img={Asmaa} role="Education Team Manager" />
          <Card name="Chaima Zaamouche" img={Chaima} role="Marketing Team Manager" />
          
          <Card name="Soumaia Machiche(Sanad)" img={Sanad}role="Project Team Manager"/>
          <Card name="Ferhi Mohamed habib Ellah (Sidou)" img={Sidou} role="Web Dev Leader" />
        </div>
      </div>
      {/* members */}
      <u><h1 className="text-2xl mt-9 font-bold">Members</h1></u>
      <div className="flex justify-center items-center mb-10">
        <div className="flex flex-wrap justify-center">
          <Card name="Basmala Bouchouit" img={Basmala} role="Member" />
        </div>
      </div>
    </div>
  );
}

export default App;
