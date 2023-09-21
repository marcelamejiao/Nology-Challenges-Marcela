import { useState } from "react";
import Form from "./Components/Form";
import BusinessCard from "./Components/BusinessCard";
import HookForm from "./Components/HookForm";


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
      <HookForm 
        formSubmit={formSubmit}
      />
    </>
  )
}

export default App
