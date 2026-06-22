import type { TranslationKeys } from "./en";

export const th: TranslationKeys = {
  // Header
  nav_product: "ผลิตภัณฑ์",
  nav_features: "ฟีเจอร์",
  nav_roadmap: "โรดแมป",
  nav_download: "ดาวน์โหลด",
  nav_waitlist: "เข้าร่วม Waitlist",

  // Hero
  hero_eyebrow: "รุ่นทดลอง • กำลังพัฒนาอย่างต่อเนื่อง",
  hero_headline_1: "DAW ที่เรา",
  hero_headline_2: "อยากเปิดใช้",
  hero_headline_accent: "ทุกวันจริง ๆ",
  hero_desc:
    "Futureboard คือ DAW ที่เราสร้างขึ้นเพราะยังไม่เจอเครื่องมือที่รู้สึกว่าใช่พอ แกนระบบเขียนด้วย Rust แบบเนทีฟ, UI เรนเดอร์ผ่าน GPU และเลย์เอาต์ที่ไม่ขัดจังหวะตอนกำลังทำงานในเซสชัน",
  hero_download: "ดาวน์โหลด",
  hero_waitlist: "เข้าร่วม Waitlist",
  hero_github: "GitHub",

  // Product Lineup
  product_eyebrow: "ไลน์อัปผลิตภัณฑ์",
  product_title: "สามบิลด์ บนโค้ดเบสเดียว",
  product_lead:
    "เวอร์ชันเว็บใช้งานได้แล้วตอนนี้ ส่วนบิลด์เนทีฟคือจุดที่เรากำลังทุ่มงานหลักอยู่",
  product_express_tag: "Express",
  product_express_name: "Futureboard Express",
  product_express_desc:
    "ทำงานบนเบราว์เซอร์ ไม่ต้องติดตั้ง เหมาะสำหรับสเก็ตช์ไอเดียเร็ว ๆ และแชร์งาน ข้างในใช้ React + WASM — ไม่เร็วเท่าเนทีฟ แต่ใช้งานได้ดีเกินคาด",
  product_express_spec1: "ทำงานบนเบราว์เซอร์",
  product_express_spec2: "React + WASM",
  product_express_spec3: "ไม่ต้องติดตั้ง",
  product_express_badge: "เป้าหมายเว็บ →",

  product_lite_tag: "Lite",
  product_lite_name: "Futureboard Lite",
  product_lite_desc:
    "แอปติดตั้งบนเดสก์ท็อปที่สร้างด้วย Electron ปล่อยข้ามแพลตฟอร์มได้ง่ายกว่า แต่ก็มี overhead ตามปกติ เป็นทางสายกลางระหว่างรอบิลด์เนทีฟให้โตเต็มที่",
  product_lite_spec1: "เดสก์ท็อป Electron",
  product_lite_spec2: "Windows / macOS / Linux",
  product_lite_spec3: "ติดตั้งเป็นแอปได้",
  product_lite_badge: "เป้าหมาย Electron",

  product_studio_tag: "Studio",
  product_studio_name: "Futureboard Studio",
  product_studio_desc:
    "นี่คือรุ่นที่เราให้ความสำคัญที่สุด Rust + GPUI ให้ประสิทธิภาพแบบเนทีฟ ไม่มี overhead จาก Electron และ UI ที่เรนเดอร์ด้วยความเร็วของ GPU ยังอยู่ระหว่างพัฒนา แต่งานส่วนใหญ่ถูกทุ่มมาที่รุ่นนี้",
  product_studio_spec1: "Rust + GPUI",
  product_studio_spec2: "เอนจินเสียงเนทีฟ",
  product_studio_spec3: "UI เรนเดอร์ผ่าน GPU",
  product_studio_badge: "เป้าหมายเนทีฟ • รุ่นหลัก",

  // Features Showcase
  features_eyebrow: "ฟีเจอร์",
  features_title: "นี่คือสิ่งที่มันทำได้จริง",
  features_lead:
    "หกอย่างที่เราเคยหงุดหงิดกับ DAW อื่น ๆ เลยสร้างใหม่ให้เข้าที่กว่าเดิม",

  ft_track_title: "ประสบการณ์จัดการแทร็ก",
  ft_track_body1:
    "ออกแบบให้โปรดิวเซอร์มีพื้นที่ทำงานที่ชัดเจน โฟกัสง่าย และตอบสนองไวสำหรับสร้าง arrangement ที่สมบูรณ์ ทุกแทร็กมีคอนโทรลสำคัญครบ ทั้ง volume, pan, mute, solo, record arm, monitoring state และภาพ waveform ให้ดูประกอบ",
  ft_track_body2:
    "เลย์เอาต์ยังอ่านง่ายแม้โปรเจกต์เริ่มซับซ้อน หัวแทร็ก เลนคลิป มิเตอร์ และพื้นที่สำหรับ automation ถูกแยกชัดเจน เพื่อให้เห็นทันทีว่าอะไรเล่นอยู่ อะไรถูกเลือก และจุดไหนต้องจัดการต่อ",

  ft_inspector_title: "รายละเอียดใน Inspector",
  ft_inspector_body1:
    "พื้นที่เฉพาะสำหรับแก้คุณสมบัติของแทร็ก คลิป และองค์ประกอบดนตรีที่เลือก โดยไม่รบกวน workflow บนไทม์ไลน์หลัก ปรับ gain, pitch, stretch, fades, timing, routing และค่าที่เกี่ยวกับปลั๊กอินได้ในแผงเดียว",
  ft_inspector_body2:
    "การเก็บคอนโทรลละเอียดไว้ใกล้หน้า arrangement ช่วยลดการเปิดหน้าต่างป๊อปอัป โปรดิวเซอร์ปรับรายละเอียดเล็ก ๆ ได้โดยยังเห็นผลบนไทม์ไลน์ เช่น จัดคลิป ปรับ transition และแก้ timing",

  ft_scroll_title: "การเลื่อนแบบต่อเนื่อง",
  ft_scroll_body1:
    "ทำให้การเคลื่อนของไทม์ไลน์ระหว่างเล่นและแก้ไขลื่น เสถียร และตามได้ง่าย คุณยังเชื่อมกับเพลงด้วยสายตาขณะ playhead วิ่งผ่าน arrangement ทำให้เซสชันยาว ๆ งานอัดสด และโปรเจกต์หลายแทร็กนำทางง่ายขึ้น",
  ft_scroll_body2:
    "แทนที่จะกระโดดข้ามช่วงของไทม์ไลน์แบบฉับพลัน มุมมองจะตามการเล่นอย่างเป็นธรรมชาติ ไทม์ไลน์ยังตอบสนองขณะเลื่อน ซูม และแสดง waveform ทำให้โปรเจกต์ไม่รู้สึกหลุดจากเสียง",

  ft_toolbar_title: "ทูลบาร์ลอยตัว",
  ft_toolbar_body1:
    "นำเครื่องมือแก้ไขที่ใช้บ่อยมาไว้ตรงบริเวณที่กำลังทำงาน เช่น select, cut, move, trim, split, snap และ zoom ใช้ได้ใกล้คอนเทนต์ที่เลือกโดยไม่ต้องเอื้อมไปหาเมนูหรือทูลบาร์ไกล ๆ",
  ft_toolbar_body2:
    "ออกแบบให้เปลี่ยนตามบริบท เบา และไม่เกะกะ โผล่มาเมื่อมีประโยชน์ หลบไปเมื่อไม่จำเป็น และปรับตามงานที่กำลังทำ ทำให้การแก้ไขรู้สึกตรงมือเหมือนอินเทอร์เฟซตอบสนองต่อผู้ใช้",

  ft_mixer_title: "ประสบการณ์มิกเซอร์",
  ft_mixer_body1:
    "สร้างมาเพื่อควบคุมเสียงทั้งเซสชันได้เร็ว อ่านง่าย และจริงจังในระดับมืออาชีพ แต่ละ channel มี fader, meter, pan, mute, solo, record state, inserts, sends และ routing ให้เห็นครบในมุมมองเดียว",
  ft_mixer_body2:
    "เลย์เอาต์เน้นความชัดและความหนาแน่นโดยไม่รก Channel strip กระชับพอให้เห็นหลายแทร็กบนหน้าจอ แต่ยังละเอียดพอสำหรับการตัดสินใจมิกซ์จริง ใช้ง่ายสำหรับมือใหม่ และทรงพลังพอสำหรับมืออาชีพ",

  ft_midi_title: "MIDI Editor",
  ft_midi_body1:
    "สภาพแวดล้อมแบบ piano roll ที่แม่นยำสำหรับแต่ง แก้ และเกลาไอเดียดนตรี โน้ตแสดงชัดบนกริด ทำให้สร้างเมโลดี้ คอร์ด เบสไลน์ แพตเทิร์นกลอง และ arrangement MIDI เต็มรูปแบบได้ง่ายพร้อมคุม timing และ pitch อย่างแม่นยำ",
  ft_midi_body2:
    "ออกแบบทั้งสำหรับสเก็ตช์เร็วและโปรแกรมละเอียด วาดโน้ต ยืด/หด ย้าย ปรับ timing และเกลา pattern จังหวะได้รวดเร็ว รองรับ velocity editing, quantization, snapping, note selection และข้อมูลควบคุมเชิง expression",

  // Roadmap
  roadmap_eyebrow: "โรดแมป",
  roadmap_title: "สิ่งที่กำลังสร้างอยู่คร่าว ๆ",
  roadmap_lead:
    "ลำดับอาจเปลี่ยนได้ และหลายอย่างใช้เวลานานกว่าที่คิด แต่นี่คือทิศทางโดยรวม",
  roadmap_status_active: "กำลังทำ",
  roadmap_status_planned: "วางแผนไว้",
  roadmap_status_future: "อนาคต",

  roadmap_item1_label: "พอร์ตไป GPUI Native",
  roadmap_item1_detail:
    "ย้ายเลเยอร์เรนเดอร์ไป Rust + GPUI เพื่อประสิทธิภาพแบบเนทีฟเต็มรูปแบบ",
  roadmap_item2_label: "ระบบไทม์ไลน์",
  roadmap_item2_detail:
    "เลนแทร็ก การจัดเรียงคลิป transport controls และ loop regions",
  roadmap_item3_label: "ตัวแก้ไข Audio / MIDI / Automation",
  roadmap_item3_detail: "Piano roll, automation curves และตัวแก้คลิป waveform",
  roadmap_item4_label: "รองรับปลั๊กอินเสียง",
  roadmap_item4_detail:
    "โฮสต์ VST3 และ CLAP พร้อม plugin scanner และ sandbox สำหรับแยก process",
  roadmap_item5_label: "มิกเซอร์และ routing",
  roadmap_item5_detail:
    "Channel strip เต็มรูปแบบ, aux sends, master bus และกราฟ routing ที่ยืดหยุ่น",
  roadmap_item6_label: "รุ่นแรกสำหรับ Windows",
  roadmap_item6_detail: "ไบนารีเสถียรรุ่นแรกสำหรับ Windows x64",
  roadmap_item7_label: "เป้าหมายเว็บ React + WASM",
  roadmap_item7_detail:
    "Futureboard Express เวอร์ชันเบราว์เซอร์พร้อม WASM audio engine",
  roadmap_item8_label: "รองรับ macOS / Linux",
  roadmap_item8_detail:
    "เปิดทางให้คอมมูนิตี้ช่วยพอร์ตสำหรับแพลตฟอร์มนอก Windows",
  roadmap_item9_label: "รูปแบบปลั๊กอิน LV2 / AU",
  roadmap_item9_detail:
    "ขยายการรองรับ ecosystem ปลั๊กอินสำหรับผู้ใช้ Linux และ macOS",

  // Waitlist
  waitlist_eyebrow: "Early Access",
  waitlist_headline: "รับการแจ้งเตือน",
  waitlist_headline_accent: "เมื่อพร้อมปล่อย",
  waitlist_desc:
    "ยังอยู่ระหว่างสร้าง ฝากอีเมลไว้ แล้วเราจะติดต่อไปเมื่อมีอะไรที่คุ้มค่าพอให้ดาวน์โหลด ไม่มี newsletter ไม่มีการตลาด — แค่ข้อความเดียวเมื่อบิลด์จริงพร้อม",
  waitlist_perk1: "ได้ลองบิลด์เนทีฟก่อนเปิดสาธารณะ",
  waitlist_perk2: "มีอัปเดตการพัฒนาเป็นครั้งคราวเมื่อมีของใหญ่ปล่อย",
  waitlist_perk3: "ไม่มีสแปม ยกเลิกได้ทุกเมื่อ ไม่ติดใจอะไร",

  // Footer
  footer_tagline: "DAW ยุคใหม่และแพลตฟอร์มเสียงสำหรับงานสร้างสรรค์",
  footer_links_title: "ผลิตภัณฑ์",
  footer_privacy: "นโยบายความเป็นส่วนตัว",
  footer_terms: "เงื่อนไขการใช้บริการ",
  footer_copyright:
    "© 2026 Futureboard Project โค้ดอยู่ภายใต้สัญญาอนุญาต Apache 2.0 / MIT",

  // Download Page
  dl_eyebrow: "ดาวน์โหลด",
  dl_title: "ดาวน์โหลด Futureboard",
  dl_lead:
    "เรายังอยู่ระหว่างพัฒนา แต่ถ้าอยากลองสำรวจตอนนี้ บิลด์ Windows พร้อมให้โหลดแล้ว อย่าคาดหวังว่าทุกอย่างจะทำงานสมบูรณ์ — นั่นแหละคือเหตุผลของการทดสอบตั้งแต่เนิ่น ๆ",
  dl_released: "ปล่อยเมื่อมิถุนายน 2026",
  dl_all_releases: "ดู release ทั้งหมดบน GitHub →",

  dl_win_desc:
    "นี่คือรุ่นที่เราใช้พัฒนาและทดสอบทุกวัน ยังหยาบอยู่บางจุด แต่แกนไทม์ไลน์ มิกเซอร์ และ MIDI editor ใช้งานได้แล้ว",
  dl_mac_desc:
    "ยังไม่มี GPUI รองรับ macOS อยู่แล้ว ดังนั้นน่าจะเริ่มเข้าที่เมื่อฝั่ง Windows เสถียรขึ้น ถ้าอยากช่วยพอร์ต GitHub เปิดอยู่",
  dl_linux_desc:
    "ยังไม่มีเช่นกัน น่าจะตามหลัง macOS โค้ด Rust เป็น cross-platform อยู่แล้ว เหลือแค่เวลาและคนที่ทดสอบบน Linux ได้จริง",
  dl_coming_later: "ตามมาทีหลัง",
  dl_download_exe: "ดาวน์โหลด .exe",
  dl_zip_portable: ".zip แบบพกพา",

  dl_sys_req: "ความต้องการของระบบ",
  dl_min: "ขั้นต่ำ",
  dl_rec: "แนะนำ",

  dl_what_is_in: "มีอะไรในบิลด์นี้",
  dl_changelog_latest: "ล่าสุด",
  dl_changelog_older: "บิลด์ Pre-alpha",
  dl_changelog_older_desc:
    "ใช้ภายในเท่านั้น — ยังไม่ปล่อยสาธารณะ มีทั้งการเขียน renderer ใหม่ การย้ายไป GPUI และงานจิปาถะตามประสาการรื้อแกนระบบซ้ำหลายรอบ",

  dl_notice_title: "แจ้งไว้ก่อน — นี่คือซอฟต์แวร์ alpha",
  dl_notice_body:
    "อาจแครชได้ การตั้งค่าบางอย่างอาจไม่ถูกบันทึก และบางฟีเจอร์ยังเป็น placeholder เราอยากปล่อยของจริงให้คนทดสอบ มากกว่ารอให้สมบูรณ์แบบ ถ้าเจออะไรพัง เปิด issue หรือมาคุยกับเราบน Discord ได้เลย",
};
