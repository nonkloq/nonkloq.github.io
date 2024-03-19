import fs from "fs";
import { join} from 'path';

const SVG_PATH = join(process.cwd(),'public','svgs')

export default function loadSvg(name: string) {
    const filepath = join(SVG_PATH, `${name}.svg`);
    return fs.readFileSync(filepath, "utf8");
}
