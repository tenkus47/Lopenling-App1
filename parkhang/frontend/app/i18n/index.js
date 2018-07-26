// @flow

export type LocaleData = {
    displayName: string,
    messages: { [message: string]: string }
};

export type LocalesData = {
    activeLocale: string,
    locales: {
        [locale: string]: LocaleData
    }
};
