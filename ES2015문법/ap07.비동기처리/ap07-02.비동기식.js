//비동기식 함수 구현
function addAsync(callback, i, j) {
    let error = null;
    debugger;
    try {
        const result = i + j;
        callback(error, result);
    } catch (e) {
        error = e;
        callback(error, null);
    }
}
addAsync((error, result) => console.log(result), 1, 2);
