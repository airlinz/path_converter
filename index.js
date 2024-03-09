

var windowsre = /[A-Z]:.+/
var wslre = new RegExp("/mnt/.+")


function convertPath(path) {
    // 检查路径是否是Windows格式
    if (path.match(windowsre)) {
                // 转换Windows路径到WSL路径
            path = path.replace(/\\/g, "/")
            var c = path.charAt(0)
            path = "/mnt/" + (c + "").toLowerCase() + path.substring(2)
    }
    // 检查路径是否是WSL格式
    else if (path.match(wslre)) {
            path = path.substring(5)
            var c = path.charAt(0)
            path = (c + ":").toUpperCase() + path.substring(1)
            path = path.replace(/\//g, "\\")
    }
    return path;
}

// 导出函数，使其可以被其他模块使用
module.exports = convertPath;
