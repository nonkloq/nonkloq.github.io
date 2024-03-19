
export type Experience = {
    title: string, 
    date: Date,
    range: string,
    company: string,
    link: string, 
    skills: string[],
    content: string
}


export type Project = {
    name: string,
    date: Date,
    range: string,
    skills: string[],
    tags: string[],
    images: string[],
    shortDescription: string,
    links: {[key: string]: string};
    content: string,

};

export type SocialLinks = {
    name: string,
    link: string,
}