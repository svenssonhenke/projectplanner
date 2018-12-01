import { IProjectItem } from "./ProjectItem";

export interface IProject {
    name: string;
    items: IProjectItem[];
    id: number;
}