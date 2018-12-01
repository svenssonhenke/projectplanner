import * as React from 'react';
import { IProject as Project } from './interfaces/Project';
import { Link } from 'react-router-dom';

export interface ListProps {
    project: Project;
    deleteCallback: (project: Project) => any;
}

class ProjectListItem extends React.Component<ListProps, {}> {


    delete() {
        this.props.deleteCallback(this.props.project);
    }
    
    public render() {
        return (
            <div>
                <a href="#" onClick= {() => this.delete()}>(X)</a>
                <Link to={`/project/${this.props.project.name}`}>
                    <div className="col-sm-3 project-box">
                        <h3>{this.props.project.name}</h3>
                        {this.props.project.items && this.props.project.items.map(p =>
                            <div>
                                {p.name}
                            </div>)}
                    </div>
                </Link>
            </div>
        );
    }
}

export default ProjectListItem;