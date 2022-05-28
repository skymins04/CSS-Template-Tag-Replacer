import assert from "assert";
import fs from "fs";
import path from "path";

const outDir = path.join(".", "output");
let templateFileName: string | null = null;
let templateFilePath: string;
let tagsFileName: string | null = null;
let tagsFilePath: string;

for (const arg of process.argv) {
  if (arg.match(/^--template=.*$/)) {
    templateFileName = arg.split("=")[1];
  } else if (arg.match(/^--tags=.*$/)) {
    tagsFileName = arg.split("=")[1];
  }
}
templateFilePath = path.join(".", "templates", `${templateFileName}.css`);
tagsFilePath = path.join(".", "templates", `${tagsFileName}.json`);

assert.notEqual(templateFileName, "");
assert.notEqual(templateFileName, null);
assert.equal(fs.existsSync(templateFilePath), true);
assert.notEqual(tagsFileName, "");
assert.notEqual(tagsFileName, null);
assert.equal(fs.existsSync(tagsFilePath), true);

let templateContent = fs.readFileSync(templateFilePath, {
  encoding: "utf-8",
});
const tagsContent = JSON.parse(
  fs.readFileSync(tagsFilePath, { encoding: "utf-8" })
);

for (const tag in tagsContent) {
  templateContent = templateContent.replaceAll(`[{@${tag}}]`, tagsContent[tag]);
}

const date = new Date();
fs.writeFileSync(
  path.join(
    outDir,
    `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}_${templateFileName}.css`
  ),
  templateContent
);
