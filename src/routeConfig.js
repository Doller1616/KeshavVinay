import React from "react";
import Organization from "./Organization";
const LoginPage = React.lazy(() => import("./Login"));
const ProductPage = React.lazy(() => import("./Product"));
const Overview = React.lazy(() => import("./Overview"));

export default [
    {
        path: '/', // Router
        element: <Overview name='Overview' />, // Router
        authKey: 'OVERVIEW', // BE permission
    },
    {
        path: '/analitics', // Router
        element: <Overview name='Analitics' />, // Router
        authKey: 'ANALITICS', // BE permission
    },
    {
        path: '/todos', // Router
        element: <Overview name='TODOs' />, // Router
        authKey: 'TODOS', // BE permission
    },
    {
        authKey: 'ORGANIZATION', // BE permission
        path: '/organization',
        element: <Organization />,
        children: [
            {
                path: 'List', // Router
                element: <Overview name='Organization List' />, // Router
                authKey: 'ORGANIZATION_EDIT' // BE permission
            },
            {
                path: ':id/edit', // Router
                element: <Overview name='Edit Organization' />, // Router
                authKey: 'ORGANIZATION_EDIT' // BE permission
            },
            {
                path: 'add', // Router
                element: <Overview name='Add Organization' />, // Router
                authKey: 'ORGANIZATION_EDIT', // BE permission
            },
        ]
    },
    {
        authKey: 'PRODUCT', // BE permission
        path: '/product',
        element: <ProductPage />
    }

];