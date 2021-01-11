import React from 'react';
import './App.css';
import { Layout } from 'antd';
import styled from 'styled-components';
import SiderMenu from './components/connections/SiderMenuConnect';
import ContentPage from './components/connections/ContentPageConnect';

const { Footer, Sider, Content } = Layout;

const FixedFooter = styled(Footer)`
    bottom: 0;
    height: 10vh;
    background-color: red;
    position: fixed;
    width: 100vw;
`;

function App() {
    return (
        <Layout>
            <Sider
                style={{ height: '100vh' }}
                theme="light"
            >
                <SiderMenu />
            </Sider>
            <Layout>
                <Content>
                    <ContentPage />
                </Content>
                <FixedFooter>
                    Footer
                </FixedFooter>
            </Layout>
        </Layout>
    );
}

export default App;
