export const SocialShare = {
    Twitter: (url: string, text: string) => {
        const targetUrl = new URL('https://twitter.com/share')
        const params = new URLSearchParams({url, text})
        targetUrl.search = params.toString()
        return targetUrl.toString();
    },
    Facebook: (u: string, quote: string) => {
        const targetUrl = new URL('https://facebook.com/sharer/share.php')
        const params = new URLSearchParams({u, quote})
        targetUrl.search = params.toString()
        return targetUrl.toString();
    },
    Telegram: (url: string, text: string) => {
        const targetUrl = new URL('https://telegram.me/share')
        const params = new URLSearchParams({url, text})
        targetUrl.search = params.toString()
        return targetUrl.toString();
    },
    Whatsapp: (url: string, text: string) => {
        const targetUrl = new URL('https://whatsapp.com/share')
        const params = new URLSearchParams({text: `${url}\n${text}`})
        targetUrl.search = params.toString()
        return targetUrl.toString();
    },
    Tiktok: (url: string, text: string) => {
        const targetUrl = new URL('https://whatsapp.com/share')
        const params = new URLSearchParams({text: `${url}\n${text}`})
        targetUrl.search = params.toString()
        return targetUrl.toString();
    },
    Snapchat: (url: string, text: string) => {
        const targetUrl = new URL('https://whatsapp.com/share')
        const params = new URLSearchParams({text: `${url}\n${text}`})
        targetUrl.search = params.toString()
        return targetUrl.toString();
    }
} as const
export type TSocialShare = keyof typeof SocialShare
