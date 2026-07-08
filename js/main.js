const siteNav = document.querySelector(".site-nav");

if (siteNav && !siteNav.querySelector('a[href="bylaws.html"]')) {
  const ebookLink = siteNav.querySelector('a[href="ebook.html"]');
  const bylawsLink = document.createElement("a");
  bylawsLink.href = "bylaws.html";
  bylawsLink.textContent = "정관";

  if (window.location.pathname.endsWith("bylaws.html")) {
    bylawsLink.classList.add("active");
  }

  if (ebookLink) {
    ebookLink.insertAdjacentElement("afterend", bylawsLink);
  } else {
    siteNav.appendChild(bylawsLink);
  }
}

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
