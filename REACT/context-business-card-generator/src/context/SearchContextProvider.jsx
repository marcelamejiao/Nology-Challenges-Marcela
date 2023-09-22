import { createContext, useState } from 'react';

export const SearchContext = createContext(null);

const SearchContextProvider = ({ children }) => {
  
  const formSubmit = (data) => {
    setBusinessCardData(data)
  };

  const [businessCardData, setBusinessCardData] = useState(null);

  return (
    <SearchContext.Provider value={{ businessCardData, formSubmit }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
