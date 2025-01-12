'use client'
import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import { useRouter , usePathname } from 'next/navigation'
import {AvailableIcons, Icon} from "@/components/elements/Icon";

const NavbarWrapper = styled.nav`
  width: 100%;
    max-width: 296px;
    border-radius: 43px;
  display: flex;
    height: 56px;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.components.gray300};
  border:1px solid ${({ theme }) => theme.components.border100};
  padding: 4px;
  z-index: 10;
    backdrop-filter: blur(10px);
`;

const IconWrapper = styled.div<{ isActive: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 72px;
    border-radius: 32px;
    background-color: ${({ theme , isActive }) => isActive ? theme.components.black800 : 'transparent'};
    transition: background-color 0.3s ease;
    cursor: pointer;
    padding: 12px 20px;
    .navbar-icon {
    width: 24px;
    height: 24px;
    stroke: ${({ isActive, theme }) => (isActive ? theme.font.white : theme.font.white)};
    transition: fill 0.3s ease;
  }
`;

const icons = [
    { name: "Home", path: "/home", icon:  "Home" as AvailableIcons},
    { name: "Download", path: "/downloads", icon: "Downloads" as AvailableIcons },
    { name: "Search", path: "/search", icon: "Search" as AvailableIcons },
    { name: "Settings", path: "/setting", icon: "Setting" as AvailableIcons },
];

export const PhoneNavbar = () => {
    const fullPath = usePathname();
    const router =useRouter()

    return (
        <NavbarWrapper>
            {icons.map(({ name, path, icon }) => (
                <IconWrapper
                    key={name}
                    isActive={fullPath?.startsWith(path)}
                    onClick={() => router.push(path)}
                >
                    <Icon className="navbar-icon" name={icon}/>
                </IconWrapper>
            ))}
        </NavbarWrapper>
    );
};
