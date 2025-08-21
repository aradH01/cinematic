'use client';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import type {PropsWithChildren} from 'react';
import '@/shared/styles/global.css';
import '@/shared/styles/globals';


const MainLayout = ({children}: PropsWithChildren) => {

    return (
        <>
            <div className="max-w-[600px] mx-auto">
                {children}
                {/* <Toast/>*/}
            </div>
        </>
    );
};

export default MainLayout;
