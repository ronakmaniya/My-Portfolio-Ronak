async function loadPartial(selector, filePath) {
  const target = document.querySelector(selector);
  if (!target) {
    return;
  }

  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Failed to load ${filePath}: ${response.status}`);
    }

    target.innerHTML = await response.text();
  } catch (error) {
    console.error(error);
  }
}

function setActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll(".nav-links a");

  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) {
      return;
    }

    if (href === currentPage) {
      link.classList.remove("a1");
      link.classList.add("a2");
    } else if (link.classList.contains("a2")) {
      link.classList.remove("a2");
      link.classList.add("a1");
    }
  });
}

(async function initializeLayout() {
  await Promise.all([
    loadPartial("#site-header", "partials/header.html"),
    loadPartial("#site-footer", "partials/footer.html"),
  ]);
  setActiveNavLink();
})();
