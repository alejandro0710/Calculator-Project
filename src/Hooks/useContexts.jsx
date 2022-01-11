import React, { useContext } from 'react';
import { AppContext } from '@context/AppContext';

const useContexts = () => useContext(AppContext);

export { useContexts };
