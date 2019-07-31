/**
 * 截取句号前的文字段
 * @param str
 */
export const subIndexStr = function (str: string): string {
    if (str.indexOf('。') != -1) {
        if (str.indexOf('。', str.length - 1) != -1) {
            return str;
        } else {
            let index = str.indexOf('。');
            return str.slice(0, index + 1);
        }
    }

    return str.substr(0, 150);
};