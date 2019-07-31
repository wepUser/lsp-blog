import axios, {AxiosRequestConfig, AxiosPromise, AxiosResponse} from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 3000,
    headers: {'X-Requested-With': 'XMLHttpRequest'},
    // headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});

// export interface AxiosResponse {
//     data: any;
//     success: boolean;
//     status: number;
//     statusText?: string;
//     headers?: any;
//     config?: AxiosRequestConfig;
//     request?: any;
// }

const baseGet = (url: string) => {
    return api.get(url).then(res => {
        if (res) {
            return res.data;
        }
    }).catch((error: object) => {
        return error;
    });
};

const basePost = (url: string, params: any) => {
    return api.post(url, {params: params}).then(res => {
        if (res) {
            return res.data;
        }
    }).catch((error: object): object => {
        return error;
    })
};

/**
 * 获取文章列表数据
 * @returns {Promise<Object|TResult2|TResult1>}
 */
export const getDocs = (data: any) => {
    return basePost('getDocs', data);
};

/**
 * 新建文章数据
 * @param data
 * @returns {Promise<Object|TResult2|TResult1>}
 */
export const saveDocs = (data: any) => {
    return basePost('saveDocs', data);
};

/**
 * 获取文章详情数据
 * @param data
 * @returns {Promise<Object|TResult2|TResult1>}
 */
export const getDocsDetail = (data: any) => {
    return basePost('getDocsDetail', data);
};

/**
 * 搜索文章
 * @param data
 * @returns {Promise<Object|TResult2|TResult1>}
 */
export const searchDocs = (data: any) => {
    return basePost('searchDocs', data);
};

/**
 * 更新指定文章数据
 * @param data
 * @returns {Promise<Object|TResult2|TResult1>}
 */
export const updateDocs = (data: any) => {
    return basePost('updateDocs', data);
};

/**
 * 保存指定id文章评论数据
 * @param data
 * @returns {Promise<Object|TResult2|TResult1>}
 */
export const saveCommentDocs = (data: any) => {
    return basePost('saveCommentDocs', data);
};

/**
 * 获取指定id文章评论数据
 * @param data
 * @returns {Promise<Object|TResult2|TResult1>}
 */
export const getCommentDocs = (data: any) => {
    return basePost('getCommentDocs', data);
};