import type { TranslationKeys } from './en';

export const ja: TranslationKeys = {
  // Header
  nav_product: '製品情報',
  nav_features: '機能紹介',
  nav_roadmap: 'ロードマップ',
  nav_download: 'ダウンロード',
  nav_waitlist: '先行利用登録',
  
  // Hero
  hero_eyebrow: '試験的ビルド • 活発に開発中',
  hero_headline_1: '毎日でも使いたい',
  hero_headline_2: '極上の音楽制作',
  hero_headline_accent: 'DAW環境へ',
  hero_desc: 'Futureboardは、既存のDAWの不満点を解消するために作られた新しいDAWです。Rustコア、GPUレンダリングによる超高速UI、そして創作の邪魔をしない洗練されたワークフローを提供します。',
  hero_download: 'ダウンロード',
  hero_waitlist: 'ウェイトリストに登録',
  hero_github: 'GitHub',
  
  // Product Lineup
  product_eyebrow: '製品ラインナップ',
  product_title: '単一コードベース、3つの動作環境。',
  product_lead: 'Webバージョンは今すぐお試しいただけます。デスクトップ版のネイティブ構築も全力で進行中です。',
  product_express_tag: 'Express',
  product_express_name: 'Futureboard Express',
  product_express_desc: 'インストール不要でブラウザ上で動作。手軽なスケッチやアイデア共有に最適です。React + WASMによる快適な動作環境。',
  product_express_spec1: 'ブラウザで動作',
  product_express_spec2: 'React + WASM構成',
  product_express_spec3: 'インストール不要',
  product_express_badge: 'Web環境で動かす →',
  
  product_lite_tag: 'Lite',
  product_lite_name: 'Futureboard Lite',
  product_lite_desc: 'Electronベースのデスクトップアプリ。ネイティブ版の完成に向けて、クロスプラットフォームで安定して動作する一時的な中間ビルドです。',
  product_lite_spec1: 'Electronデスクトップ版',
  product_lite_spec2: 'Windows / macOS / Linux',
  product_lite_spec3: 'インストールが容易',
  product_lite_badge: 'Electron環境向け',
  
  product_studio_tag: 'Studio',
  product_studio_name: 'Futureboard Studio',
  product_studio_desc: '本プロジェクトの最も重要なプロダクト。Rust + GPUIで構成され、不要なリソース消費を排除し、GPUの能力を限界まで引き出したネイティブDAWです。',
  product_studio_spec1: 'Rust + GPUI',
  product_studio_spec2: 'ネイティブ音声エンジン',
  product_studio_spec3: 'GPUレンダリングUI',
  product_studio_badge: 'ネイティブ版 • メイン製品',
  
  // Features Showcase
  features_eyebrow: '機能紹介',
  features_title: '実装されている機能のすべて',
  features_lead: 'これまでの制作で不満に感じていた6つの要素を根本から徹底して作り直しました。',
  
  ft_track_title: '直感的なトラック操作',
  ft_track_body1: 'シンプルかつ素早い応答でトラック配置ができるワークスペースです。音量、パン、ミュート、ソロ、録音待機状態、波形プレビューなど必要な機能をすぐ操作できます。',
  ft_track_body2: 'どれだけトラックが増えても視認性を損なわない設計。トラックヘッダー、タイムライン、オートメーション領域を綺麗に分割し、快適な作業をサポートします。',
  
  ft_inspector_title: 'インスペクターパネル',
  ft_inspector_body1: 'メイン画面を遮ることなく、選択した音声データやMIDIノートのパラメーターを即座に編集できるインスペクターです。ピッチ調整、ゲイン、フェード、出力先の設定が一括で行えます。',
  ft_inspector_body2: '余計な設定ウィンドウを開く手間を省き、タイムラインに集中したまま直感的にディテールを微調整することができます。',
  
  ft_scroll_title: '滑らかな再生スクロール',
  ft_scroll_body1: '再生中の画面移動が極めて滑らかで、長時間のマスタリングやマルチトラック編集での目の疲れを大幅に削減します。',
  ft_scroll_body2: '紙芝居のような画面切り替えではなく、再生ヘッドの動きに追従してシームレスに動くため、作業が一切中断されません。',
  
  ft_toolbar_title: 'コンテキスト対応型ツールバー',
  ft_toolbar_body1: 'カット、サイズ調整、スナップ、ズームなど、最も頻繁に使用するツールをマウスカーソルのすぐ近くに表示します。',
  ft_toolbar_body2: '作業状況を自己検知し、使用していないときはタイムラインの邪魔にならないよう自動的にフェードアウトします。',
  
  ft_mixer_title: 'プロ仕様のミキサーUI',
  ft_mixer_body1: '各トラックのインサートプラグイン、ルーティング、センド設定をスマートに一括管理できる強力なマキシングコンソールです。',
  ft_mixer_body2: '限られた画面スペースでも、プロクオリティの細かなチューニングを行える高密度設計になっています。',
  
  ft_midi_title: 'MIDIピアノロールエディタ',
  ft_midi_body1: '音階が視覚的にわかりやすいグリッドを備えた高精度ピアノロール。思いついたメロディやコード進行、ドラムパターンをその場でスケッチ可能。',
  ft_midi_body2: 'ノートの長さ調節、ベロシティエディタ、スナップ調整など、詳細なプログラムを行える多彩な編集アシスト機能を搭載。',
  
  // Roadmap
  roadmap_eyebrow: 'ロードマップ',
  roadmap_title: '開発予定リスト',
  roadmap_lead: '順序は変更される可能性がありますが、基本的にはこのロードマップに沿って開発を進めています。',
  roadmap_status_active: '開発中',
  roadmap_status_planned: '計画中',
  roadmap_status_future: '将来対応',
  
  roadmap_item1_label: 'GPUIネイティブへの移行',
  roadmap_item1_detail: 'Rust + GPUIを活用した超高速で軽快な動作のメイン描写環境への移植作業。',
  roadmap_item2_label: 'タイムラインの基盤システム',
  roadmap_item2_detail: 'トラックレーン、クリップ配置、トランスポート制御およびループ選択機能の開発。',
  roadmap_item3_label: '音声 / MIDI / オートメーションエディタ',
  roadmap_item3_detail: 'ピアノロール、オートメーション曲線、波形編集インターフェースの実装。',
  roadmap_item4_label: 'オーディオプラグイン対応',
  roadmap_item4_detail: 'VST3およびCLAPプラグインスキャナの統合、クラッシュ防止用サンドボックス環境の開発。',
  roadmap_item5_label: 'ミキサーと音響ルーティング',
  roadmap_item5_detail: '各チャンネルストリップ、AUXセンド、マスターバス、高精度音声信号グラフの構築。',
  roadmap_item6_label: 'Windows向け初公開版',
  roadmap_item6_detail: 'Windows x64環境向けの初となる公式安定バイナリの配布準備。',
  roadmap_item7_label: 'Web React + WASMビルド',
  roadmap_item7_detail: 'WebAssembly音声エンジンを用いたブラウザ版Futureboard Expressの作成。',
  roadmap_item8_label: 'macOS / Linuxプラットフォームサポート',
  roadmap_item8_detail: '非Windows環境での実行に向けたコミュニティ共同貢献プロセスの開始。',
  roadmap_item9_label: 'LV2 / AUプラグイン規格のサポート',
  roadmap_item9_detail: 'macOSおよびLinuxユーザー向けの対応プラグイン形式の拡張。',
  
  // Waitlist
  waitlist_eyebrow: '早期プレビュー登録',
  waitlist_headline: '最新情報の受け取り',
  waitlist_headline_accent: 'リリース時にお知らせ',
  waitlist_desc: '現在開発を進めています。メールアドレスをご登録いただければ、ダウンロード可能な実用ビルドが完成した際に直接ご連絡いたします。広告やスパムは一切送信しません。',
  waitlist_perk1: '一般公開前のネイティブ初期ビルドの優先お試し権',
  waitlist_perk2: '主要アップデートや開発の進捗報告を定期的にお届け',
  waitlist_perk3: 'いつでも登録解除可能。不要な宣伝メール等は一切なし',
  
  // Footer
  footer_tagline: '次世代DAW ＆ クリエイティブオーディオプラットフォーム',
  footer_links_title: '製品',
  footer_privacy: 'プライバシーポリシー',
  footer_terms: '利用規約',
  footer_copyright: '© 2026 Futureboard Project. Code licensed under Apache 2.0 / MIT.',
  
  // Download Page
  dl_eyebrow: 'ダウンロード',
  dl_title: '製品の入手',
  dl_lead: '現在テスト開発中の段階ですが、構造を体験されたい方向けにWindowsビルドを公開しています。一部不安定な箇所がございますのでご了承ください。',
  dl_released: '2026年6月リリース',
  dl_all_releases: 'GitHubで全ビルドを見る →',
  
  dl_win_desc: '日々開発とテストを行っている環境です。細かなバグが残る可能性がありますが、主要なタイムライン、ミキサー、ピアノロール機能は動作します。',
  dl_mac_desc: '未対応。GPUIはすでにmacOSをサポートしているため、Windows版が安定し次第Mac環境向けのコンパイルに着手します。GitHubでのご支援をお待ちしています。',
  dl_linux_desc: '未対応。macOS版の後に対応予定。Rust製コードのため元々クロスプラットフォーム設計ですが、インストーラ作成と音声デバイスの最適化が必要です。',
  dl_coming_later: '近日対応予定',
  dl_download_exe: '.exe インストーラをダウンロード',
  dl_zip_portable: '.zip ポータブル版',
  
  dl_sys_req: '動作要件',
  dl_min: '最小構成',
  dl_rec: '推奨構成',
  
  dl_what_is_in: '今回のビルドに含まれる機能',
  dl_changelog_latest: '最新バージョン',
  dl_changelog_older: '過去のPre-alpha開発履歴',
  dl_changelog_older_desc: '内部テスト用ビルド。描写エンジンをGPUIへ移植する過程における試行錯誤の初期履歴です。',
  
  dl_notice_title: '重要 — アルファ版の製品です',
  dl_notice_body: '強制終了や設定が保存されないエラーが発生する可能性があります。問題が発生した場合は、GitHubのIssueよりバグレポートをご提出いただくか、Discordにてお問い合わせください。',
};
