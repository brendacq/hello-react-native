import React, {useState, createContext} from 'react';

interface EnterNumberInterface {
  defineInitialNumber: any;
  number: number;
}

export const EnterNumberContext = createContext<EnterNumberInterface>(
  {} as EnterNumberInterface,
);

const EnterNumberProvider = ({children}: any) => {
  const [number, setNumber] = useState(0);

  function defineInitialNumber(num: number) {
    setNumber(num);
  }

  return (
    <EnterNumberContext.Provider value={{defineInitialNumber, number}}>
      {children}
    </EnterNumberContext.Provider>
  );
};

export default EnterNumberProvider;
