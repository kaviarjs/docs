import * as path from "path";
import * as fs from "fs";
import { map, IElement } from "./blueprint";

const PACKAGE_DIR = path.join(__dirname, "..", "..", "packages");
const DOCS_DIR = path.join(__dirname, "..", "docs");
const DOC_FILE = "DOCUMENTATION.md";

const sidebar = {};
for (const sidebarGroup in map) {
  const elements = map[sidebarGroup];

  // write sidebar.js
  sidebar[sidebarGroup] = processSidebarElements(elements);
}

const contents = `
module.exports = {
  someSidebar: ${JSON.stringify(sidebar, null, 4)}
}
`;

console.log(contents);

function processSidebarElements(elements: IElement[]) {
  const result = [];
  elements.forEach((element) => {
    if (element.package) {
      result.push(`generated-${element.id}`);

      const prefix = `
      ---
      id: package-${element.id}
      title: ${element.title}
      ---

      `;

      const contents =
        prefix +
        fs.readFileSync(path.join(PACKAGE_DIR, element.package, DOC_FILE));

      fs.writeFileSync(
        path.join(DOCS_DIR, `generated-${element.id}.md`),
        contents
      );
    }
  });
}
