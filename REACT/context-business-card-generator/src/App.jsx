import BusinessCard from "./Components/BusinessCard";
import HookForm from "./Components/HookForm";
import Wrapper from "./Components/Wrapper";
import SearchContextProvider from "./context/SearchContextProvider";

function App() {
  return (
      <SearchContextProvider>
        <Wrapper>
          <BusinessCard />
          <HookForm />
        </Wrapper>
       </SearchContextProvider>
  );
}

export default App
