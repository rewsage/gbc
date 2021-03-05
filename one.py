import os.path
import re

js_files = []
start = "./src"
for current_dir, dirs, files in os.walk(start):
    for file in files:
        if file.endswith('.gbc.js'):
            file = re.sub(r"\.gbc\.js\b", ".js", file)
            if os.path.exists(current_dir + '/' + file):
                js_files.append(current_dir + "/" + file)

level = -1
three = []
list_def = []
for file_js in js_files:
    file_path = file_js.split('/')
    for i in file_path[:-1]:
        if i not in list_def:
            list_def.append(i)
            level += 1
            d = dict()
            d["id"] = level
            d["name"] = i
            d["dirs"] = []
            d["files"] = []
            if file_path.index(i) < len(file_path)-2:
                d["dirs"].append(file_path[file_path.index(i)+1])
            else:
                d["files"].append(file_path[-1])
                d["path"] = file_js
            three.append(d)
        else:
            d = three[list_def.index(i)]
            if file_path.index(i) < len(file_path)-2:
                if file_path[file_path.index(i)+1] not in d["dirs"]:
                    d["dirs"].append(file_path[file_path.index(i)+1])
            else:
                if file_path[file_path.index(i)+1] not in d["files"]:
                    d["files"].append(file_path[-1])
                    d["path"] = file_js

with open("src/list.json", "w") as txt:
    txt.write(str(three[1:]).replace('\'', '\"'))
