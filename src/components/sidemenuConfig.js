import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

export default [
    {
        key: 11, //Sidemenu
        label: 'Overview', //Sidemenu
        value: '/',
        authKey: 'DASHBOARD.OVERVIEW', // BE permission
        icon: <DesktopOutlined />
    },
    {
        key: 12, //Sidemenu
        label: 'Analitics', //Sidemenu
        value: '/analitics',
        authKey: 'DASHBOARD.ANALITICS', // BE permission
        icon: <PieChartOutlined />
    },
    {
        key: 13, //Sidemenu
        label: 'TODOs', //Sidemenu
        value: '/todos',
        authKey: 'DASHBOARD.TODOS', // BE permission
        icon: <TeamOutlined />
    },
    {
        key: 2,
        label: 'Organization',
        authKey: 'ORGANIZATION', // BE permission
        // value: '/organization',
        icon: <UserOutlined />,
        children: [
            {
                key: 21, //Sidemenu
                label: 'List', //Sidemenu
                icon: <FileOutlined />, // Sidemenu
                value: '/organization/list',
                authKey: 'ORGANIZATION.LIST' // BE permission
            },
            {
                key: 23, //Sidemenu
                label: 'Add', //Sidemenu
                value: '/organization/add',
                authKey: 'ORGANIZATION.ADD', // BE permission
                icon: <FileOutlined />
            },
        ]
    },
    {
        label: 'Product',
        authKey: 'PRODUCT', // BE permission
        value: '/product',
        icon: <FileOutlined />,
    }

];