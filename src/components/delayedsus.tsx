"use client";
import {useState, useEffect } from 'react';
import Loading from '@/app/_loading';
export const DelayedSuspense = (props: { children: any, delay?: number}) => {
  const [showLoader, setShowLoader] = useState(true);
  const { children, delay = 700 } = props;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return <>
    {showLoader ? <Loading/> : children}
  </>
};