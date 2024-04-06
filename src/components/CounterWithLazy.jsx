import React from "react";
import { lazy } from 'react';

const Counter = lazy(() => import('./Counter.jsx'));
const CounterWithLazy = () => {

    return(<Counter />)
}

export default CounterWithLazy;