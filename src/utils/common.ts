
export const buildUrl = (url:any, params:any) => {

    let urlWithParams = url;

    Object.entries(params).forEach(([key, value], i) => {
        const sign = !i ? '?' : '&';
        urlWithParams += `${sign}${key}=${value}`
    })

    return urlWithParams;
}

export const sumBy = (arr:any) => arr.reduce((prev:any, cur:any) => prev + cur);