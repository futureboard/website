import type { TranslationKeys } from "./en";

export const zh: TranslationKeys = {
  // Header
  nav_product: "产品",
  nav_features: "特色功能",
  nav_roadmap: "路线图",
  nav_download: "下载",
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
  roadmap_title: "未来开发方向规划",
  roadmap_lead: "计划可能会调整，事情也常比预期更耗时。但这就是目前的大方向。",
  roadmap_status_active: "开发中",
  roadmap_status_planned: "已规划",
  roadmap_status_future: "将来目标",

  roadmap_item1_label: "重构至 GPUI 原生渲染层",
  roadmap_item1_detail:
    "将全部界面渲染逻辑迁移至 Rust + GPUI 框架下，释放极致运行效率。",
  roadmap_item2_label: "核心时间轴系统",
  roadmap_item2_detail:
    "主音轨通道、音频剪辑排列、走带控制与自定义循环区域编辑。",
  roadmap_item3_label: "音频 / MIDI / 自动化编辑视窗",
  roadmap_item3_detail:
    "钢琴卷帘、自动化控制包络线以及音频剪辑的实时波形剪切功能。",
  roadmap_item4_label: "乐器与效果插件支持",
  roadmap_item4_detail:
    "VST3 和 CLAP 原生宿主接入，以及防止第三方插件造成崩溃的安全沙箱扫描机制。",
  roadmap_item5_label: "调音台路由系统",
  roadmap_item5_detail:
    "总线音轨控制、发送路由效果链、调音台精确信号指示以及信号逻辑。",
  roadmap_item6_label: "首个 Windows 稳定版本",
  roadmap_item6_detail: "首个官方发行的 Windows x64 桌面安装包与绿色包。",
  roadmap_item7_label: "Web React + WASM 运行环境",
  roadmap_item7_detail:
    "使用 WebAssembly 音频引擎作为核心的浏览器运行版 Futureboard Express。",
  roadmap_item8_label: "macOS / Linux 系统适配",
  roadmap_item8_detail:
    "正式开辟非 Windows 环境运行测试，开启开源贡献者支持通道。",
  roadmap_item9_label: "扩展 LV2 / AU 插件格式",
  roadmap_item9_detail:
    "为 Linux 与 Mac 用户扩展适配更多主流的第三方音频插件封装格式。",

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
};
