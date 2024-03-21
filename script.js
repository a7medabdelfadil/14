function toggleSidebar() {
    var sidebar = document.getElementById('sidebar'),
        toggleSidebaBtn = document.getElementById('toggleSidebarBtn');
        
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px';
        toggleSidebaBtn.textContent = 'Open';
        
    } else {
        sidebar.style.left = '0px';
        toggleSidebaBtn.textContent = 'Close';
    }
}
