import { useState } from "react";
import Form from "./Components/Form";
import BusinessCard from "./Components/BusinessCard";


function App() {
  const formSubmit = (data) => {
    setBusinessCardData(data)
  };

  const [businessCardData, setBusinessCardData] = useState(null);

  return (
    <>
      <Form
        handleSubmit={formSubmit}
      />
      <BusinessCard 
        businessCardData={businessCardData}
      />
    </>
  )
}

export default App
