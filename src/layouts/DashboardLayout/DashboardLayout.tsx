'use client';

import type {PropsWithChildren} from 'react';
import '@mantine/core/styles.css';
import { Toast } from '@/components/providers/Toast';


const MainLayout = ({children}: PropsWithChildren) => {

  return (
    <>
      <div className="">
        {children}
       {/* <Toast/>*/}
      </div>
    </>
  );
};

export default MainLayout;
