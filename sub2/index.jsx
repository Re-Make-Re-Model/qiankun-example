import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/App.jsx';
import "./src/public-path"

let root;

function render(props) {
    const { container } = props;
    root = createRoot(container ? container.querySelector('#root') : document.querySelector('#root'));
    root.render(<App />);
}

function storeTest(props) {
    props.onGlobalStateChange((value, prev) => console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev), true);
    props.setGlobalState({
        user: 'sub2',
    });
}

if (!window.__POWERED_BY_QIANKUN__) {
    render({});
}

export async function bootstrap() {
    console.log('[sub2] react app bootstraped');
}

export async function mount(props) {
    console.log('[sub2] props from main framework', props);
    storeTest(props);
    render(props);
}

export async function unmount(props) {
    root.unmount();
}
