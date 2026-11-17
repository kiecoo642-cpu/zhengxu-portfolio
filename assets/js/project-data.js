const CASES = [
  {
    id: "rag-knowledge-base",
    num: "01",
    tag: "个人项目 · 脱敏复刻 DEMO · 2026",
    title: "RAG Knowledge Base",
    summary: "将百川智能实习中的医疗 RAG 实践整理为可公开查看的脱敏复刻 Demo，呈现从文档入库、检索问答到引用溯源和自动化评测的完整流程。",
    status: "脱敏复刻 DEMO · 2026",
    layout: "editorial-showcase",
    githubUrl: "https://github.com/kiecoo642-cpu",
    problem: "围绕医疗知识查找、模型幻觉与答案溯源，把检索过程和回答依据呈现在同一条工作流中。",
    solution: "覆盖多格式文档解析（OCR + 结构分析）、BM25 与向量混合检索、Rerank、段落级引用，以及参考 RAGAS 思路的忠实度、相关性与召回率评测。",
    evidence: "这里展示的是个人脱敏复刻 Demo 和公开仓库，不是百川智能内部产品截图；实习中的贡献与内部评测数据在「百川智能 · 医疗 RAG」案例中单独说明。",
    stackText: "STACK — FASTAPI · VUE 3 · MILVUS · MINIO · CELERY · RABBITMQ · RAGAS",
    stack: ["FASTAPI", "VUE 3", "MILVUS", "MINIO", "CELERY", "RABBITMQ", "RAGAS"],
    mainScreenshot: "assets/img/rag-eval-main.png",
    gridScreenshots: [
      { src: "assets/img/rag-kb.png", alt: "RAG System - Knowledge Bases" },
      { src: "assets/img/rag-chat.png", alt: "RAG System - Chat" },
      { src: "assets/img/rag-dashboard.png", alt: "RAG System - Dashboard" },
      { src: "assets/img/rag-monitor.png", alt: "RAG System - System Monitor" }
    ]
  },
  {
    id: "baichuan-medical-rag",
    num: "02",
    tag: "百川智能 · AI 产品经理实习生 · 医疗 RAG",
    title: "医疗 RAG 知识助手与评测模块",
    summary: "负责评测模块（含评测上传与得分统计），与同组同岗共用一套 3 轮 30 次评测数据，定位多跳 4.38 vs 单跳 9.71 的风险信号。",
    status: "核心案例 · 风险信号识别",
    metrics: [
      ["3 轮 / 30 次", "评测轮次与样本", "每轮 7 单跳 / 2 多跳 / 1 陷阱题"],
      ["4.38 vs 9.71", "多跳 vs 单跳得分", "多跳样本仅 2 个，属风险信号"],
      ["共用数据集", "数据与分工口径", "负责评测上传与得分，非独立另跑"]
    ],
    problem: "医疗知识问答需严格区分单跳事实、跨段多跳推理与诱导陷阱题，团队需要评测上传与得分汇总模块定位检索与生成短板。",
    solution: "负责评测模块搭建与结果汇总，基于与同组同岗共用的 3 轮 30 次评测数据，识别出多跳均分 4.38 显著低于单跳 9.71 的风险信号。",
    evidence: "来源：百川智能医疗 RAG 评测模块记录（与同组同岗共用一套数据，本人负责评测上传与得分模块）。边界说明：每轮多跳样本仅 2 个，4.38 vs 9.71 仅作风险信号提示，不作为稳定统计学结论。",
    stackText: "STACK — 评测集上传 · 得分统计 · 单跳 / 多跳 / 陷阱题 · 风险信号归因",
    stack: ["评测集上传", "得分统计", "单跳 / 多跳 / 陷阱题", "风险信号归因"]
  },
  {
    id: "ihg-talent-match",
    num: "03",
    tag: "IHG × aTalent · 洲际酒店 · 8 个月",
    title: "IHG 岗位人才匹配系统",
    summary: "面向 3000+ 用户与 500+ 酒店，设计高管端 App + 智能语音双轨采集，基于过去 5 年在任者简历做向量匹配，推进至 MVP。",
    status: "推进至 MVP · 团队业务口径",
    metrics: [
      ["3000+ / 500+", "活跃用户 / 覆盖酒店", "团队业务口径"],
      ["8h → 1.5h", "初筛耗时变化", "团队业务口径，非本人亲自计时"],
      ["85%", "业务采纳率", "团队口径，分母口径待澄清"]
    ],
    problem: "酒店高管岗位隐性特征多，结构化填写门槛高；传统人工初筛约 8 小时，跨酒店复用历史用人经验困难。",
    solution: "设计高管端 App + 智能语音助手双轨采集降低输入负担；沉淀过去 5 年在任者简历画像做向量相似度匹配，推进至 MVP。",
    evidence: "来源：aTalent 实习业务口径摘要。原始计时日志不在手里，不表述为本人亲自计时；85% 采纳率分母口径待澄清。",
    stackText: "STACK — 岗位画像建模 · 向量相似度匹配 · APP + 语音双轨采集 · HR SAAS MVP",
    stack: ["岗位画像建模", "向量相似度匹配", "App + 语音双轨采集", "HR SaaS MVP"]
  },
  {
    id: "model-scene-selection",
    num: "04",
    tag: "IHG × aTalent · 洲际酒店",
    title: "模型业务场景选型（L1–L4）",
    summary: "先按 L1–L4 分层，基于现有成熟 Benchmark 调研与岗位画像匹配简历业务评测得出分场景选型；矩阵与 4 条原则获 IHG 审批。",
    status: "报价方案 v2 §4E · 已获审批",
    metrics: [
      ["L1–L4", "任务复杂度分层", "先分层再对应评测"],
      ["4 条原则", "核心选型准则", "报价方案 v2 §4E"],
      ["分场景选型", "交付结论形式", "已获 IHG 审批，无单一模型定稿"]
    ],
    problem: "企业场景中简单信息抽取与复杂人岗匹配对模型能力、成本和时延要求不同，客户报价阶段需有据可依的选型逻辑。",
    solution: "先按 L1–L4 分层，基于现有成熟 Benchmark 做调研与评测，再针对岗位画像匹配简历做业务评测，直接输出分场景选型矩阵与 4 条原则。",
    evidence: "来源：aTalent 报价方案 v2 §4E（已获 IHG 审批）。没有单一最终选型定稿，不写具体实测分数，不编造最终选定模型。",
    stackText: "STACK — L1–L4 任务分层 · BENCHMARK 调研 · 业务场景评测 · 选型决策矩阵",
    stack: ["L1–L4 任务分层", "Benchmark 调研", "业务场景评测", "选型决策矩阵"]
  },
  {
    id: "ask-me-zhengxu",
    num: "05",
    tag: "个人自研 · 求职场景 · AI CAREER AGENT",
    title: "Ask Me",
    summary: "设计并上线面向招聘场景的 AI Career Agent，通过 Knowledge-Claim-Source 证据模型约束回答，让经历、个人贡献和信息来源可以被进一步核验。",
    status: "线上可体验 · 106 项自动化测试",
    layout: "editorial-showcase",
    githubUrl: "https://github.com/kiecoo642-cpu/ask-me-zhengxu",
    liveUrl: "https://kiecoo642-cpu.github.io/ask-me-zhengxu/",
    problem: "针对传统简历信息有限、无法追问及个人贡献难核验的问题，帮助面试官在准备与面试深挖阶段高效核验候选人经历与统计口径。",
    solution: "设计 Knowledge-Claim-Source 证据模型严格管理 AI 辅助范围，实现未知问题拒答与幻觉控制；建立覆盖 20 个核心问题、20 个安全攻击及多轮追问的评测集，完成 106 项自动化测试与 48 个面试模拟检验。",
    evidence: "这里展示的是郑栩公开维护的 Ask Me 线上站点与源码仓库（kiecoo642-cpu/ask-me-zhengxu），所有回答均受公开资料证据链约束。",
    stackText: "STACK — NEXT.JS · TYPESCRIPT · CLAIM-SOURCE MODEL · VITEST · GITHUB PAGES",
    stack: ["NEXT.JS", "TYPESCRIPT", "CLAIM-SOURCE MODEL", "VITEST", "GITHUB PAGES"],
    mainScreenshot: "assets/img/ask-me-preview.png"
  },
  {
    id: "dh-student-union",
    num: "06",
    tag: "东华大学学生会 · 校园流程数字化",
    title: "东华大学学生会 · 审批流程线上化",
    summary: "依托飞书审批流、多维表格与 Wiki 推动学生会审批线上化，实际覆盖 8 个部门、100+ 人使用。",
    status: "已落地 · 8 部门 / 100+ 人",
    metrics: [
      ["8 个部门", "实际覆盖范围", "郑栩本人确认口径"],
      ["100+ 人", "线上使用规模", "从纸质跑单切换到飞书协作"],
      ["飞书 3 件套", "落地工具链", "飞书审批流 / 多维表格 / Wiki"]
    ],
    problem: "线下纸质审批来回跑、状态不透明；核心阻力在组织习惯——“难的不是工具，而是让大家愿意换做事习惯”。",
    solution: "梳理审批流转节点，用飞书审批流承接提交、多维表格沉淀台账、Wiki 编写指南，推动 8 个部门、100+ 人完成线上化切换。",
    evidence: "来源：郑栩本人确认及 Ask-Me 知识库记录。未对提速天数做专门计时，不编造提速百分比与未提及的职务、时间。",
    stackText: "STACK — 飞书审批流 · 飞书多维表格 · 飞书 WIKI · 组织习惯迁移",
    stack: ["飞书审批流", "飞书多维表格", "飞书 Wiki", "组织习惯迁移"]
  }
];
