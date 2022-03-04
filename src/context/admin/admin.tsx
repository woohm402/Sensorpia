import { createContext, PropsWithChildren, useContext, useState } from 'react';

export interface Admin {
  isAdmin: boolean;
  setIsAdmin: (e: boolean) => void;
}

const initialAdmin: Admin = {
  isAdmin: false,
  setIsAdmin: () => null,
};

const AdminContext = createContext<Admin>(initialAdmin);

export const AdminProvider = ({ children }: PropsWithChildren<{}>) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  return (
    <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => useContext(AdminContext) as Admin;
