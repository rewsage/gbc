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
for file_js in js_files:
    file_path = file_js.split('/')[1:]
    for i in file_path[:-1]:
        if i not in list_def:
            list_def.append(i)
            js_object = dict()
            js_object["name"] = i
            js_object["dirs"] = []
            js_object["files"] = []
            js_object["path"] = []
            if file_path.index(i) < len(file_path)-2:
                js_object["dirs"].append(file_path[file_path.index(i)+1])
            else:
                js_object["files"].append(file_path[-1])
                full_path = file_js.split("/")
                path = ("/".join(full_path[full_path.index("components"):])).replace("components", ".")
                js_object["path"].append(path)
            three.append(js_object)
        else:
            js_object = three[list_def.index(i)]
            if file_path.index(i) < len(file_path)-2:
                if file_path[file_path.index(i)+1] not in js_object["dirs"]:
                    js_object["dirs"].append(file_path[file_path.index(i)+1])
            else:
                if file_path[file_path.index(i)+1] not in js_object["files"]:
                    js_object["files"].append(file_path[-1])
                    full_path = file_js.split("/")
                    path = ("/".join(full_path[full_path.index("components"):])).replace("components", ".")
                    js_object["path"].append(path)

with open("src/list.json", "w") as txt:
    txt.write(str(three).replace('\'', '\"'))

with open("src/components/Tie.js", "w") as js:
    for component in three:
        if len(component["files"]) != 0:
            for i in range(len(component["files"])):
                js.write("import " + component["files"][i][:-3] + ' from  "' + component["path"][i] + '"' + "\n")
                js.write("export " + "{" + component["files"][i][:-3] + "}")
