import { prettyDOM } from '@testing-library/react';
import React, { useState } from 'react';
export const SuperContext = React.createContext();

export default function SuperContainer(props) {
  const token = localStorage.getItem('token') || false;
  const [userInfo, setUserInfo] = useState({ access: token});

  const handelUserInfo = (info) => {
    setUserInfo((pre) => ({...pre, ...info }))
  }

  return <SuperContext.Provider value={{userInfo, dispatch: handelUserInfo}}>
    { props?.children }
  </SuperContext.Provider>
}
