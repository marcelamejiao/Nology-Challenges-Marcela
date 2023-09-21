import { useState } from "react";
import Form from "./Components/Form";
import BusinessCard from "./Components/BusinessCard";
import HookForm from "./Components/HookForm";
import styles from './App.module.scss'


function App() {
  const formSubmit = (data) => {
    setBusinessCardData(data)
  };

  // 
  const [businessCardData, setBusinessCardData] = useState(null);

  return (
    <div className={styles.wrap}>
      {/* <Form
        handleSubmit={formSubmit}
      /> */}
      <BusinessCard 
        businessCardData={businessCardData}
      />
      <HookForm 
        formSubmit={formSubmit}
      />
    </div>
  )
}

export default App
