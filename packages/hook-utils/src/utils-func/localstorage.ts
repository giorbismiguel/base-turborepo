export const getFromStorage = (key: string, defaultValue: any) => {
    try {
        const value = window.localStorage.getItem(key);
        if (value)
            return JSON.parse(value);
    } catch (e) {
        //ignoring error
    }
    return defaultValue;
}

export const saveToStorage = (key: string, value: any) => {
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        //ignoring error
    }
}