import React from 'react';
import { Menu } from 'antd';

export const siderStates = {
    Search: 1,
    Saved: 2,
};

const siderMenu = (props) => {
    return (
        <div>
            <Menu
                mode="inline"
                defaultSelectedKeys={['Search']}
                style={{ 'margin-top': '20px' }}
            >
                <Menu.Item key="Search" onClick={() => { props.changeSelected(siderStates.Search); }}>Search</Menu.Item>
                <Menu.Item key="Saved" onClick={() => { props.changeSelected(siderStates.Saved); }}>Saved</Menu.Item>
            </Menu>
        </div>
    );
};

export default siderMenu;
