if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/dialecto/sw.js', { scope: '/dialecto/' })})}