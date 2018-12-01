import * as React from "react";

import ProjectListItem from "./ProjectListItem";
import { IProject as Project } from './interfaces/Project';

interface ProjectListState {
    projects: Project[];
    deleteCallback: (project: Project) => any;
}

export class ProjectList extends React.Component<ProjectListState, {}> {

    CreateProjectList(projects: Project[]) {
        return projects.map( p => 
            <ProjectListItem 
                project={p} 
                deleteCallback={this.props.deleteCallback}
            />
        )
    }

    public render(){
        return( <div>
            {this.CreateProjectList(this.props.projects)}
        </div>);
    }
}