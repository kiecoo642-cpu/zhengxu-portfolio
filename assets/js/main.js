const modal = document.getElementById("case-modal");
const modalContent = document.getElementById("modal-content");
let activeIdx = -1;

window.copyCaseLink = function(id, btnEl) {
  const url = window.location.origin + window.location.pathname + "?case=" + id;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url);
  }
  if (btnEl) {
    const oldText = btnEl.textContent;
    btnEl.textContent = "已复制案例链接 ✓";
    setTimeout(() => { btnEl.textContent = oldText; }, 1800);
  }
};

window.openCase = function(id) {
  const idx = CASES.findIndex(c => c.id === id);
  if (idx === -1) return;
  activeIdx = idx;
  const c = CASES[idx];

  const metricsHtml = c.metrics ? `
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
      ${c.metrics.map(m => `
        <div class="p-5 rounded bg-[#161513] border border-white/10">
          <div class="font-didone text-2xl text-white">${m[0]}</div>
          <div class="text-xs text-[#e05a2b] mt-1">${m[1]}</div>
          <div class="text-[11px] text-[#847f77] mt-1.5">${m[2]}</div>
        </div>
      `).join("")}
    </div>
  ` : "";

  const screenshotsHtml = c.mainScreenshot ? `
    <div class="pt-4">
      <h3 class="font-bold text-base sm:text-lg text-[#f4f0e8] mb-5">项目界面</h3>
      <div class="bg-white rounded-xl overflow-hidden shadow-2xl border border-white/10 ${c.gridScreenshots ? 'mb-6' : ''}">
        <img src="${c.mainScreenshot}" alt="${c.title} 主界面" class="w-full h-auto block" />
      </div>
      ${c.gridScreenshots ? `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${c.gridScreenshots.map(img => `
            <div class="bg-white rounded-xl overflow-hidden shadow-xl border border-white/10">
              <img src="${img.src}" alt="${img.alt}" class="w-full h-auto block" />
            </div>
          `).join("")}
        </div>
      ` : ""}
    </div>
  ` : "";

  modalContent.innerHTML = `
    <div>
      <div class="font-mono-code text-xs tracking-[0.14em] text-[#a6a198] uppercase mb-4">
        ${c.tag}
      </div>
      <h2 class="${/^[A-Za-z0-9\s\-–]+$/.test(c.title) ? 'font-didone text-5xl sm:text-7xl' : 'font-serif-cn text-3xl sm:text-5xl'} text-[#f4f0e8] leading-[1.06] mb-6">${c.title}</h2>
      <p class="text-sm sm:text-base text-[#b8b3aa] leading-relaxed max-w-2xl mb-7">${c.summary}</p>
      <div class="flex flex-wrap items-center gap-3.5">
        ${c.githubUrl ? `
          <a href="${c.githubUrl}" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 rounded-full bg-[#f4f0e8] text-[#171614] text-xs font-mono-code font-medium hover:bg-[#e05a2b] hover:text-white transition-colors">
            VIEW GITHUB ↗
          </a>
        ` : ""}
        ${c.liveUrl ? `
          <a href="${c.liveUrl}" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 rounded-full border border-white/25 text-[#f4f0e8] text-xs hover:border-[#e05a2b] hover:text-[#e05a2b] transition-colors">
            直接体验 ↗
          </a>
        ` : ""}
        <button type="button" onclick="copyCaseLink('${c.id}', this)" class="px-5 py-2.5 rounded-full border border-white/20 text-[#f4f0e8] text-xs hover:border-white/50 transition-colors">
          复制案例链接
        </button>
      </div>
    </div>

    ${metricsHtml}

    <div class="divide-y divide-white/10 border-t border-b border-white/10">
      <div class="py-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
        <div class="md:col-span-3 flex items-baseline gap-3">
          <span class="font-didone text-lg text-[#e05a2b]">01</span>
          <span class="font-bold text-sm sm:text-base text-[#f4f0e8]">解决什么问题</span>
        </div>
        <div class="md:col-span-9 text-xs sm:text-sm text-[#b8b3aa] leading-relaxed">${c.problem}</div>
      </div>
      <div class="py-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
        <div class="md:col-span-3 flex items-baseline gap-3">
          <span class="font-didone text-lg text-[#e05a2b]">02</span>
          <span class="font-bold text-sm sm:text-base text-[#f4f0e8]">实现了什么</span>
        </div>
        <div class="md:col-span-9 text-xs sm:text-sm text-[#b8b3aa] leading-relaxed">${c.solution}</div>
      </div>
    </div>

    <div class="p-5 bg-[#221d17] border-l-2 border-[#e05a2b]">
      <div class="font-bold text-xs text-[#f4f0e8] mb-2">证据与口径</div>
      <p class="text-xs sm:text-sm text-[#b8b3aa] leading-relaxed">${c.evidence}</p>
    </div>

    <div class="font-mono-code text-[11px] tracking-[0.14em] text-[#847f77] uppercase">
      ${c.stackText || ("STACK — " + c.stack.join(" · "))}
    </div>

    ${screenshotsHtml}
  `;

  modal.classList.remove("hidden");
  modal.scrollTop = 0;
  document.body.style.overflow = "hidden";
};

function closeCase() {
  modal.classList.add("hidden");
  document.body.style.overflow = "";
  activeIdx = -1;
}

document.getElementById("close-btn").onclick = closeCase;
document.getElementById("prev-btn").onclick = () => openCase(CASES[(activeIdx - 1 + CASES.length) % CASES.length].id);
document.getElementById("next-btn").onclick = () => openCase(CASES[(activeIdx + 1) % CASES.length].id);

const params = new URLSearchParams(window.location.search);
if (params.get("case")) {
  openCase(params.get("case"));
} else if (location.search.includes("dialog=baichuan")) {
  openCase("baichuan-medical-rag");
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && activeIdx !== -1) closeCase();
});

const copyEmailBtn = document.getElementById("copy-email-btn");
if (copyEmailBtn) {
  copyEmailBtn.addEventListener("click", () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText("3134385269@qq.com");
      copyEmailBtn.textContent = "已复制 3134385269@qq.com ✓";
      setTimeout(() => { copyEmailBtn.textContent = "复制邮箱"; }, 1800);
    }
  });
}
