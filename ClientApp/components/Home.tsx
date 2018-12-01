import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { ProjectList } from './ProjectList';
import { IProject as Project } from './interfaces/Project';

interface ProjectListState {
    projects: Project[];
}

export class Home extends React.Component<RouteComponentProps<{}>, ProjectListState> {

    constructor() {
        super();

        this.state = { projects: [] };
    }

    delete = (project: Project) => {
        fetch(`api/PlannerApi/Delete/${project.id}`)
            .then(response => response.json() as Promise<Project>)
            .then(data => {
                let newState = this.state.projects.filter(x => x != project);
                this.setState({ projects: newState });
            });
    }

    add = () => {

        fetch(`api/PlannerApi/Add`)
            .then(response => response.json() as Promise<Project>)
            .then(data => {
                let newState = this.state.projects.slice();
                newState.push(data);
                this.setState({ projects: newState });
            });
    }

    componentDidMount() {
        fetch('api/PlannerApi/Projects')
            .then(response => response.json() as Promise<Project[]>)
            .then(data => {
                console.log("data is: ", data);
                this.setState({ projects: data });
            });
    }

    public render() {
        return (<div>
            <h1>Project planner v0.1</h1>
            <div className="row">
                <div className="col-sm-12">
                    <h2>Project list</h2>
                    <a href="#" onClick={() => this.add()}>ADD ONE</a>
                    <div className="row">
                        <ProjectList
                            projects={this.state.projects}
                            deleteCallback = {this.delete.bind(this)}
                        />
                    </div>
                </div>
            </div>
        </div>);
    }
}
