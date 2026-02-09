onst menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const collapseBtn = document.getElementById("collapseBtn");

let isCollapsed = false;

// Mobile hamburger toggle
menuBtn?.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
});

// Desktop collapse toggle
collapseBtn?.addEventListener("click", () => {
  isCollapsed = !isCollapsed;

  if (isCollapsed) {
    sidebar.classList.add("w-20");
    sidebar.classList.remove("w-64");
    // Optional: hide nav labels
    sidebar.querySelectorAll("nav a").forEach(a => {
      a.classList.add("text-center");
      a.classList.add("overflow-hidden");
      a.innerHTML = a.innerHTML.charAt(0); // show only first letter or icon
    });
    collapseBtn.innerHTML = '<i class="fas fa-angle-right"></i>';
  } else {
    sidebar.classList.remove("w-20");
    sidebar.classList.add("w-64");
    sidebar.querySelectorAll("nav a").forEach(a => {
      a.classList.remove("text-center", "overflow-hidden");
      // Restore full text (you might need to store original text)
      // For simplicity, reload page can restore text
    });
    collapseBtn.innerHTML = '<i class="fas fa-angle-left"></i>';
  }
});
