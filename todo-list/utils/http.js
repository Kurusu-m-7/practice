export const fetchItems = async (url) => {
    try {
        // API通信でデータを取得する
        const response = await fetch(url);
        // 取得したデータをjson形式で返す
        return await response.json();
    } catch (error) {
        // API通信でデータを上手く取得できなかった場合、コンソールにエラーを表示
        console.error("データを取得出来ませんでした");
        console.error(error);
    }
};

export const insertItems = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    }).catch(() => {
        //上手くいかなかった場合、コンソールにエラーを表示
        console.error(response.json())
        return;
    })
};