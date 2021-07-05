function copyObject(obj) {
    let objClone = {}; 
        for (let key in obj) {
            if (!(typeof obj[key] == "object")) {
            objClone[key] = obj[key];
            } else {
            objClone[key] = copyObject(obj[key]);
            }
        }
    return objClone;
}