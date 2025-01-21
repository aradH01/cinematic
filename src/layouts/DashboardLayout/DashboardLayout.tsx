'use client';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
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
