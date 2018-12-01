import * as React from 'react';
import { IProject as ProjectState } from './interfaces/Project';
import { RouteComponentProps } from 'react-router';
import { IProjectItem as ProjectItem } from './interfaces/ProjectItem';

interface MatchParams {
    id: string;
}

class ProjectPage extends React.Component<RouteComponentProps<MatchParams>, ProjectState> {

    constructor() {
        super();
        this.state = { name: "init", items: [], id: 0 };
    }

    componentDidMount() {

        fetch(`api/PlannerApi/Project/${this.props.match.params.id}`)
            .then(response => response.json() as Promise<ProjectState>)
            .then(data => {
                this.setState({ name: data.name, items: data.items, id: data.id });
            });

    }

    renderItems = (items: ProjectItem[]) => items.map( (item) => {
        return <p>{item.name}</p>;
    });

render() {
    var list = this.renderItems(this.state.items);
    return (
        <div className="project">
            project is {this.state.name}
            <div>
                {list}
            </div>

        </div>
    );

}
}

export default ProjectPage;