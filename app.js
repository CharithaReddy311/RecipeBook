// ============================================================
// THYME & AGAIN — app logic
// Everything lives in memory for this session. No backend, no
// storage — sign up, explore, and it resets next time you load
// the page. Swap the USERS/state layer for real API calls
// whenever this is ready to grow up.
// ============================================================

// ---- "database" (in memory only) --------------------------
const USERS = [
  { name: "Demo Cook", email: "demo@thyme.com", password: "demo123", saved: new Set(["pancakes", "tomato-soup", "choc-chip-cookies"]) }
];

const state = {
  currentUser: null,
  nav: "browse",
  category: "All",
  search: "",
  detailId: null
};

// ---- small helpers ------------------------------------------
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

function showToast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => el.classList.remove("show"), 2200);
}

function initials(name) {
  return name.trim().split(/\s+/).map(p => p[0].toUpperCase()).slice(0, 2).join("");
}

function findRecipe(id) {
  return RECIPES.find(r => r.id === id);
}

// ---- auth ------------------------------------------------------
function switchAuthTab(which) {
  const isLogin = which === "login";
  $("#tab-login").classList.toggle("active", isLogin);
  $("#tab-signup").classList.toggle("active", !isLogin);
  $("#form-login").classList.toggle("hidden", !isLogin);
  $("#form-signup").classList.toggle("hidden", isLogin);
  $("#auth-switch-text").innerHTML = isLogin
    ? `New here? <button type="button" id="link-to-signup">Create an account</button>`
    : `Already have a binder? <button type="button" id="link-to-login">Log in</button>`;
  $("#login-error").innerHTML = "";
  $("#signup-error").innerHTML = "";
  bindSwitchLinks();
}

function bindSwitchLinks() {
  const toSignup = $("#link-to-signup");
  const toLogin = $("#link-to-login");
  if (toSignup) toSignup.addEventListener("click", () => switchAuthTab("signup"));
  if (toLogin) toLogin.addEventListener("click", () => switchAuthTab("login"));
}

function handleLogin(e) {
  e.preventDefault();
  const email = $("#login-email").value.trim().toLowerCase();
  const password = $("#login-password").value;
  const user = USERS.find(u => u.email.toLowerCase() === email && u.password === password);
  if (!user) {
    $("#login-error").innerHTML = `<div class="form-error">That email and password don't match anything in the binder. Try the demo account, or sign up.</div>`;
    return;
  }
  state.currentUser = user;
  enterApp();
}

function handleSignup(e) {
  e.preventDefault();
  const name = $("#signup-name").value.trim();
  const email = $("#signup-email").value.trim().toLowerCase();
  const password = $("#signup-password").value;
  const errorBox = $("#signup-error");

  if (password.length < 6) {
    errorBox.innerHTML = `<div class="form-error">Passwords need at least 6 characters.</div>`;
    return;
  }
  if (USERS.some(u => u.email.toLowerCase() === email)) {
    errorBox.innerHTML = `<div class="form-error">That email already has a binder. Try logging in instead.</div>`;
    return;
  }
  const user = { name, email, password, saved: new Set() };
  USERS.push(user);
  state.currentUser = user;
  enterApp();
}

function enterApp() {
  $("#view-auth").classList.add("hidden");
  $("#view-app").classList.remove("hidden");
  $("#topbar-username").textContent = state.currentUser.email;
  $("#greeting-name").textContent = state.currentUser.name.split(" ")[0];
  $("#form-login").reset();
  $("#form-signup").reset();
  goTo("browse");
  showToast(`Welcome, ${state.currentUser.name.split(" ")[0]}.`);
}

function logout() {
  state.currentUser = null;
  state.detailId = null;
  state.search = "";
  state.category = "All";
  $("#view-app").classList.add("hidden");
  $("#view-auth").classList.remove("hidden");
  switchAuthTab("login");
}

// ---- navigation --------------------------------------------------
function goTo(viewName) {
  state.nav = viewName;
  ["browse", "detail", "saved", "profile"].forEach(v => {
    $(`#view-${v}`).classList.toggle("hidden", v !== viewName);
  });
  $$(".topbar-nav button").forEach(b => b.classList.toggle("active", b.dataset.nav === viewName));

  if (viewName === "browse") renderBrowse();
  if (viewName === "saved") renderSaved();
  if (viewName === "profile") renderProfile();
}

function openRecipe(id) {
  state.detailId = id;
  goTo("detail");
  renderDetail();
}

// ---- rendering: category tabs -------------------------------------
function renderCategoryTabs() {
  $("#category-tabs").innerHTML = CATEGORIES.map(cat => `
    <button class="tab-chip ${cat === state.category ? "active" : ""}" data-cat="${cat}" type="button">${cat}</button>
  `).join("");
  $$(".tab-chip").forEach(btn => {
    btn.addEventListener("click", () => {
      state.category = btn.dataset.cat;
      renderBrowse();
    });
  });
}

// ---- rendering: recipe card ---------------------------------------
function tagClass(tag) {
  if (tag === "Spicy") return "tag spicy";
  if (tag === "Quick") return "tag quick";
  return "tag";
}

function recipeCardHTML(r) {
  const saved = state.currentUser.saved.has(r.id);
  return `
    <article class="recipe-card" data-id="${r.id}" tabindex="0" role="button" aria-label="Open ${r.title}">
      <div class="recipe-card-top">
        ${r.icon}
        <button class="recipe-card-save ${saved ? "saved" : ""}" data-save="${r.id}" type="button" aria-label="${saved ? "Remove from recipe box" : "Save to recipe box"}">${saved ? "♥" : "♡"}</button>
      </div>
      <div class="recipe-card-body">
        <div class="recipe-card-title">${r.title}</div>
        <div class="recipe-card-blurb">${r.blurb}</div>
        <div class="recipe-card-tags">${r.tags.map(t => `<span class="${tagClass(t)}">${t}</span>`).join("")}</div>
        <div class="recipe-card-meta">
          <span class="mono">${r.prep + r.cook} min</span>
          <span class="mono">${r.servings} srv</span>
          <span class="mono">${r.difficulty}</span>
        </div>
      </div>
    </article>
  `;
}

function bindCardEvents(container) {
  $$(`${container} .recipe-card`).forEach(card => {
    card.addEventListener("click", (e) => {
      if (e.target.closest("[data-save]")) return;
      openRecipe(card.dataset.id);
    });
    card.addEventListener("keydown", (e) => {
      if ((e.key === "Enter" || e.key === " ") && !e.target.closest("[data-save]")) {
        e.preventDefault();
        openRecipe(card.dataset.id);
      }
    });
  });
  $$(`${container} [data-save]`).forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleSave(btn.dataset.save);
    });
  });
}

// ---- rendering: browse view ----------------------------------------
function filteredRecipes() {
  const q = state.search.trim().toLowerCase();
  return RECIPES.filter(r => {
    const inCategory = state.category === "All" || r.category === state.category;
    if (!inCategory) return false;
    if (!q) return true;
    const haystack = [r.title, r.blurb, r.category, ...r.tags, ...r.ingredients].join(" ").toLowerCase();
    return haystack.includes(q);
  });
}

function renderBrowse() {
  renderCategoryTabs();
  const results = filteredRecipes();
  $("#results-meta").textContent = `${results.length} recipe${results.length === 1 ? "" : "s"}${state.category !== "All" ? " · " + state.category : ""}${state.search ? ` · matching "${state.search}"` : ""}`;

  if (results.length === 0) {
    $("#browse-grid").innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <span class="icon">🔎</span>
        <h3>Nothing matches that search</h3>
        <p>Try a different ingredient, category, or recipe name.</p>
      </div>`;
    return;
  }
  $("#browse-grid").innerHTML = results.map(recipeCardHTML).join("");
  bindCardEvents("#browse-grid");
}

// ---- rendering: saved view -----------------------------------------
function renderSaved() {
  const saved = RECIPES.filter(r => state.currentUser.saved.has(r.id));
  if (saved.length === 0) {
    $("#saved-grid").innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <span class="icon">📭</span>
        <h3>Your recipe box is empty</h3>
        <p>Tap the heart on any recipe in Browse to tuck it away here.</p>
      </div>`;
    return;
  }
  $("#saved-grid").innerHTML = saved.map(recipeCardHTML).join("");
  bindCardEvents("#saved-grid");
}

// ---- rendering: detail view -----------------------------------------
function renderDetail() {
  const r = findRecipe(state.detailId);
  if (!r) return;
  const saved = state.currentUser.saved.has(r.id);

  $("#detail-content").innerHTML = `
    <div class="detail-head">
      <div class="detail-icon">${r.icon}</div>
      <div class="detail-title-wrap">
        <h2 class="detail-title">${r.title}</h2>
        <p class="detail-blurb">${r.blurb}</p>
      </div>
      <button class="btn ${saved ? "btn-saffron" : "btn-ghost"} detail-save" data-save="${r.id}" type="button">
        ${saved ? "♥ Saved to your box" : "♡ Save this recipe"}
      </button>
    </div>

    <div class="detail-meta-strip">
      <div class="meta-item"><span class="num">${r.prep}</span><span class="lbl">Prep min</span></div>
      <div class="meta-item"><span class="num">${r.cook}</span><span class="lbl">Cook min</span></div>
      <div class="meta-item"><span class="num">${r.servings}</span><span class="lbl">Servings</span></div>
      <div class="meta-item"><span class="num" style="font-size:15px;">${r.difficulty}</span><span class="lbl">Difficulty</span></div>
    </div>

    <div class="detail-tags">${r.tags.map(t => `<span class="${tagClass(t)}">${t}</span>`).join("")}</div>

    <div class="detail-grid">
      <div>
        <p class="panel-title">Ingredients</p>
        <ul class="ingredient-list" id="ingredient-list">
          ${r.ingredients.map((ing, i) => `
            <li data-idx="${i}">
              <input type="checkbox" id="ing-${i}">
              <label for="ing-${i}" style="flex:1; cursor:pointer;">${ing}</label>
            </li>
          `).join("")}
        </ul>
      </div>
      <div>
        <p class="panel-title">Steps</p>
        <ol class="step-list">
          ${r.steps.map(s => `<li><p>${s}</p></li>`).join("")}
        </ol>
      </div>
    </div>
  `;

  $("#detail-content [data-save]").addEventListener("click", () => {
    toggleSave(r.id);
    renderDetail();
  });

  $$("#ingredient-list li").forEach(li => {
    const checkbox = li.querySelector("input");
    checkbox.addEventListener("change", () => li.classList.toggle("checked", checkbox.checked));
  });
}

// ---- rendering: profile view ----------------------------------------
function renderProfile() {
  const u = state.currentUser;
  $("#profile-initials").textContent = initials(u.name);
  $("#profile-name").textContent = u.name;
  $("#profile-email").textContent = u.email;
  $("#stat-saved").textContent = u.saved.size;
}

// ---- saving / favoriting ----------------------------------------------
function toggleSave(id) {
  const u = state.currentUser;
  if (u.saved.has(id)) {
    u.saved.delete(id);
    showToast("Removed from your recipe box.");
  } else {
    u.saved.add(id);
    showToast("Saved to your recipe box.");
  }
  // re-render whichever view is currently visible so hearts stay in sync
  if (state.nav === "browse") renderBrowse();
  if (state.nav === "saved") renderSaved();
  if (state.nav === "profile") renderProfile();
}

// ---- wiring it all up -------------------------------------------------
function init() {
  $("#tab-login").addEventListener("click", () => switchAuthTab("login"));
  $("#tab-signup").addEventListener("click", () => switchAuthTab("signup"));
  bindSwitchLinks();

  $("#form-login").addEventListener("submit", handleLogin);
  $("#form-signup").addEventListener("submit", handleSignup);

  $$(".topbar-nav button").forEach(btn => {
    btn.addEventListener("click", () => goTo(btn.dataset.nav));
  });
  $("#btn-logout").addEventListener("click", logout);
  $("#btn-logout-2").addEventListener("click", logout);
  $("#btn-back").addEventListener("click", () => goTo("browse"));

  $("#search-input").addEventListener("input", (e) => {
    state.search = e.target.value;
    renderBrowse();
  });
}

document.addEventListener("DOMContentLoaded", init);