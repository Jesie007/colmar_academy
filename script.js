const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// Login function
document.addEventListener("DOMContentLoaded", () => {
  const openLoginPopupButton = document.getElementById("openLoginPopup");
  const loginPopup = document.getElementById("loginPopup");
  const closeButton = document.querySelector(".close");
  const loginForm = document.getElementById("loginForm");

  openLoginPopupButton.addEventListener("click", () => {
    loginPopup.style.display = "flex";
  });

  closeButton.addEventListener("click", () => {
    loginPopup.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === loginPopup) {
      loginPopup.style.display = "none";
    }
  });

  loginForm.addEventListener("sbumit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log("Username:", username);
    console.log("Password:", password);

    loginPopup.style.display = "none";
  });
});
