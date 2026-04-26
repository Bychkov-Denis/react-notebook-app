import { lazy } from 'react';
const ComponentsPage = lazy(() => import('./pages/ComponentsPage.jsx'));
const ContextPage = lazy(() => import('./pages/ContextPage.jsx'));
const EventsPage = lazy(() => import('./pages/EventsPage.jsx'));
const FragmentPage = lazy(() => import('./pages/FragmentPage.jsx'));
const HocPage = lazy(() => import('./pages/HocPage.jsx'));
const KeyPage = lazy(() => import('./pages/KeyPage.jsx'));
const LifeCyclePage = lazy(() => import('./pages/LifeCyclePage.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'));
const OptimizationPage = lazy(() => import('./pages/OptimizationPage.jsx'));
const ProjectStructurePage = lazy(
  () => import('./pages/ProjectStructurePage.jsx'),
);
const PropsPage = lazy(() => import('./pages/PropsPage.jsx'));
const RefsPage = lazy(() => import('./pages/RefsPage.jsx'));
const RoutingPage = lazy(() => import('./pages/RoutingPage.jsx'));
const StatePage = lazy(() => import('./pages/StatePage.jsx'));
const StoragesPage = lazy(() => import('./pages/StoragesPage.jsx'));
const VirtualDomPage = lazy(() => import('./pages/VirtualDomPage.jsx'));
const MainPage = lazy(() => import('./pages/MainPage.jsx'));

import {
  COMPONENTS_ROUTE,
  CONTEXT_ROUTE,
  EVENTS_ROUTE,
  FRAGMENT_ROUTE,
  HOC_ROUTE,
  KEY_ROUTE,
  LIFECYCLE_ROUTE,
  MAIN_ROUTE,
  OPTIMIZATION_ROUTE,
  PROJECT_STRUCTURE_ROUTE,
  PROPS_ROUTE,
  REFS_ROUTE,
  ROUTING_ROUTE,
  STATE_ROUTE,
  STORAGES_ROUTE,
  VIRTUALDOM_ROUTE,
} from './utils/consts.js';

export const appRoutes = [
  { element: <MainPage />, path: MAIN_ROUTE },
  {
    element: <ProjectStructurePage />,
    path: PROJECT_STRUCTURE_ROUTE,
    navLinkText: 'Project Structure',
  },
  {
    element: <VirtualDomPage />,
    path: VIRTUALDOM_ROUTE,
    navLinkText: 'Virtual DOM',
  },
  {
    element: <ComponentsPage />,
    path: COMPONENTS_ROUTE,
    navLinkText: 'Components',
  },
  { element: <PropsPage />, path: PROPS_ROUTE, navLinkText: 'Props' },
  {
    element: <StatePage />,
    path: STATE_ROUTE,
    navLinkText: 'State (useState)',
  },
  {
    element: <LifeCyclePage />,
    path: LIFECYCLE_ROUTE,
    navLinkText: 'LifeCycle (useEffect)',
  },
  { element: <EventsPage />, path: EVENTS_ROUTE, navLinkText: 'Events' },
  { element: <KeyPage />, path: KEY_ROUTE, navLinkText: 'Key' },
  { element: <FragmentPage />, path: FRAGMENT_ROUTE, navLinkText: 'Fragment' },
  { element: <RefsPage />, path: REFS_ROUTE, navLinkText: 'Refs (useRef)' },
  {
    element: <OptimizationPage />,
    path: OPTIMIZATION_ROUTE,
    navLinkText: 'Optimization',
  },
  {
    element: <ContextPage />,
    path: CONTEXT_ROUTE,
    navLinkText: 'Context (useContext)',
  },
  { element: <StoragesPage />, path: STORAGES_ROUTE, navLinkText: 'Storages' },
  { element: <HocPage />, path: HOC_ROUTE, navLinkText: 'HOC' },
  {
    element: <RoutingPage />,
    path: ROUTING_ROUTE,
    navLinkText: 'React Router',
  },
  { element: <NotFoundPage />, path: '*' },
];
