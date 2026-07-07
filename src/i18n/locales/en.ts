export const en = {
  // Header
  nav_product: "Product",
  nav_features: "Features",
  nav_roadmap: "Roadmap",
  nav_download: "Download",
  nav_blog: "Blog",
  nav_waitlist: "Join Waitlist",

  // Hero
  hero_eyebrow: "Experimental • In active development",
  hero_headline_1: "A DAW I actually",
  hero_headline_2: "want to use every",
  hero_headline_accent: "damn day.",
  hero_desc:
    "Futureboard is a DAW I'm building because nothing out there feels quite right. Native Rust core, GPU-rendered UI, and a layout that doesn't fight you when you're in the middle of a session.",
  hero_download: "Download",
  hero_waitlist: "Join Waitlist",
  hero_github: "GitHub",

  // Product Lineup
  product_eyebrow: "Product Lineup",
  product_title: "Three builds, one codebase.",
  product_lead:
    "The web version runs right now. The native build is where the real work is happening.",
  product_express_tag: "Express",
  product_express_name: "Futureboard Express",
  product_express_desc:
    "Runs in the browser, no install. Good for quick sketching and sharing ideas. React + WASM under the hood — not as fast as native, but surprisingly usable.",
  product_express_spec1: "Runs in browser",
  product_express_spec2: "React + WASM",
  product_express_spec3: "No install needed",
  product_express_badge: "Web target →",

  product_lite_tag: "Lite",
  product_lite_name: "Futureboard Lite",
  product_lite_desc:
    "An installable app built on Electron. Easier to ship cross-platform but it has the usual overhead you'd expect. Solid middle ground while the native build matures.",
  product_lite_spec1: "Electron desktop",
  product_lite_spec2: "Windows / macOS / Linux",
  product_lite_spec3: "Installable app",
  product_lite_badge: "Electron target",

  product_studio_tag: "Studio",
  product_studio_name: "Futureboard Studio",
  product_studio_desc:
    "This is the one I actually care about. Rust + GPUI means native performance, zero electron overhead, and a UI that renders at GPU speed. Still in progress, but it's where most of the effort goes.",
  product_studio_spec1: "Rust + GPUI",
  product_studio_spec2: "Native audio engine",
  product_studio_spec3: "GPU-rendered UI",
  product_studio_badge: "Native target • Primary",

  // Features Showcase
  features_eyebrow: "Features",
  features_title: "Here's what it actually does.",
  features_lead:
    "Six things I kept getting annoyed by in other DAWs. So I built them properly.",

  ft_track_title: "Track Experience",
  ft_track_body1:
    "Designed to give producers a clear, focused, and highly responsive workspace for building complete arrangements. Every track is presented with essential controls — volume, pan, mute, solo, record arm, monitoring state, and visual waveform feedback.",
  ft_track_body2:
    "The layout is built to stay readable even when the project becomes complex. Track headers, clip lanes, meters, and automation-ready areas are visually separated so the user can quickly identify what is playing, what is selected, and what needs attention.",

  ft_inspector_title: "Inspector Details",
  ft_inspector_body1:
    "A dedicated space for editing the properties of selected tracks, clips, and musical elements without interrupting the main timeline workflow. Fine-tune gain, pitch, stretch, fades, timing, routing, and plugin-related settings in one panel.",
  ft_inspector_body2:
    "By keeping detailed controls close to the arrangement view, the Inspector reduces the need for pop-up dialogs. Producers can modify small details while still seeing the result in the timeline — aligning clips, adjusting transitions, and correcting timing.",

  ft_scroll_title: "Continuous Scroll",
  ft_scroll_body1:
    "Keeps the timeline movement smooth, stable, and easy to follow during playback and editing. Stay visually connected to the music as the playhead moves through the arrangement — making long sessions, live recordings, and multitrack projects easier to navigate.",
  ft_scroll_body2:
    "Instead of jumping abruptly between timeline sections, the view follows playback naturally. The timeline remains responsive while scrolling, zooming, and displaying waveforms — so the project never feels disconnected from the audio.",

  ft_toolbar_title: "Floating Toolbar",
  ft_toolbar_body1:
    "Brings the most commonly used editing tools directly to the area where the user is working. Select, cut, move, trim, split, snap, zoom — all accessible near the selected content without relying on distant menus or fixed toolbars.",
  ft_toolbar_body2:
    "Designed to be contextual, lightweight, and non-intrusive. It appears when useful, stays out of the way when not needed, and adapts to the current task — making editing feel more direct, almost like the interface is responding to the user.",

  ft_mixer_title: "Mixer Experience",
  ft_mixer_body1:
    "Built for fast, readable, and professional control over the sound of the entire session. Each channel provides clear access to faders, meters, pan controls, mute, solo, record states, inserts, sends, and routing information — a complete mix overview in one view.",
  ft_mixer_body2:
    "The layout emphasizes clarity and density without becoming visually overwhelming. Channel strips are compact enough to fit many tracks on screen, but still detailed enough to support serious mixing decisions — approachable for beginners, powerful for professionals.",

  ft_midi_title: "MIDI Editor",
  ft_midi_body1:
    "A precise piano-roll environment for composing, editing, and refining musical ideas. Notes are displayed clearly on a grid, making it easy to create melodies, chords, basslines, drum patterns, and full MIDI arrangements with accurate timing and pitch control.",
  ft_midi_body2:
    "Designed for both fast sketching and detailed programming. Quickly draw notes, resize them, move them, adjust timing, and refine rhythmic patterns. Supports velocity editing, quantization, snapping, note selection, and expressive control data.",

  // Roadmap
  roadmap_eyebrow: "Roadmap",
  roadmap_title: "What's getting built, roughly.",
  roadmap_lead:
    "Order might shift. Things take longer than expected. But this is the general direction.",
  roadmap_status_active: "In Progress",
  roadmap_status_planned: "Planned",
  roadmap_status_future: "Future",

  roadmap_item1_label: "Port to GPUI Native",
  roadmap_item1_detail:
    "Migrating rendering layer to Rust + GPUI for full native performance.",
  roadmap_item2_label: "Timeline system",
  roadmap_item2_detail:
    "Track lanes, clip arrangement, transport controls, and loop regions.",
  roadmap_item3_label: "Audio / MIDI / Automation editors",
  roadmap_item3_detail:
    "Piano roll, automation curves, and waveform clip editors.",
  roadmap_item4_label: "Audio plugin support",
  roadmap_item4_detail:
    "VST3 and CLAP host integration. Plugin scanner and process sandbox.",
  roadmap_item5_label: "Mixer and routing",
  roadmap_item5_detail:
    "Full channel strip, aux sends, master bus, and flexible routing graph.",
  roadmap_item6_label: "Windows first release",
  roadmap_item6_detail: "First stable binary targeting Windows x64.",
  roadmap_item7_label: "Web React + WASM target",
  roadmap_item7_detail:
    "Futureboard Express browser edition with WASM audio engine.",
  roadmap_item8_label: "macOS / Linux support",
  roadmap_item8_detail:
    "Community contributor pathway for non-Windows platforms.",
  roadmap_item9_label: "LV2 / AU plugin formats",
  roadmap_item9_detail:
    "Expand plugin ecosystem coverage for Linux and macOS users.",

  // Waitlist
  waitlist_eyebrow: "Early Access",
  waitlist_headline: "Get notified",
  waitlist_headline_accent: "when it ships.",
  waitlist_desc:
    "Still building. Leave your email and I'll reach out when there's something worth downloading. No newsletters, no marketing — just a message when a real build is ready.",
  waitlist_perk1: "First access to native builds, before public release",
  waitlist_perk2: "Occasional dev updates when something major ships",
  waitlist_perk3: "No spam. Unsubscribe any time, no hard feelings.",

  // Footer
  footer_tagline: "Modern DAW and creative audio platform.",
  footer_links_title: "Product",
  footer_privacy: "Privacy Policy",
  footer_terms: "Terms of Service",
  footer_copyright:
    "© 2026 Futureboard Project. Code licensed under Apache 2.0 / MIT.",

  // Download Page
  dl_eyebrow: "Download",
  dl_title: "Get Futureboard",
  dl_lead:
    "We're still building. But if you want to poke around, the Windows build is up. Don't expect everything to work — that's kind of the point of testing it early.",
  dl_released: "Released June 2026",
  dl_all_releases: "All releases on GitHub →",

  dl_win_desc:
    "This is what we actively develop and test on day-to-day. Still rough in some areas, but the core timeline, mixer, and MIDI editor work.",
  dl_mac_desc:
    "Not yet. GPUI has macOS support, so this should come together once we stabilize the Windows side. If you want to help port it, the GitHub is open.",
  dl_linux_desc:
    "Also not yet. Probably after macOS. The Rust codebase is cross-platform, it's just a matter of time and someone who can actually test it on Linux.",
  dl_coming_later: "Coming later",
  dl_download_exe: "Download .exe",
  dl_zip_portable: ".zip portable",

  dl_sys_req: "System requirements",
  dl_min: "Minimum",
  dl_rec: "Recommended",

  dl_what_is_in: "What's in this build",
  dl_changelog_latest: "Latest",
  dl_changelog_older: "Pre-alpha builds",
  dl_changelog_older_desc:
    "Internal only — not publicly released. A lot of renderer rewrites, GPUI migration, and the usual yak-shaving that happens when you rebuild the core three times.",

  dl_notice_title: "Heads up — this is alpha software",
  dl_notice_body:
    "Things will crash. Settings might not save. Some features are placeholders. We'd rather ship something real for people to test than wait until it's perfect. If something breaks, open an issue or yell at us on Discord.",
  dl_sys_req_link: "View full system requirements →",

  // System Requirements Page
  sysreq_eyebrow: "Download",
  sysreq_title: "System Requirements",
  sysreq_lead:
    "Hardware and software requirements for running Futureboard Studio on Windows, Linux, and macOS.",
  sysreq_back_to_download: "← Back to download",
};

export type TranslationKeys = typeof en;
