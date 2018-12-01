import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import ProjectPage from './components/Project';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/project/:id' component={ ProjectPage } />
</Layout>;
