export const parseNumber = (number: string | null, defaultValue: number = 0) => {
    try {
        return Math.floor(Number(number || defaultValue));
    } catch (e) {
        return defaultValue
    }
}