'use client';

import type {PropsWithChildren} from 'react';
import '@mantine/core/styles.css';
import '@/shared/styles/global.css';
import '@/shared/styles/globals';
import { Toast } from '@/components/providers/Toast';
import {PhoneNavbar} from "@/components/sections/PhoneNavbar";


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
