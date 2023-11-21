import { createRoot } from 'react-dom/client';
import React from 'react';
import '../../assets/fonts/coolvetica rg it.otf';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Home from './routes/Home';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [{ path: '/', element: <Home /> }],
  },
]);

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);

// Setting dark mode method exposed from preload
window.darkMode.activate();
