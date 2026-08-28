const PRODUCTS_KEY = "denha-products-demo-v1";
const ARTICLES_KEY = "denha-articles-demo-v1";

const vehicleTypeLabels = {
  standard: "รถจักรยานยนต์",
  used: "รถสวย (รถมือสอง)",
  ev2: "รถไฟฟ้าสองล้อ",
  ev3: "รถไฟฟ้าสามล้อ",
  atv: "รถ ATV",
  cargo3: "รถสามล้อบรรทุก"
};

const vehicleTypeOptions = [
  ["used", "รถสวย (รถมือสอง)"],
  ["ev2", "รถไฟฟ้าสองล้อ"],
  ["ev3", "รถไฟฟ้าสามล้อ"],
  ["atv", "รถ ATV"],
  ["cargo3", "รถสามล้อบรรทุก"],
  ["standard", "รถจักรยานยนต์"]
];

const brandOptions = ["Zontes", "GPX", "EM", "Royal alloy", "Honda", "Rhino", "K-Lion", "Champi"];

const defaultArticles = [
  { id: "finance-101", title: "เงินเดือนเท่านี้ ออกรถได้ไหม?", category: "การเงิน / ไฟแนนซ์", status: "published", author: "ทีม Denha Motor", excerpt: "เช็กงบที่เหมาะกับคุณ ก่อนคุยกับไฟแนนซ์จริง", content: "เริ่มจากรายได้ ภาระผ่อน และงบที่สบายใจ แล้วค่อยเลือกรถที่เหมาะกับชีวิตประจำวัน", seoTitle: "เงินเดือนเท่านี้ ออกรถได้ไหม? | Denha Motor", seoDescription: "แนวทางเช็กงบออกรถและค่างวดเบื้องต้นสำหรับลูกค้าเด่นห้า", featured: true, updatedAt: "2026-08-28T08:00:00.000Z" },
  { id: "ev-2-or-3", title: "EV 2 ล้อ กับ EV 3 ล้อ เลือกแบบไหน?", category: "รถและการใช้งาน", status: "published", author: "ทีม Denha Motor", excerpt: "เปรียบเทียบรูปแบบการใช้งาน พื้นที่ และความคุ้มค่า", content: "ดูความแตกต่างของ EV แต่ละประเภทก่อนเลือกคันที่ตรงกับงานและการเดินทางของคุณ", seoTitle: "EV 2 ล้อ กับ EV 3 ล้อ เลือกแบบไหน?", seoDescription: "เปรียบเทียบรถไฟฟ้า 2 ล้อและ 3 ล้อ", featured: false, updatedAt: "2026-08-27T08:00:00.000Z" },
  { id: "check-before-long-trip", title: "เช็ก 5 จุดง่าย ๆ ก่อนขี่ทางไกล", category: "ดูแลรถ", status: "published", author: "ทีมบริการเด่นห้า", excerpt: "เช็กเบรก ยาง ไฟ และน้ำมันเครื่องได้ด้วยตัวเอง", content: "การตรวจรถก่อนเดินทางช่วยลดความเสี่ยงและทำให้ขี่ได้มั่นใจขึ้น", seoTitle: "เช็ก 5 จุดก่อนขี่รถทางไกล", seoDescription: "คู่มือดูแลรถฉบับสั้นจากทีมบริการเด่นห้า", featured: false, updatedAt: "2026-08-26T08:00:00.000Z" },
  { id: "faq-documents", title: "เอกสารอะไรบ้างที่ใช้ยื่นไฟแนนซ์?", category: "FAQ", status: "draft", author: "ทีมสินเชื่อเด่นห้า", excerpt: "รวมเอกสารพื้นฐานที่ควรเตรียมก่อนยื่นสินเชื่อ", content: "เตรียมเอกสารเบื้องต้นให้ครบ แล้วให้ทีมงานช่วยตรวจสอบตามเคสจริง", seoTitle: "เอกสารยื่นไฟแนนซ์ที่ต้องเตรียม", seoDescription: "รายการเอกสารสำหรับยื่นไฟแนนซ์รถ", featured: false, updatedAt: "2026-08-25T08:00:00.000Z" }
];

const defaultProducts = [
  { id: "gpx-dz3", brand: "GPX", model: "DZ3", vehicleType: "standard", category: "gas", price: 72500, monthly: 2194, stock: 2, branch: "เชียงราย สำนักงานใหญ่", availability: "available", promo: "ฟรีทะเบียน + พ.ร.บ.", color: "แดง / ดำ", description: "สปอร์ตออโตเมติกที่ขี่ง่าย ตอบโจทย์ทั้งในเมืองและเส้นทางไกล", specs: ["278.2 cc", "ABS", "TCS", "152 kg"] },
  { id: "royal-alloy-gt150", brand: "Royal alloy", model: "GT150", vehicleType: "standard", category: "gas", price: 89900, monthly: 2690, stock: 1, branch: "เชียงราย สำนักงานใหญ่", availability: "low", promo: "ของแถมพิเศษประจำเดือน", color: "ครีม / เขียว", description: "พรีเมียมสกู๊ตเตอร์สไตล์อังกฤษ พร้อมความคลาสสิกในทุกมุมมอง", specs: ["149 cc", "CBS", "11.4 hp", "คันสตาร์ตไฟฟ้า"] },
  { id: "honda-wave-125i", brand: "Honda", model: "Wave 125i", vehicleType: "standard", category: "gas", price: 46900, monthly: 1490, stock: 3, branch: "บ้านดู่", availability: "available", promo: "ผ่อนเริ่มต้นสบาย ๆ", color: "แดง / น้ำเงิน", description: "รถครอบครัวยอดนิยม ดูแลง่าย ประหยัด และพร้อมใช้งานทุกวัน", specs: ["125 cc", "ประหยัดน้ำมัน", "CBS", "เกียร์ 4 ระดับ"] },
  { id: "em-milano", brand: "EM", model: "Milano", vehicleType: "ev2", category: "ev", price: 54800, monthly: 1780, stock: 4, branch: "พะเยา", availability: "available", promo: "ชาร์จเต็มวิ่งคุ้ม", color: "ขาว / ฟ้า", description: "EV 2 ล้อดีไซน์คลีน ใช้งานในเมืองคล่องตัว ประหยัดค่าเดินทาง", specs: ["มอเตอร์ 2,000W", "แบตเตอรี่ลิเธียม", "ดิสก์เบรก", "รับประกันแบต"] },
  { id: "rhino-frigate-285", brand: "Rhino", model: "Frigate 285", vehicleType: "atv", category: "utility", price: 129000, monthly: 3890, stock: 1, branch: "เชียงราย สำนักงานใหญ่", availability: "low", promo: "พร้อมลุยงานหนัก", color: "ดำ / ส้ม", description: "ATV พร้อมลุยสำหรับงานเกษตรและเส้นทางที่ต้องการแรงบิด", specs: ["285 cc", "4WD", "เกียร์ออโต้", "วินช์หน้า"] },
  { id: "k-lion-forge", brand: "K-Lion", model: "Forge 400 4WD", vehicleType: "atv", category: "utility", price: 159000, monthly: 4800, stock: 0, branch: "แม่จัน", availability: "soldout", promo: "สอบถามรถเข้าใหม่", color: "เขียว / ดำ", description: "พลังงานเต็มสำหรับงานบรรทุกและพื้นที่เกษตร พร้อมระบบขับเคลื่อน 4 ล้อ", specs: ["400 cc", "4WD", "บรรทุก 250 kg", "ลากจูง"] },
  { id: "champi-cargo", brand: "Champi", model: "Cargo 3 ล้อ", vehicleType: "cargo3", category: "utility", price: 69900, monthly: 2190, stock: 2, branch: "บ้านดู่", availability: "available", promo: "ช่วยเริ่มธุรกิจ", color: "แดง / ขาว", description: "สามล้ออเนกประสงค์สำหรับขนของ ค้าขาย และงานประจำวัน", specs: ["200 cc", "กระบะบรรทุก", "เบาะนั่ง 2 คน", "ประหยัด"] },
  { id: "used-click-160", brand: "Honda", model: "Click 160 มือสอง", vehicleType: "used", category: "used", price: 59900, monthly: 1850, stock: 1, branch: "เวียงป่าเป้า", availability: "low", promo: "ตรวจแล้ว 25 จุด", color: "ดำด้าน", description: "รถมือสองสภาพพร้อมใช้ มีรายงานตรวจสภาพและรูปตำหนิจริง", specs: ["157 cc", "ABS", "ตรวจ 25 จุด", "รับประกันเครื่อง"] },
  { id: "zontes-gk350", brand: "Zontes", model: "GK350", vehicleType: "standard", category: "gas", price: 179900, monthly: 5290, stock: 1, branch: "เชียงราย สำนักงานใหญ่", availability: "low", promo: "พรีเมียมไบค์พร้อมลอง", color: "เทา / ดำ", description: "บิ๊กไบค์สไตล์โมเดิร์น พร้อมเทคโนโลยีและดีไซน์ที่โดดเด่น", specs: ["348 cc", "ABS", "41 hp", "จอสี TFT"] }
];

let products = loadProducts();
let articles = loadArticles();
let activeFilter = "all";
let selectedBudget = null;
let currentImageData = "";
let currentArticleImage = "";
let adminTypeFilter = "all";
let adminBrandFilter = "all";
let toastTimer;

function loadProducts() {
  try {
    const saved = localStorage.getItem(PRODUCTS_KEY);
    const source = saved ? JSON.parse(saved) : defaultProducts.slice();
    return source.map(function(product) {
      const vehicleType = product.vehicleType || (product.category === "used" ? "used" : product.category === "ev" ? "ev2" : product.category === "utility" ? (String(product.model).toLowerCase().indexOf("cargo") >= 0 ? "cargo3" : "atv") : "standard");
      return Object.assign({}, product, { vehicleType: vehicleType });
    });
  } catch (error) {
    return defaultProducts.slice();
  }
}

function saveProducts() {
  try {
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
  } catch (error) {
    showToast("ไม่สามารถบันทึกในเครื่องนี้ได้");
  }
}

function loadArticles() {
  try {
    const saved = localStorage.getItem(ARTICLES_KEY);
    return saved ? JSON.parse(saved) : defaultArticles.slice();
  } catch (error) {
    return defaultArticles.slice();
  }
}

function saveArticles() {
  try {
    localStorage.setItem(ARTICLES_KEY, JSON.stringify(articles));
  } catch (error) {
    showToast("ไม่สามารถบันทึกบทความในเครื่องนี้ได้");
  }
}

function money(value) {
  return Number(value || 0).toLocaleString("th-TH");
}

function escapeHtml(value) {
  return String(value === undefined || value === null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function categoryLabel(category) {
  const labels = { gas: "รถน้ำมัน", ev: "EV", utility: "ATV / รถใช้งาน", used: "มือสอง" };
  return labels[category] || "รถจักรยานยนต์";
}

function vehicleTypeLabel(product) {
  return vehicleTypeLabels[product.vehicleType] || categoryLabel(product.category);
}

function formatArticleDate(value) {
  return new Date(value || Date.now()).toLocaleDateString("th-TH", { day: "numeric", month: "short", year: "numeric" });
}

function renderKnowledge() {
  const grid = document.getElementById("knowledgeGrid");
  if (!grid) return;
  const published = articles.filter(function(article) { return article.status === "published"; }).sort(function(a, b) {
    if (Boolean(a.featured) !== Boolean(b.featured)) return a.featured ? -1 : 1;
    return new Date(b.updatedAt) - new Date(a.updatedAt);
  }).slice(0, 3);
  grid.innerHTML = published.length ? published.map(function(article, index) {
    const cover = article.coverImage ? '<img class="article-cover" src="' + escapeHtml(article.coverImage) + '" alt="' + escapeHtml(article.title) + '">' : "";
    const media = (article.coverImage ? '<span class="article-attachment-chip">▧ รูปภาพ</span>' : "") +
      (article.youtubeUrl ? '<a class="article-attachment-chip video" href="' + escapeHtml(article.youtubeUrl) + '" target="_blank" rel="noopener">▶ YouTube</a>' : "") +
      (article.tiktokUrl ? '<a class="article-attachment-chip video" href="' + escapeHtml(article.tiktokUrl) + '" target="_blank" rel="noopener">♪ TikTok</a>' : "");
    return '<article class="knowledge-card ' + (index === 0 ? "knowledge-featured " : "") + (cover ? "has-cover" : "") + '" data-article-id="' + escapeHtml(article.id) + '">' +
      cover +
      '<span class="article-number">' + String(index + 1).padStart(2, "0") + '</span><span class="article-tag">' + escapeHtml(article.category) + '</span>' +
      '<h3>' + escapeHtml(article.title) + '</h3><p>' + escapeHtml(article.excerpt) + '</p>' +
      (media ? '<div class="article-attachment-row">' + media + '</div>' : "") +
      '<a href="#knowledge" data-article-preview="' + escapeHtml(article.id) + '">อ่านต่อ →</a></article>';
  }).join("") : '<div class="empty-products"><strong>ยังไม่มีบทความที่เผยแพร่</strong><span>เพิ่มบทความจาก Admin Demo ได้ทันที</span></div>';
}

function getStockState(product) {
  if (product.availability === "preorder") return { label: "สั่งจอง", className: "low" };
  if (product.availability === "soldout" || Number(product.stock) <= 0) return { label: "สอบถามรถเข้าใหม่", className: "soldout" };
  if (product.availability === "low" || Number(product.stock) === 1) return { label: "เหลือ 1 คัน", className: "low" };
  return { label: "พร้อมส่ง", className: "available" };
}

function vehicleMarkup(product, large) {
  const sizeClass = large ? "modal-vehicle" : "mini-vehicle";
  return '<div class="' + sizeClass + ' product-art ' + product.category + '" style="--vehicle-accent:' + (product.category === "ev" ? "#258a84" : product.category === "utility" ? "#a56323" : product.category === "used" ? "#596372" : "#c51b24") + '"><span class="mini-label">' + escapeHtml(product.brand) + '</span><span class="mini-seat"></span><span class="mini-handle"></span></div>';
}

function productCard(product) {
  const stock = getStockState(product);
  const sold = stock.className === "soldout";
  const visual = product.image ? '<img class="product-photo" src="' + escapeHtml(product.image) + '" alt="' + escapeHtml(product.brand + " " + product.model) + '">' : vehicleMarkup(product, false);
  return '<article class="product-card" data-id="' + escapeHtml(product.id) + '">' +
    '<div class="product-card-image ' + escapeHtml(product.category) + '">' +
      '<div class="product-badges"><span class="product-badge">' + escapeHtml(product.category === "used" ? "USED" : product.brand) + '</span><span class="product-badge stock ' + stock.className + '">' + escapeHtml(stock.label) + '</span></div>' +
      visual +
    '</div>' +
    '<div class="product-card-body">' +
      '<div class="product-meta"><span>' + escapeHtml(vehicleTypeLabel(product)) + '</span><span>' + escapeHtml(product.branch.replace(" สำนักงานใหญ่", "")) + '</span></div>' +
      '<h3 class="product-title">' + escapeHtml(product.model) + '</h3>' +
      '<div class="product-subtitle">' + escapeHtml(product.color || "เลือกสีที่สาขา") + ' · ' + escapeHtml(product.promo || "สอบถามรายละเอียด") + '</div>' +
      '<div class="product-pricing"><span class="cash-price">ราคาเงินสด<strong>' + money(product.price) + '</strong></span><span class="monthly-price">ผ่อนเริ่มต้น<strong>' + money(product.monthly) + '</strong> บาท</span></div>' +
      '<div class="product-actions"><button data-action="detail" data-id="' + escapeHtml(product.id) + '">ดูรายละเอียด</button><button class="edit-product" data-action="edit" data-id="' + escapeHtml(product.id) + '">แก้ไข</button>' +
      (!sold ? '<button data-action="lead" data-id="' + escapeHtml(product.id) + '">สอบถาม</button>' : '') + '</div>' +
    '</div>' +
  '</article>';
}

function filteredProducts() {
  let list = products.slice();
  if (activeFilter === "ready") list = list.filter(function(product) { return Number(product.stock) > 0 && product.availability !== "preorder"; });
  if (activeFilter === "gas" || activeFilter === "ev" || activeFilter === "utility" || activeFilter === "used") list = list.filter(function(product) { return product.category === activeFilter; });
  if (selectedBudget) list = list.filter(function(product) { return Number(product.monthly) <= selectedBudget; });
  const sort = document.getElementById("sortProducts");
  if (sort && sort.value === "price-low") list.sort(function(a, b) { return a.price - b.price; });
  if (sort && sort.value === "monthly-low") list.sort(function(a, b) { return a.monthly - b.monthly; });
  if (sort && sort.value === "stock") list.sort(function(a, b) { return b.stock - a.stock; });
  return list;
}

function renderProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;
  const list = filteredProducts();
  grid.innerHTML = list.length ? list.map(productCard).join("") : '<div class="empty-products"><strong>ยังไม่พบรถที่ตรงกับเงื่อนไข</strong><span>ลองเปลี่ยนตัวกรอง หรือให้ทีมเด่นห้าช่วยหาให้คุณ</span><button class="btn btn-red" data-lead="แนะนำรถ">ให้ทีมงานช่วยแนะนำ <span>→</span></button></div>';
}

function setFilter(filter) {
  activeFilter = filter;
  document.querySelectorAll(".filter-chip").forEach(function(button) {
    button.classList.toggle("active", button.dataset.filter === filter);
  });
  renderProducts();
}

function applyBudget(value) {
  selectedBudget = Number(value);
  document.querySelectorAll(".budget-pills button").forEach(function(button) {
    button.classList.toggle("active", Number(button.dataset.budget) === selectedBudget);
  });
  const matches = products.filter(function(product) { return Number(product.monthly) <= selectedBudget; }).length;
  const result = document.getElementById("budgetResult");
  if (result) result.textContent = "พบ " + matches + " รุ่นที่ค่างวดเริ่มต้นไม่เกิน " + money(selectedBudget) + " บาท/เดือน";
  setFilter("all");
  renderProducts();
}

function openProductModal(id) {
  const product = products.find(function(item) { return item.id === id; });
  if (!product) return;
  const stock = getStockState(product);
  const modal = document.getElementById("productModal");
  const visual = product.image ? '<img class="modal-product-photo" src="' + escapeHtml(product.image) + '" alt="' + escapeHtml(product.brand + " " + product.model) + '">' : vehicleMarkup(product, true);
  modal.innerHTML = '<div class="product-modal-inner">' +
    '<div class="modal-vehicle-stage">' + visual + '<span class="modal-stock-badge ' + stock.className + '">' + escapeHtml(stock.label) + '</span></div>' +
    '<div class="modal-info"><div class="product-meta"><span>' + escapeHtml(product.brand) + ' · ' + escapeHtml(categoryLabel(product.category)) + '</span><span>SKU ' + escapeHtml(product.id.toUpperCase()) + '</span></div>' +
    '<h2 id="productModalTitle">' + escapeHtml(product.model) + '</h2><p class="modal-description">' + escapeHtml(product.description) + '</p>' +
    '<div class="modal-price-row"><span>ราคาเงินสด<strong>' + money(product.price) + ' บาท</strong></span><span>ผ่อนเริ่มต้น<strong>' + money(product.monthly) + ' บาท/เดือน</strong></span></div>' +
    '<div class="modal-specs">' + (product.specs || []).slice(0, 4).map(function(spec, index) { return '<span class="modal-spec"><small>' + ["ข้อมูลเด่น", "ระบบ", "รายละเอียด", "น้ำหนัก/การใช้งาน"][index] + '</small><strong>' + escapeHtml(spec) + '</strong></span>'; }).join("") + '</div>' +
    '<div class="modal-promo">✦ ' + escapeHtml(product.promo || "สอบถามโปรโมชันประจำสาขา") + '</div>' +
    '<div class="modal-ctas"><button class="btn btn-red" data-action="lead" data-id="' + escapeHtml(product.id) + '">ขอรายละเอียดคันนี้ <span>→</span></button><button class="btn" data-action="test-drive" data-id="' + escapeHtml(product.id) + '">ทดลองขับ</button></div>' +
    '<p class="admin-edit-note">มีข้อมูลเพิ่มเติม? <button data-action="edit" data-id="' + escapeHtml(product.id) + '">แก้ไขสินค้าใน Admin Demo</button></p></div></div>';
  showModal("productModal");
}

function showModal(id) {
  document.getElementById("modalBackdrop").hidden = false;
  document.getElementById(id).hidden = false;
}

function closeModal() {
  document.getElementById("modalBackdrop").hidden = true;
  document.getElementById("productModal").hidden = true;
  document.getElementById("leadModal").hidden = true;
  document.getElementById("articleEditorModal").hidden = true;
}

function openLead(type, productId) {
  const product = products.find(function(item) { return item.id === productId; });
  const title = document.getElementById("leadModalTitle");
  const typeInput = document.getElementById("leadType");
  const context = product ? "สอบถาม " + product.brand + " " + product.model : type || "สอบถามรถ";
  if (title) title.textContent = product ? "สนใจ " + product.model + " ใช่ไหม?" : "ให้เราช่วยแนะนำรถให้คุณ";
  if (typeInput) typeInput.value = context;
  showModal("leadModal");
}

function calculateLoan() {
  const productSelect = document.getElementById("calcProduct");
  const product = products.find(function(item) { return item.id === productSelect.value; }) || products[0];
  const down = Number(document.getElementById("downRange").value || 0);
  const term = Number(document.getElementById("termSelect").value || 36);
  const principal = Math.max(0, Number(product.price) - down);
  const interestFactor = 1 + (0.05667 * term / 12);
  const monthly = Math.round((principal * interestFactor) / term);
  document.getElementById("downOutput").textContent = money(down) + " บาท";
  document.getElementById("calcMonthly").innerHTML = money(monthly) + ' <small>บาท/เดือน</small>';
}

function populateCalculator() {
  const select = document.getElementById("calcProduct");
  if (!select) return;
  select.innerHTML = products.map(function(product) { return '<option value="' + escapeHtml(product.id) + '">' + escapeHtml(product.brand + " " + product.model) + "</option>"; }).join("");
  select.value = "gpx-dz3";
  calculateLoan();
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function() { toast.classList.remove("show"); }, 3200);
}

function openAdmin() {
  document.body.classList.add("admin-mode", "admin-open");
  document.getElementById("adminPanel").setAttribute("aria-hidden", "false");
  document.getElementById("adminTrigger").classList.add("active");
  document.getElementById("adminTrigger").innerHTML = "<span>◈</span> ปิด Admin";
  renderAdmin();
  renderAdminArticles();
}

function closeAdminPanel() {
  document.body.classList.remove("admin-open");
  document.getElementById("adminPanel").setAttribute("aria-hidden", "true");
}

function renderAdmin() {
  const search = (document.getElementById("adminSearch") || {}).value || "";
  const query = search.trim().toLowerCase();
  const list = products.filter(function(product) {
    const matchesQuery = !query || (product.brand + " " + product.model + " " + product.id).toLowerCase().indexOf(query) >= 0;
    const matchesType = adminTypeFilter === "all" || product.vehicleType === adminTypeFilter;
    const matchesBrand = adminBrandFilter === "all" || product.brand.toLowerCase() === adminBrandFilter.toLowerCase();
    return matchesQuery && matchesType && matchesBrand;
  });
  const total = document.getElementById("adminTotal");
  const ready = document.getElementById("adminReady");
  const low = document.getElementById("adminLow");
  if (total) total.textContent = products.length;
  if (ready) ready.textContent = products.filter(function(product) { return product.stock > 0; }).length;
  if (low) low.textContent = products.filter(function(product) { return product.stock === 1; }).length;
  const panelList = document.getElementById("adminProductList");
  if (!panelList) return;
  panelList.innerHTML = list.length ? list.map(function(product) {
    const stock = getStockState(product);
    return '<div class="admin-product-row"><span class="admin-thumb">' + escapeHtml(product.brand.slice(0, 2).toUpperCase()) + '</span><span><strong>' + escapeHtml(product.brand + " " + product.model) + '</strong><small>' + escapeHtml(vehicleTypeLabel(product)) + ' · ' + money(product.price) + ' บาท · ' + escapeHtml(product.branch) + '</small></span><span><span class="admin-stock ' + stock.className + '">' + (product.stock > 0 ? "สต๊อก " + product.stock : "หมด") + '</span><button class="admin-row-btn" data-action="edit" data-id="' + escapeHtml(product.id) + '">แก้ไข</button></span></div>';
  }).join("") : '<div class="empty-admin">ไม่พบสินค้าที่ค้นหา</div>';
  renderAdminFilters();
}

function renderAdminFilters() {
  const typeWrap = document.getElementById("adminTypeFilters");
  const brandWrap = document.getElementById("adminBrandFilters");
  if (!typeWrap || !brandWrap) return;
  const typeCounts = {};
  products.forEach(function(product) { typeCounts[product.vehicleType] = (typeCounts[product.vehicleType] || 0) + 1; });
  typeWrap.innerHTML = '<button class="admin-filter-chip ' + (adminTypeFilter === "all" ? "active" : "") + '" data-admin-type="all">ทั้งหมด <b>' + products.length + '</b></button>' +
    vehicleTypeOptions.map(function(option) { return '<button class="admin-filter-chip ' + (adminTypeFilter === option[0] ? "active" : "") + '" data-admin-type="' + option[0] + '">' + option[1] + ' <b>' + (typeCounts[option[0]] || 0) + '</b></button>'; }).join("");
  const brandCounts = {};
  products.forEach(function(product) { brandCounts[product.brand.toLowerCase()] = (brandCounts[product.brand.toLowerCase()] || 0) + 1; });
  brandWrap.innerHTML = '<button class="admin-filter-chip ' + (adminBrandFilter === "all" ? "active" : "") + '" data-admin-brand="all">ทุกแบรนด์ <b>' + products.length + '</b></button>' +
    brandOptions.map(function(brand) { return '<button class="admin-filter-chip ' + (adminBrandFilter.toLowerCase() === brand.toLowerCase() ? "active" : "") + '" data-admin-brand="' + escapeHtml(brand) + '">' + escapeHtml(brand) + ' <b>' + (brandCounts[brand.toLowerCase()] || 0) + '</b></button>'; }).join("");
}

function renderAdminArticles() {
  const listWrap = document.getElementById("adminArticleList");
  if (!listWrap) return;
  const search = (document.getElementById("articleSearch") || {}).value || "";
  const category = (document.getElementById("articleCategoryFilter") || {}).value || "all";
  const status = (document.getElementById("articleStatusFilter") || {}).value || "all";
  const query = search.trim().toLowerCase();
  const list = articles.filter(function(article) {
    const matchesQuery = !query || (article.title + " " + article.category + " " + article.excerpt).toLowerCase().indexOf(query) >= 0;
    const matchesCategory = category === "all" || article.category === category;
    const matchesStatus = status === "all" || article.status === status;
    return matchesQuery && matchesCategory && matchesStatus;
  }).sort(function(a, b) { return new Date(b.updatedAt) - new Date(a.updatedAt); });
  listWrap.innerHTML = list.length ? list.map(function(article) {
    const statusLabel = article.status === "published" ? "เผยแพร่แล้ว" : "แบบร่าง";
    return '<div class="admin-article-row"><span class="article-row-status ' + article.status + '">' + statusLabel + '</span><span><strong>' + escapeHtml(article.title) + '</strong><small>' + escapeHtml(article.category) + ' · แก้ไขล่าสุด ' + escapeHtml(formatArticleDate(article.updatedAt)) + '</small></span><span class="article-row-actions"><button class="admin-row-btn" data-action="article-edit" data-id="' + escapeHtml(article.id) + '">แก้ไข</button><button class="article-delete-btn" data-action="article-delete" data-id="' + escapeHtml(article.id) + '">ลบ</button></span></div>';
  }).join("") : '<div class="empty-admin">ไม่พบบทความที่ค้นหา</div>';
}

function isAllowedVideoUrl(value, platform) {
  if (!value) return true;
  try {
    const url = new URL(value);
    if (url.protocol !== "https:") return false;
    const host = url.hostname.toLowerCase();
    if (platform === "youtube") return ["youtube.com", "www.youtube.com", "m.youtube.com", "youtu.be"].indexOf(host) >= 0;
    return ["tiktok.com", "www.tiktok.com", "vm.tiktok.com", "vt.tiktok.com"].indexOf(host) >= 0;
  } catch (error) {
    return false;
  }
}

function openArticleEditor(id) {
  const article = articles.find(function(item) { return item.id === id; });
  const form = document.getElementById("articleForm");
  if (!form) return;
  closeAdminPanel();
  form.reset();
  form.elements.id.value = article ? article.id : "";
  form.elements.title.value = article ? article.title : "";
  form.elements.category.value = article ? article.category : "รถและการใช้งาน";
  form.elements.status.value = article ? article.status : "draft";
  form.elements.author.value = article ? article.author : "ทีม Denha Motor";
  form.elements.excerpt.value = article ? article.excerpt : "";
  form.elements.content.value = article ? article.content : "";
  form.elements.seoTitle.value = article ? article.seoTitle || "" : "";
  form.elements.seoDescription.value = article ? article.seoDescription || "" : "";
  form.elements.youtubeUrl.value = article ? article.youtubeUrl || "" : "";
  form.elements.tiktokUrl.value = article ? article.tiktokUrl || "" : "";
  form.elements.featured.checked = Boolean(article && article.featured);
  currentArticleImage = article ? article.coverImage || "" : "";
  renderArticleImagePreview();
  document.getElementById("articleEditorTitle").textContent = article ? "แก้ไขบทความ" : "เพิ่มบทความ";
  showModal("articleEditorModal");
}

function closeArticleEditor() {
  document.getElementById("articleEditorModal").hidden = true;
  if (document.getElementById("productModal").hidden && document.getElementById("leadModal").hidden && document.getElementById("editorModal").hidden) document.getElementById("modalBackdrop").hidden = true;
}

function saveArticle(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const title = String(data.get("title")).trim();
  const youtubeUrl = String(data.get("youtubeUrl") || "").trim();
  const tiktokUrl = String(data.get("tiktokUrl") || "").trim();
  if (!isAllowedVideoUrl(youtubeUrl, "youtube") || !isAllowedVideoUrl(tiktokUrl, "tiktok")) {
    showToast("กรุณาใส่ลิงก์ YouTube หรือ TikTok ที่ถูกต้อง");
    return;
  }
  const id = data.get("id") || title.toLowerCase().replace(/[^a-z0-9ก-๙]+/gi, "-").replace(/^-|-$/g, "") + "-" + Date.now().toString().slice(-4);
  const next = {
    id: id,
    title: title,
    category: String(data.get("category")),
    status: String(data.get("status")),
    author: String(data.get("author") || "ทีม Denha Motor").trim(),
    excerpt: String(data.get("excerpt")).trim(),
    content: String(data.get("content")).trim(),
    seoTitle: String(data.get("seoTitle") || "").trim(),
    seoDescription: String(data.get("seoDescription") || "").trim(),
    coverImage: currentArticleImage,
    youtubeUrl: youtubeUrl,
    tiktokUrl: tiktokUrl,
    featured: form.elements.featured.checked,
    updatedAt: new Date().toISOString()
  };
  const existing = articles.findIndex(function(item) { return item.id === id; });
  if (existing >= 0) articles[existing] = next; else articles.unshift(next);
  saveArticles();
  closeArticleEditor();
  renderAdminArticles();
  renderKnowledge();
  showToast("บันทึกบทความเรียบร้อยแล้ว");
}

function deleteArticle(id) {
  const article = articles.find(function(item) { return item.id === id; });
  if (!article || !window.confirm("ลบบทความ " + article.title + " ใช่หรือไม่?")) return;
  articles = articles.filter(function(item) { return item.id !== id; });
  saveArticles();
  renderAdminArticles();
  renderKnowledge();
  showToast("ลบบทความออกจากระบบแล้ว");
}

function renderArticleImagePreview() {
  const preview = document.getElementById("articleImagePreview");
  if (!preview) return;
  preview.innerHTML = currentArticleImage ? '<img src="' + escapeHtml(currentArticleImage) + '" alt="ตัวอย่างรูปหน้าปกบทความ">' : '<span>ยังไม่มีรูปหน้าปก<br><small>รองรับ JPG, PNG, WebP ไม่เกิน 3 MB</small></span>';
}

function openEditor(id) {
  const product = products.find(function(item) { return item.id === id; });
  const form = document.getElementById("productForm");
  if (!form) return;
  closeAdminPanel();
  form.reset();
  form.elements.id.value = product ? product.id : "";
  form.elements.brand.value = product ? product.brand : "";
  form.elements.model.value = product ? product.model : "";
  form.elements.category.value = product ? product.category : "gas";
  form.elements.vehicleType.value = product ? product.vehicleType || "standard" : "standard";
  form.elements.price.value = product ? product.price : "";
  form.elements.monthly.value = product ? product.monthly : "";
  form.elements.stock.value = product ? product.stock : 1;
  form.elements.branch.value = product ? product.branch : "เชียงราย สำนักงานใหญ่";
  form.elements.availability.value = product ? product.availability : "available";
  form.elements.promo.value = product ? product.promo : "";
  form.elements.color.value = product ? product.color : "";
  form.elements.description.value = product ? product.description : "";
  currentImageData = product ? product.image || "" : "";
  renderImagePreview();
  document.getElementById("editorTitle").textContent = product ? "แก้ไขสินค้า" : "เพิ่มสินค้าใหม่";
  showModal("editorModal");
}

function closeEditor() {
  document.getElementById("editorModal").hidden = true;
  if (document.getElementById("productModal").hidden && document.getElementById("leadModal").hidden) document.getElementById("modalBackdrop").hidden = true;
}

function renderImagePreview() {
  const preview = document.getElementById("imagePreview");
  if (!preview) return;
  preview.innerHTML = currentImageData ? '<img src="' + escapeHtml(currentImageData) + '" alt="ตัวอย่างรูปสินค้า">' : '<span>ยังไม่มีรูปสินค้า<br><small>รองรับ JPG, PNG, WebP ไม่เกิน 3 MB</small></span>';
}

function saveProduct(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const id = data.get("id") || (String(data.get("brand")) + "-" + String(data.get("model"))).toLowerCase().replace(/[^a-z0-9ก-๙]+/gi, "-").replace(/^-|-$/g, "") + "-" + Date.now().toString().slice(-4);
  const next = {
    id: id,
    brand: String(data.get("brand")).trim(),
    model: String(data.get("model")).trim(),
    category: String(data.get("category")),
    vehicleType: String(data.get("vehicleType")),
    price: Number(data.get("price") || 0),
    monthly: Number(data.get("monthly") || 0),
    stock: Number(data.get("stock") || 0),
    branch: String(data.get("branch")).trim(),
    availability: String(data.get("availability")),
    promo: String(data.get("promo")).trim(),
    color: String(data.get("color")).trim(),
    description: String(data.get("description")).trim(),
    image: currentImageData,
    specs: (products.find(function(item) { return item.id === id; }) || {}).specs || ["รอเพิ่มสเปก", "สอบถามสาขา", "ดูรายละเอียด", "พร้อมให้คำแนะนำ"]
  };
  const existing = products.findIndex(function(item) { return item.id === id; });
  if (existing >= 0) products[existing] = next; else products.unshift(next);
  saveProducts();
  closeEditor();
  renderProducts();
  renderAdmin();
  populateCalculator();
  showToast("บันทึกสินค้าเรียบร้อยแล้ว — อัปเดตหน้าเว็บทันที");
}

function handleAction(target) {
  const action = target.dataset.action;
  const id = target.dataset.id;
  if (action === "detail") openProductModal(id);
  if (action === "edit") {
    if (!document.body.classList.contains("admin-mode")) {
      showToast("ปุ่มแก้ไขใช้ได้เมื่อเปิด Admin Demo");
      return;
    }
    closeModal();
    openEditor(id);
  }
  if (action === "lead") {
    closeModal();
    openLead("สอบถามรถ", id);
  }
  if (action === "test-drive") {
    closeModal();
    openLead("ทดลองขับ", id);
  }
  if (action === "article-edit") {
    if (!document.body.classList.contains("admin-mode")) {
      showToast("ปุ่มแก้ไขใช้ได้เมื่อเปิด Admin Demo");
      return;
    }
    closeModal();
    openArticleEditor(id);
  }
  if (action === "article-delete") deleteArticle(id);
}

document.addEventListener("click", function(event) {
  const actionTarget = event.target.closest("[data-action]");
  if (actionTarget) handleAction(actionTarget);
  const leadTarget = event.target.closest("[data-lead]");
  if (leadTarget) openLead(leadTarget.dataset.lead);
  const articlePreview = event.target.closest("[data-article-preview]");
  if (articlePreview) {
    const article = articles.find(function(item) { return item.id === articlePreview.dataset.articlePreview; });
    if (article) showToast(article.title + " · " + article.excerpt);
  }
});

document.getElementById("filterChips").addEventListener("click", function(event) {
  const button = event.target.closest("[data-filter]");
  if (button) setFilter(button.dataset.filter);
});

document.getElementById("sortProducts").addEventListener("change", renderProducts);

document.getElementById("budgetPills").addEventListener("click", function(event) {
  const button = event.target.closest("[data-budget]");
  if (!button) return;
  applyBudget(button.dataset.budget);
  document.getElementById("vehicles").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelectorAll("[data-budget]").forEach(function(element) {
  if (element.closest("#budgetPills")) return;
  element.addEventListener("click", function() {
    applyBudget(element.dataset.budget);
  });
});

document.querySelectorAll("[data-filter-link]").forEach(function(element) {
  element.addEventListener("click", function() {
    setFilter(element.dataset.filterLink);
  });
});

document.getElementById("downRange").addEventListener("input", calculateLoan);
document.getElementById("termSelect").addEventListener("change", calculateLoan);
document.getElementById("calcProduct").addEventListener("change", calculateLoan);
document.getElementById("calculateBtn").addEventListener("click", function() {
  calculateLoan();
  showToast("คำนวณค่างวดจำลองใหม่แล้ว");
});

document.getElementById("modalBackdrop").addEventListener("click", closeModal);
document.querySelectorAll("[data-close-modal]").forEach(function(element) { element.addEventListener("click", closeModal); });
document.querySelectorAll("[data-close-editor]").forEach(function(element) { element.addEventListener("click", closeEditor); });

document.getElementById("leadForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = this.elements.name.value;
  closeModal();
  this.reset();
  showToast("รับข้อมูลของคุณแล้วครับ คุณ" + name + " ทีมงานจะติดต่อกลับโดยเร็ว");
});

document.getElementById("adminTrigger").addEventListener("click", function() {
  if (document.body.classList.contains("admin-mode")) {
    if (document.body.classList.contains("admin-open")) closeAdminPanel(); else openAdmin();
  } else openAdmin();
});
document.getElementById("adminClose").addEventListener("click", closeAdminPanel);
document.getElementById("newProductBtn").addEventListener("click", function() { openEditor(""); });
document.getElementById("inventoryBtn").addEventListener("click", function() { showToast("เปิดมุมมองสต๊อกแล้ว — ใช้ปุ่มแก้ไขเพื่อปรับยอดใน Demo"); });
document.getElementById("adminSearch").addEventListener("input", renderAdmin);
document.getElementById("adminTypeFilters").addEventListener("click", function(event) {
  const button = event.target.closest("[data-admin-type]");
  if (!button) return;
  adminTypeFilter = button.dataset.adminType;
  renderAdmin();
});
document.getElementById("adminBrandFilters").addEventListener("click", function(event) {
  const button = event.target.closest("[data-admin-brand]");
  if (!button) return;
  adminBrandFilter = button.dataset.adminBrand;
  renderAdmin();
});
document.getElementById("adminModuleTabs").addEventListener("click", function(event) {
  const button = event.target.closest("[data-admin-module]");
  if (!button) return;
  const moduleName = button.dataset.adminModule;
  document.querySelectorAll("#adminModuleTabs button").forEach(function(item) { item.classList.toggle("active", item.dataset.adminModule === moduleName); });
  document.getElementById("adminProductsModule").hidden = moduleName !== "products";
  document.getElementById("adminArticlesModule").hidden = moduleName !== "articles";
  if (moduleName === "articles") renderAdminArticles();
});
document.getElementById("newArticleBtn").addEventListener("click", function() { openArticleEditor(""); });
document.getElementById("articleSearch").addEventListener("input", renderAdminArticles);
document.getElementById("articleCategoryFilter").addEventListener("change", renderAdminArticles);
document.getElementById("articleStatusFilter").addEventListener("change", renderAdminArticles);
document.getElementById("articleForm").addEventListener("submit", saveArticle);
document.querySelectorAll("[data-close-article-editor]").forEach(function(element) { element.addEventListener("click", closeArticleEditor); });
document.getElementById("productForm").addEventListener("submit", saveProduct);
document.getElementById("productImage").addEventListener("change", function(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  if (!file.type.match(/^image\/(png|jpeg|webp)$/) || file.size > 3 * 1024 * 1024) {
    event.target.value = "";
    showToast("กรุณาเลือก JPG, PNG หรือ WebP ขนาดไม่เกิน 3 MB");
    return;
  }
  const reader = new FileReader();
  reader.onload = function(loadEvent) {
    currentImageData = loadEvent.target.result;
    renderImagePreview();
    showToast("เลือกรูปสินค้าแล้ว — กดบันทึกเพื่อใช้งาน");
  };
  reader.readAsDataURL(file);
});
document.getElementById("removeProductImage").addEventListener("click", function() {
  currentImageData = "";
  document.getElementById("productImage").value = "";
  renderImagePreview();
  showToast("ลบรูปสินค้าออกจากแบบฟอร์มแล้ว");
});
document.getElementById("articleImage").addEventListener("change", function(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  if (!file.type.match(/^image\/(png|jpeg|webp)$/) || file.size > 3 * 1024 * 1024) {
    event.target.value = "";
    showToast("กรุณาเลือก JPG, PNG หรือ WebP ขนาดไม่เกิน 3 MB");
    return;
  }
  const reader = new FileReader();
  reader.onload = function(loadEvent) {
    currentArticleImage = loadEvent.target.result;
    renderArticleImagePreview();
    showToast("เลือกรูปหน้าปกแล้ว — กดบันทึกเพื่อใช้งาน");
  };
  reader.readAsDataURL(file);
});
document.getElementById("removeArticleImage").addEventListener("click", function() {
  currentArticleImage = "";
  document.getElementById("articleImage").value = "";
  renderArticleImagePreview();
  showToast("ลบรูปหน้าปกออกจากบทความแล้ว");
});

document.getElementById("mobileMenuBtn").addEventListener("click", function() {
  const nav = document.getElementById("mainNav");
  const isOpen = nav.classList.toggle("open");
  this.setAttribute("aria-expanded", String(isOpen));
});
document.querySelectorAll(".main-nav a").forEach(function(link) {
  link.addEventListener("click", function() {
    document.getElementById("mainNav").classList.remove("open");
    document.getElementById("mobileMenuBtn").setAttribute("aria-expanded", "false");
  });
});

populateCalculator();
renderProducts();
renderKnowledge();
