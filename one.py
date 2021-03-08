import os.path
import re

js_files = []
start = "./src/components"
for current_dir, dirs, files in os.walk(start):
    for file in files:
        if file.endswith('.gbc.js'):
            file = re.sub(r"\.gbc\.js\b", ".js", file)
            if os.path.exists(current_dir + '/' + file):
                js_files.append(current_dir + "/" + file)

three = []
list_def = []
for js_file in js_files:
    path_part = js_file.split('/')[2:]
    for i in path_part[:-1]:
        if i not in list_def:
            list_def.append(i)
            js_object = {"name": i, "dirs": [],
                         "files": [], "path": []}
            if path_part.index(i) < len(path_part)-2:
                js_object["dirs"].append(path_part[path_part.index(i)+1])
            else:
                js_object["files"].append(path_part[-1])
                path = ("/".join(path_part[path_part.index("components"):])).replace("components", ".")
                js_object["path"].append(path)
            three.append(js_object)
        else:
            js_object = three[list_def.index(i)]
            if path_part.index(i) < len(path_part)-2:
                if path_part[path_part.index(i)+1] not in js_object["dirs"]:
                    js_object["dirs"].append(path_part[path_part.index(i)+1])
            else:
                if path_part[path_part.index(i)+1] not in js_object["files"]:
                    js_object["files"].append(path_part[-1])
                    path = ("/".join(path_part[path_part.index("components"):])).replace("components", ".")
                    js_object["path"].append(path)

with open("src/list.json", "w") as txt:
    txt.write(str(three).replace('\'', '\"'))

with open("src/components/Tie.js", "w") as js:
    for component in three:
        reexports = component["files"]
        if len(reexports) != 0:
            for i in range(len(reexports)):
                js.write("export { default as " + reexports[i][:-3] + ' } from  "' + component["path"][i] + '"' + "\n")
