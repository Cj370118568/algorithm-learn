const deepCopy = (originObj, property) => {
    const map = new WeakMap();
    function dp(obj) {
        const result = Array.isArray(obj) ? [] : {};
        const existObj = map.get(obj);
        if (existObj) { return existObj; }
        map.set(obj, result);
        for (let key of Reflect.ownKeys(obj)) { // 只需要加一个检测，看看key是不是我们需要的属性就行 
            if (obj.hasOwnProperty(key) && key === property) {
                if (obj[key] && typeof obj[key] === 'object') { result[key] = dp(obj[key]) }
                else { result[key] = obj[key]; }
            }
        } return result;
    } 
    return dp(originObj);
}