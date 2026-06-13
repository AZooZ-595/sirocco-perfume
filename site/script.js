/* ============================================================
   SIROCCO — interactions
   ============================================================ */
(function () {
  "use strict";

  /* ---------- scroll reveal ---------- */
  const reveals = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
  );
  reveals.forEach((el) => io.observe(el));

  /* ---------- scent profile bars (animate when in view) ---------- */
  const bars = document.querySelectorAll(".bar-fill");
  const barIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.width = e.target.dataset.w;
          barIO.unobserve(e.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  bars.forEach((b) => barIO.observe(b));

  /* ---------- size selector ---------- */
  const sizeOpts = document.querySelectorAll(".size-opt");
  const btnPrice = document.getElementById("btnPrice");
  const priceTag = document.getElementById("priceTag");
  const sbLabel = document.getElementById("sbLabel");
  let current = { price: 145, label: "50ml — Full Size" };

  sizeOpts.forEach((opt) => {
    opt.addEventListener("click", () => {
      sizeOpts.forEach((o) => o.classList.remove("active"));
      opt.classList.add("active");
      current.price = parseInt(opt.dataset.price, 10);
      current.label = opt.dataset.label;
      btnPrice.textContent = "$" + current.price;
      sbLabel.textContent = current.label.replace(" — ", " · $").replace(/—.*/, "") ;
      sbLabel.textContent = current.label.split(" — ")[0] + " · $" + current.price;
      // keep the big price tag focused on full size for hierarchy, but reflect selection
      const sub = current.label.split(" — ")[1] || "";
      priceTag.innerHTML = "$" + current.price + ' <small>/ ' + sub + "</small>";
    });
  });

  /* ---------- cart ---------- */
  let cart = 0;
  const cartCount = document.getElementById("cartCount");
  const toast = document.getElementById("toast");
  let toastTimer;

  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
  }
  function addToCart(label) {
    cart += 1;
    cartCount.textContent = cart;
    cartCount.animate(
      [{ transform: "scale(1)" }, { transform: "scale(1.5)" }, { transform: "scale(1)" }],
      { duration: 360, easing: "ease-out" }
    );
    showToast("Added — " + label);
  }

  document.getElementById("addToCart").addEventListener("click", () =>
    addToCart(current.label + " · $" + current.price)
  );
  document.getElementById("stickyAdd").addEventListener("click", () =>
    addToCart(current.label + " · $" + current.price)
  );
  document.getElementById("addSample").addEventListener("click", () =>
    addToCart("2ml Try at Home · $6")
  );
  document.getElementById("navCart").addEventListener("click", () => {
    showToast(cart ? "Bag: " + cart + " item(s)" : "Your bag is empty");
  });

  /* ---------- sticky mobile buy bar ---------- */
  const stickyBuy = document.getElementById("stickyBuy");
  const buySection = document.getElementById("buy");
  const stickyIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        // show the sticky bar once the hero is passed but before footer, on small screens
        const small = window.matchMedia("(max-width:900px)").matches;
        if (small && e.boundingClientRect.top < 0) {
          stickyBuy.classList.add("show");
        } else {
          stickyBuy.classList.remove("show");
        }
      });
    },
    { threshold: 0 }
  );
  // trigger based on the hero leaving the viewport
  const hero = document.querySelector(".hero");
  if (hero) stickyIO.observe(hero);

  // also hide sticky bar when footer in view
  const footer = document.querySelector("footer");
  if (footer) {
    new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) stickyBuy.classList.remove("show");
        });
      },
      { threshold: 0.1 }
    ).observe(footer);
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll(".faq-q").forEach((q) => {
    q.addEventListener("click", () => {
      const item = q.parentElement;
      const open = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("open"));
      if (!open) item.classList.add("open");
    });
  });

  /* ---------- email capture ---------- */
  document.getElementById("capForm").addEventListener("submit", (e) => {
    e.preventDefault();
    e.target.querySelector("input").value = "";
    showToast("You're in — check your inbox for 10% off.");
  });

  /* ---------- reviews marquee (duplicate cards for seamless loop) ---------- */
  document.querySelectorAll(".rev-row").forEach((row) => {
    const clone = row.innerHTML;
    row.insertAdjacentHTML("beforeend", clone);
    // hide the duplicated half from assistive tech / tab order
    Array.from(row.children)
      .slice(row.children.length / 2)
      .forEach((el) => el.setAttribute("aria-hidden", "true"));
  });

  /* ---------- nav background on scroll ---------- */
  const nav = document.querySelector("header.nav");
  window.addEventListener(
    "scroll",
    () => {
      nav.style.background =
        window.scrollY > 40 ? "rgba(14,11,8,.92)" : "rgba(14,11,8,.72)";
    },
    { passive: true }
  );
})();
