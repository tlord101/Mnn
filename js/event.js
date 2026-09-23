// Event Detail Page JS

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
});

function initTabs() {
  const tabs = document.querySelectorAll('.event-tabs .tab');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Show matching content
      contents.forEach(content => {
        content.classList.toggle('active', content.id === target);
      });

      // Scroll to top of content
      window.scrollTo({ top: 200, behavior: 'smooth' });
    });
  });
}
