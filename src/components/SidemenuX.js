import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom';
import Sider from 'antd/es/layout/Sider'
import React, { useState } from 'react'
import sidemenuConfig from './sidemenuConfig';

export default function SidemenuX() {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const permissions = new Set(['DASHBOARD', 'DASHBOARD.ANALITICS', 'DASHBOARD.OVERVIEW', 'DASHBOARD.TODOS',
                         'ORGANIZATION', 'ORGANIZATION.LIST', 'ORGANIZATION.EDIT', 'ORGANIZATION.ADD',
                         'PRODUCT'
                        ]);

    const cbFn = ({item = {} }) => {
        navigate(item?.props?.value);
    }

    const hasAccess = (authKey) => permissions.has(authKey);
    
    const items = sidemenuConfig.reduce((acc, parent ) => {
       const children = parent?.children?.reduce((ac, child) => 
          (hasAccess(child?.authKey) ? [...ac, child] : ac),[]);
       
       return hasAccess(parent?.authKey) ? [ ...acc, {...parent, children }] : acc;
    }, []);

    return (<Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ height: 32, margin: 16, background: '#fff', borderRadius: '10px',padding: '2px 5px'}}>
        <img src="https://static-mh.content.disney.io/matterhorn/assets/logos/disney_logo_dark-baa807690db7.png" alt="Disney" height="100%" width="100%"></img>
            </div>
        <Menu theme="dark" mode="inline" items={items} onSelect={cbFn}/>
    </Sider>
    )
}
