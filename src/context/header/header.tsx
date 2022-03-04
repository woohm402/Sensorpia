import { createContext, PropsWithChildren, useContext, useState } from 'react';

export interface Header {
  isOpen: boolean;
  setIsOpen: (e: boolean) => void;
}

const initialHeader = {
  isOpen: false,
  setIsOpen: () => null,
};

const HeaderContext = createContext<Header>(initialHeader);

export const HeaderProvider = ({ children }: PropsWithChildren<{}>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <HeaderContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderContext = () => useContext(HeaderContext) as Header;
