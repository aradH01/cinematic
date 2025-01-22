'use client';

import type {PropsWithChildren} from 'react';
import '@mantine/core/styles.css';


const AuthLayout = ({children}: PropsWithChildren) => {
    return (
        <>
            <div className="h-[100vh] h-[100dvh]">
                {children}
            </div>
        </>
    );
};

export default AuthLayout;
