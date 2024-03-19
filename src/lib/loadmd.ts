import { Project, Experience } from "@/types";
import fs from "fs";
import { join, extname } from 'path';
import matter from 'gray-matter';

function listMDFiles(contentDirectory: string) {
    const files = fs.readdirSync(contentDirectory);
    return files.filter(file => extname(file) === '.md');
}

function baseExtractContent (fileName: string, contentDirectory: string){
    const fullPath = join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const {data, content} = matter(fileContents);
    
    // console.log(data.date)
    // if (data.date){
    //     const [day, month ,year] = data.date.split('-').map(Number);
    //     data.date = new Date(year, month - 1, day);
    // }
    
    return {...data, content};
}

function extractContentProject(fileName: string, contentDirectory: string): Project {
    return baseExtractContent(fileName, contentDirectory) as Project;

}
function extractContentExperience(fileName: string, contentDirectory: string): Experience {
    return baseExtractContent(fileName, contentDirectory) as Experience;

}


export function getAllPorjects(): Project[] {
    const contentDirectory = join(process.cwd(), "_content", "projects");
    const files = listMDFiles(contentDirectory);
    let contents = files
        .map((file) => extractContentProject(file, contentDirectory))
        
        .sort((project1, project2) => (project1.date < project2.date ? -1 : 1));
    
    return contents;
}


export function getAllExperiences(): Experience[] {
    const contentDirectory = join(process.cwd(), "_content", "exp");
    const files = listMDFiles(contentDirectory);
    let contents = files
        .map((file) => extractContentExperience(file, contentDirectory))
        
        .sort((exp1, exp2) => (exp1.date > exp2.date ? -1 : 1));
    
    return contents;
}
