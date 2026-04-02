(function() {
    const isLocal = window.location.hostname === 'localhost' ||
                    window.location.hostname === '127.0.0.1' ||
                    window.location.protocol === 'file:';

    if (!isLocal) return;

    const routes = {
        '/': 'index.html',
        '/work': 'work.html',
        '/about': 'about.html'
    };

    function rewriteLinks() {
        document.querySelectorAll('.nav-btn').forEach(function(link) {
            var href = link.getAttribute('href');
            if (routes[href]) {
                link.setAttribute('href', routes[href]);
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', rewriteLinks);
    } else {
        rewriteLinks();
    }
})();
