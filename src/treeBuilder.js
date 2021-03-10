const fs = require("fs");
const pattern = /(\.\/|\/\w)[\w\/]+/g;
let pathComponents;
try {
    const data = fs.readFileSync("Hub.js", 'utf-8')
    pathComponents = data.match(pattern).map((item) => {
        if (item.slice(-3, 0) !== ".js") {
            return item += ".js"
        }
    })
} catch (err) {
    console.error(err)
}

let trueComponents = []
for (let path of pathComponents) {
    if (path[0] === ".") {
        if (!fs.existsSync(path)) {
            console.log(path + " file not found")
        } else {
            trueComponents.push(path)
        }
    } else {
        if (!fs.existsSync(path)) {
            console.log(path + " file not found")
        } else {
            let parts = path.split("/")
            let relativePath = "./" + parts.slice(parts.indexOf("components")).join("/")
            trueComponents.push(relativePath)
        }
    }
}

let tree = [];
if (trueComponents) {
    let folderDef = [];
    for (let jsFile of trueComponents) {
        let pathPart = jsFile.split("/").slice(1);
        let currentIndex = 0;
        let isNextFile = pathPart.length;
        let currentPath = "";
        for (let folder of pathPart.slice(0, -1)) {
            currentIndex++
            currentPath += folder + "/";
            if (!folderDef.includes(currentPath)) {
                folderDef.push(currentPath);
                let jsObject = {
                    "name": folder, "dirs": [],
                    "files": [], "path": []
                };
                if (currentIndex + 1 < isNextFile) {
                    jsObject["dirs"].push(pathPart[currentIndex + 1]);
                } else {
                    let fileName = pathPart[pathPart.length - 1];
                    jsObject["files"].push(fileName);
                    let pathFile = "./" + currentPath + fileName;
                    jsObject["path"].push(pathFile);
                }
                tree.push(jsObject);
            } else {
                let jsObject = tree[folderDef.indexOf(currentPath)];
                if (currentIndex + 1 < isNextFile) {
                    if (!jsObject["dirs"].includes(pathPart[currentIndex + 1])) {
                        jsObject["dirs"].push(pathPart[currentIndex + 1]);
                    }
                } else {
                    if (!jsObject["files"].includes(pathPart[pathPart.length - 1])) {
                        let fileName = pathPart[pathPart.length - 1];
                        jsObject["files"].push(fileName);
                        let pathFile = "./" + currentPath + fileName;
                        jsObject["path"].push(pathFile);
                    }
                }
            }
        }
    }
}

try {
    fs.writeFileSync('list.json', JSON.stringify(tree));
} catch (err) {
    console.error(err);
}


