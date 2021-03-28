const fs = require("fs");
const pattern = /(\.\/|\/\w)[\w\/]+/g;
let pathComponents;
try {
    const data = fs.readFileSync("utils/Hub.js", 'utf-8')
    pathComponents = data.match(pattern).map((item) => {
        if (item.slice(-3, 0) !== ".js") {
            return item += ".js"
        }
    })
} catch (err) {
    console.error(err)
}

let tree = [];
if (pathComponents) {
    let folderDef = [];
    for (let jsFile of pathComponents) {
        let pathPart = jsFile.split("/").slice(2);
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
                    "files": []
                };
                if (currentIndex + 2 < isNextFile) {
                    jsObject["dirs"].push(pathPart[currentIndex]);
                } else {
                    let fileName = pathPart[pathPart.length - 1];
                    jsObject["files"].push(fileName);
                }
                tree.push(jsObject);
            } else {
                let jsObject = tree[folderDef.indexOf(currentPath)];
                if (currentIndex + 2 < isNextFile) {
                    if (!jsObject["dirs"].includes(pathPart[currentIndex])) {
                        jsObject["dirs"].push(pathPart[currentIndex]);
                    }
                } else {
                    if (!jsObject["files"].includes(pathPart[pathPart.length - 1])) {
                        let fileName = pathPart[pathPart.length - 1];
                        jsObject["files"].push(fileName);
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
