import React from "react";
import Card from "../src/components/Card";
import Asmaa from "../src/assets/asmaa.jpg";
import Latifa from "../src/assets/Latifa1.jpg";
import Chaima from "../src/assets/Chaima.jpg";
import Sanad from "../src/assets/saned.jpg";
import Basmala from "../src/assets/basmala.jpg";

function App() {
  return (
    <div className="flex flex-col items-center">
      {/* President */}
      <u><h1 className="text-2xl mt-9 font-bold">President / Vice President</h1></u>
      <div className="flex justify-center items-center mt-8">
        <div className="flex flex-col md:flex-row">
          <Card name="Roua Madoui" img={Latifa} role="President" />
          <Card name="Latifa boudiaf" img={Latifa} role="Vice President" />
        </div>
      </div>
      {/* Managers */}
      <u><h1 className="text-2xl mt-9 font-bold">Managers / Leaders</h1></u>
      <div className="flex justify-center items-center mt-8">
        <div className="flex flex-wrap justify-center">
          <Card name="Asmaa" img={Asmaa} role="Education Team Manager" />
          <Card name="Chaima" img={Chaima} role="Marketing Team Manager" />
          <Card
            name="Soumaia Machiche"
            img={Sanad}
            role="Project Team Manager"
          />
          <Card
            name="Soumaia Machiche"
            img={Sanad}
            role="Project Team Manager"
          />
        </div>
      </div>
      {/* members */}
      <u><h1 className="text-2xl mt-9 font-bold">Members</h1></u>
      <div className="flex justify-center items-center mt-8">
        <div className="flex flex-wrap justify-center">
          <Card name="Alice Smith" img={Asmaa} role="Data Scientist" />
          <Card name="Chaima Zamouche" img={Chaima} role="UI/UX Designer" />
          <Card name="Emily Brown" img={Sanad} role="Marketing Manager" />
          <Card
            name="Mike Wilson"
            img="https://via.placeholder.com/300"
            role="Product Manager"
          />
          <Card name="Basmala" img={Basmala} role="Member" />
        </div>
      </div>
    </div>
  );
}

export default App;
