const siteNav = document.querySelector(".site-nav");

function ensureNavLink(href, text, afterHref) {
  if (!siteNav || siteNav.querySelector(`a[href="${href}"]`)) {
    return;
  }

  const link = document.createElement("a");
  link.href = href;
  link.textContent = text;

  if (window.location.pathname.endsWith(href)) {
    link.classList.add("active");
  }

  const anchor = siteNav.querySelector(`a[href="${afterHref}"]`);
  if (anchor) {
    anchor.insertAdjacentElement("afterend", link);
  } else {
    siteNav.appendChild(link);
  }
}

ensureNavLink("bylaws.html", "정관", "ebook.html");
ensureNavLink("contributions.html", "기고문", "news.html");

const navToggle = document.querySelector(".nav-toggle");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
