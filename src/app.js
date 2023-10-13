import html from './app.html?raw';
import funciones from './shared/sidebar/sidebar.shared';
import sidebarHTML from './shared/sidebar/sidebar.shared.html?raw'

export const App = ( elementoRender ) => {

    const sumas = document.createElement('div');
    sumas.innerHTML = html;
    document.querySelector( elementoRender ).append( sumas );

    const sidebar = document.createElement('div');
    sidebar.innerHTML = sidebarHTML

    document.querySelector( '#sidebar' ).append( sidebar );
    
    funciones.fechaCopy()
}
