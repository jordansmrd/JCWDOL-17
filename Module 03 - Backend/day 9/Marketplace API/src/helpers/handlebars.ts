/** @format */

import { readFileSync } from "fs";
import { join } from "path";
import handlebars from "handlebars";
export const hbs = (fileName: string) => {
  const templatePath = join(__dirname, "../templates/", fileName);
  console.log(templatePath, "test");

  const templateSource = readFileSync(templatePath, "utf-8");
  return handlebars.compile(templateSource);
};
