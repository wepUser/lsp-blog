/**
 * 截取句号前的文字段
 * @param str
 */
export const subIndexStr = function (str: string): string {
    return str.slice(0, str.indexOf('。') + 1);
};