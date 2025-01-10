'use client';

import type {PropsWithChildren} from 'react';
import '@mantine/core/styles.css';
import { Toast } from '@/components/providers/Toast';


const AuthLayout = ({children}: PropsWithChildren) => {
    return (
        <>
            <div className="">
                {children}
                <Toast/>
            </div>
        </>
    );
};

export default AuthLayout;
