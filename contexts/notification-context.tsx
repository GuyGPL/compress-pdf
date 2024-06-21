"use client";

import Notification from "@/components/notification";
import { NotificationType } from "@/enums/notification-type";
import { createContext, PropsWithChildren, useContext, useState } from "react";

type NotificationContextValues = {
    notificationType: NotificationType;
    message: string;
    notificationSuccess: (text: string) => void;
    notificationError: (text: string) => void;
    notificationInfo: (text: string) => void;
    clear: () => void;
};

const NotificationContext = createContext<NotificationContextValues | undefined>(undefined);

export const NotificationProvider = ({ children }: PropsWithChildren) => {
    const [notificationType, setNotificationType] = useState<NotificationType>(
        NotificationType.SUCCESS
    );
    const [message, setMessage] = useState<string>("");

    const notificationSuccess = (text: string, duration?: number) => {
        setMessage(text);
        setNotificationType(NotificationType.SUCCESS);
        clear(duration);
    };

    const notificationError = (text: string, duration?: number) => {
        setMessage(text);
        setNotificationType(NotificationType.ERROR);
        clear(duration);
    };

    const notificationInfo = (text: string, duration?: number) => {
        setMessage(text);
        setNotificationType(NotificationType.INFO);
        clear(duration);
    };

    const clear = (duration: number = 3) => {
        setTimeout(() => {
            setMessage("");
        }, duration * 1000);
    };

    return (
        <NotificationContext.Provider
            value={{
                notificationSuccess,
                notificationError,
                notificationInfo,
                clear,
                notificationType,
                message,
            }}
        >
            <Notification />
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotification = (): NotificationContextValues => {
    return useContext(NotificationContext) as NotificationContextValues;
};
