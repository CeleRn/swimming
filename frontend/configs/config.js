

// export const accountYandexMetrika = (process.env.NODE_ENV === "development") ? [56827036] : [56714803];
export const isServer = typeof window === 'undefined';
export const baseUrl = (MODE_DEVELOPMENT) ? "http://swimming.udelta.ru" : "https://mo-swimming.ru";