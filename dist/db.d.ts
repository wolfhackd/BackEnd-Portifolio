interface Technology {
    name: string;
    color: string;
    icon: any;
}
interface Technologies {
    [key: string]: Technology;
}
interface Challenge {
    title: string;
    text: string;
}
interface Project {
    title: string;
    description: string;
    images: string[];
    technologies: string[];
    link: string;
    id: string;
    created: string;
    fastDescription: string;
    overview: string;
    challenges: Challenge[];
}
export declare const TECHNOLOGIES: Technologies;
export declare const PROJECTS: Project[];
export {};
//# sourceMappingURL=db.d.ts.map