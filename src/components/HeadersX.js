import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom';
import { LogoutOutlined } from '@ant-design/icons';
import { SuperContext } from '../SuperContainer'
import { Layout, Menu } from 'antd';
const { Header } = Layout;

export default function Headers() {
    const { dispatch } = useContext(SuperContext);
    const navigate = useNavigate();
    const headerItems = [
        {
            key: 1,
            label: "Logout",
            icon: <LogoutOutlined />,
            onClick: () => {
                localStorage.clear();
                navigate('/');
                dispatch({ access: false })
            }
        }
    ];

    return (
        <Header className="header">
            <div className="logo" >
                </div>
            <Menu theme="dark" mode="horizontal" direction='ltr'
                style={{ justifyContent: 'flex-end' }}
                items={headerItems} />
        </Header>
    )
}
