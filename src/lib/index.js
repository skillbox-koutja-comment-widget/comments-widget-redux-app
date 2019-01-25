export const stripHtmlFromText = text => {
    return text ? text.replace(/<(?:.|\n)*?>/gm, '') : text;
};
