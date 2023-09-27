export interface ProjectInterface {
    imageUrl: string;
    technologies: string[];
    title: string;
    about: string;
    status: "Live" | "Cached"
}

export interface SkillInterface {
    title: string;
    skills: string[]
}