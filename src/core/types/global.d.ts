export {};

declare global {
    interface Window {
        AppleID: {
            auth: {
                signIn: () => Promise<{
                    authorization: {
                        code: string;
                        id_token: string;
                    };
                    user?: {
                        email?: string;
                        name?: {
                            firstName?: string;
                            lastName?: string;
                        };
                    };
                }>;
                init: (config: {
                    clientId: string;
                    scope: string;
                    redirectURI: string;
                    state: string;
                    usePopup?: boolean;
                }) => void;
            };
        };
    }
}
