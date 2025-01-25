'use client';
import {notifications} from "@mantine/notifications";
import {RequireField} from '@/core/types/common.types';

type ToastEvents = {
    id?: string;
    message?: string;
    title?: string;
    duration?: number | false;
    position?:
        | 'bottom-center'
        | 'top-center'
        | 'top-left'
        | 'top-right'
        | 'bottom-left'
        | 'bottom-right';
};

function error(event: ToastEvents) {
    notifications.show({
        title: event.title || 'Error',
        message: event.message,
        color: 'red',
        autoClose: event.duration || 2500,
        withCloseButton: true,
        styles: () => ({
            title: {fontSize: '18px'},
            description: {fontSize: '17px'},
            closeButton: {
                width: '2rem',
                height: '2rem',
                '& svg': {
                    width: '2rem !important',
                    height: '2rem !important',
                },
            },
        }),
    });
}

function success(event: ToastEvents) {
    notifications.show({
        id: event.id,
        title: event.title || 'Success',
        message: event.message,
        color: 'green',
        autoClose: event.duration || 2500,
        withCloseButton: true,
        styles: () => ({
            title: {fontSize: '18px'},
            description: {fontSize: '17px'},
            closeButton: {
                width: '2rem',
                height: '2rem',
                '& svg': {
                    width: '2rem !important',
                    height: '2rem !important',
                },
            },
        }),
    });
}

function warn(event: ToastEvents) {
    notifications.show({
        id: event.id,
        title: event.title || 'Warning',
        message: event.message,
        color: 'yellow',
        autoClose: event.duration || 2500,
        withCloseButton: true,
        styles: () => ({
            title: {fontSize: '18px'},
            description: {fontSize: '17px'},
            closeButton: {
                width: '2rem',
                height: '2rem',
                '& svg': {
                    width: '2rem !important',
                    height: '2rem !important',
                },
            },
        }),
    });
}

function loading(event: RequireField<ToastEvents, 'id'>) {
    notifications.show({
        id: event.id,
        loading: true,
        title: event.title || 'Loading your data',
        message: event.message,
        autoClose: event.duration || 2500,
        withCloseButton: false,
        styles: () => ({
            title: {fontSize: '18px'},
            description: {fontSize: '17px'},
            closeButton: {
                width: '2rem',
                height: '2rem',
                '& svg': {
                    width: '2rem !important',
                    height: '2rem !important',
                },
            },
        }),
    });
}

function update(event: RequireField<ToastEvents, 'id'>) {
    notifications.update({
        id: event.id,
        title: event.title || 'Data was loaded',
        message:
            event.message ||
            'Notification will close in 2 seconds, you can close this notification now',
        autoClose: event.duration || 2500,
        withCloseButton: true,
        styles: () => ({
            title: {fontSize: '18px'},
            description: {fontSize: '17px'},
            closeButton: {
                width: '2rem',
                height: '2rem',
                '& svg': {
                    width: '2rem !important',
                    height: '2rem !important',
                },
            },
        }),
    });
}

const toast = {error, success, warn, update, loading};

export {toast};
