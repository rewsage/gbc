const pathComponents = [
    "./components/Test/Test",
    "./components/Test/Test2"];
const fs = require("fs");

let tree = [];
let folderDef = [];
for (let jsFile of pathComponents) {
    let pathPart = jsFile.split("/").slice(1);
    let currentIndex = 0;
    let isNextFile = pathPart.length;
    let currentPath = "";
    for (let folder of pathPart.slice(0, -1)) {
        currentIndex ++
        currentPath += folder + "/";
        if (!folderDef.includes(currentPath)) {
            folderDef.push(currentPath);
            let jsObject = {"name": folder, "dirs": [],
                            "files": [], "path": []};
            if (currentIndex + 1 < isNextFile) {
                jsObject["dirs"].push(pathPart[currentIndex]);
            } else {
                let fileName = pathPart[pathPart.length-1] + ".js";
                jsObject["files"].push(fileName);
                let pathFile = "./" + currentPath + fileName;
                jsObject["path"].push(pathFile);
            }
            tree.push(jsObject);
        } else {
            let jsObject = tree[folderDef.indexOf(currentPath)];
            if (currentIndex + 1 < isNextFile) {
                if (!jsObject["dirs"].includes(pathPart[currentIndex])) {
                    jsObject["dirs"].push(pathPart[currentIndex]);
                }
            } else {
                if (!jsObject["files"].includes(pathPart[pathPart.length-1])) {
                    let fileName = pathPart[pathPart.length-1] + ".js";
                    jsObject["files"].push(fileName);
                    let pathFile = "./" + currentPath + fileName;
                    jsObject["path"].push(pathFile);
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


