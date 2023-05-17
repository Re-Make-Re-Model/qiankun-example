import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/App.jsx';
import { initGlobalState, registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start } from 'qiankun';
import { BrowserRouter } from "react-router-dom"

export const getToken = () => 'test_token'

const container = document.getElementById('subapp-container');
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <App loading={true} />
        </React.StrictMode>
    </BrowserRouter>
);

const loader = (loading) => root.render(<App loading={loading} />);

registerMicroApps([
    {
        name: 'sub1',
        entry: '//localhost:5000',
        container: '#subapp-viewport',
        loader,
        activeRule: '/sub1',
        props: { testProp1: '111', getToken, }
    },
    {
        name: 'sub2',
        entry: '//localhost:8000',
        container: '#subapp-viewport',
        loader,
        activeRule: '/sub2',
    }
], {
    beforeLoad: [
        (app) => {
            console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
        },
    ],
    beforeMount: [
        (app) => {
            console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
        },
    ],
    afterUnmount: [
        (app) => {
            console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
        },
    ],
});

const { onGlobalStateChange, setGlobalState } = initGlobalState({
    user: 'home',
});

onGlobalStateChange((value, prev) => console.log('[onGlobalStateChange - master]:', value, prev));

/**
 * Step3 设置默认进入的子应用
 */
setDefaultMountApp('/sub1');

/**
 * Step4 启动应用
 */
start();

runAfterFirstMounted(() => {
    console.log('[MainApp] first app mounted');
});