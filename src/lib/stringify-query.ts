export const stringifyQuery = (
    query: Record<string, any>
): string => {
    return Object.keys(query)
        .map((key) => `${key}=${String(query[key])}`)
        .join("&");
};
