function ajax(type = 'GET', url, param = {}, callback) {
    if (!url) {
        console.log('请求地址不能为空！');
        return;
    }
    type = type.toUpperCase();
    const xhr = new XMLHttpRequest();
    const token = window.localStorage.getItem('token');

    if (type === 'GET') {
        let _url = url;
        let dataStr = ''; // 数据拼接字符串
        let link = '?'; // 处理如果url本身带?的情况
        if (_url.indexOf('?') > -1) {
            link = '&';
        }
        Object.keys(param).forEach((key) => {
            dataStr += `${key}=${param[key]}&`;
        });
        dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));

        const timeStamp = parseInt(Math.random() * 100000, 10);

        if (dataStr) _url += `${link}${dataStr}&t=${timeStamp}`;
        else _url += `${link}t=${timeStamp}`;

        xhr.open(type, _url, true);
        xhr.timeout = 30000;
        xhr.setRequestHeader('If-Modified-Since', '0');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        if (token) xhr.setRequestHeader('token', token);
        xhr.send();
    } else if (type === 'POST') {
        xhr.open(type, url, true);
        xhr.timeout = 30000;
        xhr.setRequestHeader('Content-type', 'application/json');
        if (token) xhr.setRequestHeader('token', token);
        xhr.send(JSON.stringify(param));
    }

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            callback(xhr);
        }
    };
}

export default ajax;
