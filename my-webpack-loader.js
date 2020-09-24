module.exports = function myWebpackLoader(content) {
    console.log('myWebpackLoader 동작완료');
    return content.replace('console.log(', 'alert(');
}