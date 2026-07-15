import type { TranslationKeys } from "./en";

export const zh: TranslationKeys = {
  // Header
  nav_skip: "跳到主要内容",
  nav_product: "产品",
  nav_features: "特色功能",
  nav_roadmap: "路线图",
  nav_download: "下载",
  nav_pricing: "价格",
  nav_blog: "博客",
  nav_waitlist: "加入候补名单",

  // Hero
  hero_eyebrow: "实验性版本 • 积极开发中",
  hero_headline_1: "一款我每天都",
  hero_headline_2: "真正想要使用的",
  hero_headline_accent: "新世代 DAW",
  hero_desc:
    "Futureboard 是一款因为市面上的工具都不够完美而诞生的 DAW。采用原生 Rust 核心、GPU 渲染 UI，以及在灵感涌现时绝不拖累你的流程设计。",
  hero_download: "下载",
  hero_waitlist: "加入测试",
  hero_github: "GitHub",

  // Product Lineup
  product_eyebrow: "产品路线",
  product_title: "单一代码库，三种构建形式。",
  product_lead: "网页版现已可用。桌面端原生版本则是我们目前全力开发的核心。",
  product_express_tag: "Express",
  product_express_name: "Futureboard Express",
  product_express_desc:
    "无需安装，在浏览器中即可直接运行。非常适合快速勾勒灵感和分享创意。基于 React + WASM 构建。",
  product_express_spec1: "在浏览器中运行",
  product_express_spec2: "React + WASM",
  product_express_spec3: "无需安装",
  product_express_badge: "Web 版本 →",

  product_lite_tag: "Lite",
  product_lite_name: "Futureboard Lite",
  product_lite_desc:
    "基于 Electron 开发的桌面客户端。在原生版本打磨完善期间，为您提供更易部署的跨平台中间替代版本。",
  product_lite_spec1: "Electron 桌面端",
  product_lite_spec2: "Windows / macOS / Linux",
  product_lite_spec3: "安装便捷直观",
  product_lite_badge: "Electron 构架",

  product_studio_tag: "Studio",
  product_studio_name: "Futureboard Studio",
  product_studio_desc:
    "这是我们真正专注的核心。基于 Rust + GPUI 架构，零多余内存开销，UI 渲染直接调用 GPU 核心算力。",
  product_studio_spec1: "Rust + GPUI",
  product_studio_spec2: "超低延迟音频核心",
  product_studio_spec3: "GPU 渲染用户界面",
  product_studio_badge: "原生客户端 • 主版本",

  // Features Showcase
  features_eyebrow: "核心功能",
  features_title: "这些是真正可用的功能",
  features_lead: "针对我们在其他 DAW 中经常遇到的六个痛点进行了彻底重构。",

  ft_track_title: "轨道编排体验",
  ft_track_body1:
    "旨在为制作人提供清晰、专注且高响应的编排空间。每个轨道都配备了音量、声像、静音、独奏、录音准备等核心控制模块。",
  ft_track_body2:
    "即使面对复杂的大型项目，界面结构依旧清晰。轨道头部与音频波形图完美对应，便于您在第一时间找到目标轨道。",

  ft_inspector_title: "属性检查器",
  ft_inspector_body1:
    "用于在不影响主时间轴流程的情况下编辑选定轨道、剪辑和音符的专属区域。音量大小、音高修剪、淡入淡出都可一键搞定。",
  ft_inspector_body2:
    "极大地减少了弹窗对视觉的干扰，与主工作区无缝配合，大幅提高工作流程效率。",

  ft_scroll_title: "平滑滚动播放",
  ft_scroll_body1:
    "使播放过程中的时间轴移动连贯顺畅，防止闪烁跳动造成视觉疲劳。方便对大型复杂项目进行大跨度的快速预览。",
  ft_scroll_body2:
    "视窗会随着播放指针平稳推进，在任何缩放比例下，音频波形图均能实时、无感地渲染成型。",

  ft_toolbar_title: "悬浮快捷工具栏",
  ft_toolbar_body1:
    "将剪切、缩放、对齐、移动等最常用的编辑工具直接放置在您的指针周围，操作触手可及。",
  ft_toolbar_body2:
    "具备智能自适应能力，占用空间极小，在闲置时会自动隐去，确保工作区干净清爽。",

  ft_mixer_title: "调音台面板",
  ft_mixer_body1:
    "为高水准的声音塑造提供高效率的支持。每个通道条都包含音量电平表、插槽效果器发送（Inserts & Sends）以及精确的路由图谱。",
  ft_mixer_body2:
    "版面高密度集成而不显凌乱，满足新手玩家和专业调音师对细节处理的严苛要求。",

  ft_midi_title: "MIDI 钢琴卷帘窗",
  ft_midi_body1:
    "在精细的音高网格上进行乐曲创作与编辑。音符方块清晰呈现，旋律、和弦及打击乐音效尽在掌控。",
  ft_midi_body2:
    "轻松修改音符长度、强弱力度值（Velocity），支持自动吸附对齐（Quantization），操作行云流水。",

  // Roadmap
  roadmap_eyebrow: "开发路线图",
  roadmap_title: "从首个 Alpha，迈向真正的原生 DAW。",
  roadmap_lead:
    "Futureboard Studio 现已转向原生优先。当前重点不再是移植 UI，而是稳定 DAW 核心、强化插件支持，并为首个公开 Alpha 做准备。",
  roadmap_status_active: "Alpha Lockdown",
  roadmap_status_planned: "已规划",
  roadmap_status_future: "将来目标",

  roadmap_item1_label: "原生 Studio 核心",
  roadmap_item1_detail:
    "Rust/GPUI 桌面应用、原生项目生命周期、编曲时间轴、属性检查器、调音台、编辑器面板，以及 Studio 的主要工作流。",
  roadmap_item2_label: "音频引擎稳定化",
  roadmap_item2_detail:
    "实时播放、走带控制、采样率管理、PDC、延迟报告，以及无需重建处理图的实时调音台控制。",
  roadmap_item3_label: "MIDI 编辑与播放",
  roadmap_item3_detail:
    "钢琴卷帘编辑、力度、CC 控制轨、MIDI 路由、导入流程，以及用于真实片段播放的引擎调度。",
  roadmap_item4_label: "VST3 插件宿主",
  roadmap_item4_detail:
    "插件扫描、编辑器托管、状态持久化、真实 ProcessContext、参数自动化与兼容性强化。",
  roadmap_item5_label: "调音台 / 路由 / Multi-Out",
  roadmap_item5_detail:
    "通道条、发送/返回、路由矩阵、独立调音台、VSTi Multi-Out 子通道条与子通道 FX 插槽。",
  roadmap_item6_label: "导出 / 混缩基础",
  roadmap_item6_detail:
    "支持 WAV、RAUF、FLAC 与可选 MP3 导出、离线渲染、PDC 感知预滚、进度/取消，并明确说明桥接插件的限制。",
  roadmap_item7_label: "Windows First Alpha",
  roadmap_item7_detail:
    "安装版与便携版、测试者反馈、崩溃/卡顿诊断、已知问题，以及插件兼容性报告。",
  roadmap_item8_label: "Linux 与 macOS 构建",
  roadmap_item8_detail:
    "待 Windows 原生路径稳定后，再推进打包、平台测试与插件宿主的跨平台移植。",
  roadmap_item9_label: "更多插件格式与高级工具",
  roadmap_item9_detail:
    "CLAP、AU、LV2、乐谱编辑、声乐工具、分轨工具、视频时间轴、MTC/LTC、移动端伴侣与扩展 API 将在后续阶段推出。",

  // Waitlist
  waitlist_eyebrow: "早期体验",
  waitlist_headline: "接收消息推送",
  waitlist_headline_accent: "在发布时第一时间获取",
  waitlist_desc:
    "我们正在全力进行产品迭代。提交您的电子邮箱，当可用的桌面客户端构建完毕后，我们会在第一时间内给您发送通知，绝无多余广告推广垃圾信息。",
  waitlist_perk1: "在公开发布之前，享有第一批次的原生内部测试版下载特权",
  waitlist_perk2: "定期接收关于技术构架细节与研发进程的最新进展简报",
  waitlist_perk3: "可随时一键退订，绝对尊重您的个人隐私和使用体验",

  // Footer
  footer_tagline: "次世代 DAW 与创意音频创作平台。",
  footer_links_title: "产品",
  footer_privacy: "隐私政策",
  footer_terms: "服务条款",
  footer_copyright:
    "© 2026 Futureboard Project。代码基于 Apache 2.0 / MIT 许可证授权。",

  // Download Page
  dl_eyebrow: "下载",
  dl_title: "下载 Futureboard",
  dl_lead:
    "我们正处于开发阶段，但如果您想率先体验，我们已在 GitHub 释出了 Windows 初步体验包。请注意部分功能可能不够完善。",
  dl_released: "发布于 2026年6月",
  dl_all_releases: "在 GitHub 查看全部构建 →",

  dl_win_desc:
    "这是我们目前日常编写代码和测试的默认版本。尽管可能带有测试中尚未修复的缺陷，但基本的时间轴、调音台、钢琴卷帘功能已可使用。",
  dl_mac_desc:
    "暂无构建。GPUI 框架底层完美支持 macOS，待 Windows 版本基本稳定后，我们会立刻着手 Mac 构建。欢迎有兴趣的贡献者协同参与。",
  dl_linux_desc:
    "暂无构建。预计开发优先级在 Mac 之后。由于是 Rust 重构，跨平台迁移较简单，只需后续封装对应的系统安装包及进行音频测试。",
  dl_coming_later: "随后推出",
  dl_download_exe: "下载安装包 .exe",
  dl_zip_portable: "下载绿色便携版 .zip",

  dl_sys_req: "系统要求",
  dl_min: "最低配置",
  dl_rec: "推荐配置",

  dl_what_is_in: "此版本包含的功能",
  dl_changelog_latest: "最新版本",
  dl_changelog_older: "更早的 Pre-alpha 记录",
  dl_changelog_older_desc:
    "内部测试版本。包含了我们将渲染器彻底重写并数次移植至 GPUI 过程中的底层构架搭建日志。",

  dl_notice_title: "提示 — 这是早期 Alpha 测试软件",
  dl_notice_body:
    "由于该版本仍为开发版，运行中可能会遇到意外退出或数据无法保存的情况。如果您遇到故障，请在 GitHub 提交反馈，或直接在 Discord 与我们团队联系。",
  dl_sys_req_link: "查看完整系统要求 →",

  // System Requirements Page
  sysreq_eyebrow: "下载",
  sysreq_title: "系统要求",
  sysreq_lead:
    "在 Windows、Linux 和 macOS 上运行 Futureboard Studio 的硬件与软件要求。",
  sysreq_back_to_download: "← 返回下载页",

  // Pricing Page
  pricing_eyebrow: "价格",
  pricing_title: "简单、诚实的价格。",
  pricing_lead:
    "免费开始，永久拥有完整的 DAW。专业附加功能只需一次性付费——没有订阅，也没有反复提醒。",
  pricing_community_name: "Community Edition",
  pricing_community_price: "$0",
  pricing_community_period: "永久免费",
  pricing_community_desc:
    "完整的 Futureboard DAW。编曲、录音、混音所需的一切，免费提供。",
  pricing_community_cta: "下载",
  pricing_exclusive_name: "Exclusive Edition",
  pricing_exclusive_price: "$99",
  pricing_exclusive_period: "一次性购买",
  pricing_exclusive_desc:
    "包含 Community 的全部功能，另加低延迟录音、记谱、为画面配乐以及我们的独家音源等专业工具包。",
  pricing_exclusive_cta: "即将推出",
  pricing_includes_community: "包含 Community 全部功能，另加：",
  pricing_feat_daw: "完整多轨 DAW",
  pricing_feat_web: "浏览器版与原生版",
  pricing_feat_vst: "支持 VST3 插件",
  pricing_feat_updates: "免费更新",
  pricing_feat_asio: "ASIO 低延迟音频",
  pricing_feat_score: "乐谱编辑器",
  pricing_feat_video: "视频播放器",
  pricing_feat_plugin: "独家插件",
  pricing_regional_note: "全球 $99 · 泰国 ฿3,590。结账时以当地货币显示。",
  pricing_badge: "超值之选",
};
