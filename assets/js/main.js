const modal = document.getElementById("case-modal");
    const modalContent = document.getElementById("modal-content");
    let activeIdx = -1;

    window.openCase = function(id) {
      const idx = CASES.findIndex(c => c.id === id);
      if (idx === -1) return;
      activeIdx = idx;
      const c = CASES[idx];
      const linksHtml = c.links ? `
        <div class="flex flex-wrap gap-3">
          ${c.links.map((l, i) => `<a href="${l[1]}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded text-xs font-mono-code ${i === 0 ? 'bg-[#e05a2b] text-white font-semibold' : 'border border-white/20 text-white hover:border-[#e05a2b]'}">${l[0]} ↗</a>`).join("")}
        </div>` : "";

      modalContent.innerHTML = `
        <div>
          <div class="flex flex-wrap items-center gap-3 font-mono-code text-xs text-[#9e9990] mb-3">
            <span class="text-[#e05a2b]">CASE ${c.num}</span>
            <span>·</span>
            <span>${c.tag}</span>
            <span class="px-2.5 py-0.5 rounded bg-[#e05a2b]/15 border border-[#e05a2b]/40 text-[#e05a2b]">${c.status}</span>
          </div>
          <h2 class="font-serif-cn text-3xl sm:text-5xl text-white mb-4">${c.title}</h2>
          <p class="text-base text-[#b8b3aa] max-w-2xl mb-6">${c.summary}</p>
          ${linksHtml}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          ${c.metrics.map(m => `
            <div class="p-5 rounded bg-[#141311] border border-white/10">
              <div class="font-didone text-2xl text-white">${m[0]}</div>
              <div class="text-xs text-[#e05a2b] mt-1">${m[1]}</div>
              <div class="text-[11px] text-[#847f77] mt-1.5">${m[2]}</div>
            </div>
          `).join("")}
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-6 rounded bg-[#141311] border border-white/10">
            <div class="font-mono-code text-[11px] text-[#e05a2b] mb-2">01 · 解决什么问题</div>
            <p class="text-sm text-[#c7c2b8] leading-relaxed">${c.problem}</p>
          </div>
          <div class="p-6 rounded bg-[#141311] border border-white/10">
            <div class="font-mono-code text-[11px] text-[#e05a2b] mb-2">02 · 实现了什么</div>
            <p class="text-sm text-[#c7c2b8] leading-relaxed">${c.solution}</p>
          </div>
        </div>

        <div class="p-5 rounded bg-[#e05a2b]/10 border border-[#e05a2b]/40">
          <div class="font-mono-code text-[11px] text-[#e05a2b] mb-1.5">EVIDENCE &amp; SCOPE · 证据与口径边界</div>
          <p class="text-sm text-[#f4f0e8]">${c.evidence}</p>
        </div>

        <div class="flex flex-wrap items-center gap-2 pt-4 border-t border-white/10">
          <span class="font-mono-code text-[11px] text-[#847f77] mr-2">STACK</span>
          ${c.stack.map(s => `<span class="px-2.5 py-1 rounded bg-white/5 border border-white/10 font-mono-code text-[11px] text-[#c7c2b8]">${s}</span>`).join("")}
        </div>
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
    if (location.search.includes("dialog=baichuan")) { openCase("baichuan-medical-rag"); }
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
