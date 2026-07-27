export interface Work {
    id: number;
    title: string;
    tag: string;
    role: string;
    type: ('WEB' | 'GRAPHIC')[];
    detailTitle: string;
    description: string;
    outline: {
        client: string;
        target: string;
        issue: string;
        purpose: string;
        request: string;
    };
    concept: {
        main_concept: string;
        design_image?: string;
        font?: string;
        colors?: string[];
        boardImage: string;
    };
    data: {
        creationTime: string;
        tool: string;
    };
    process?: {
        title: string;  
        description: string; 
        image: string;       
    }[];
    point?: {
        title: string;  
        description: string; 
        image: string;       
    }[];
    image: {
        mainImage: string;
        subImage: string;
        designcampPC: string;
        designcampMobile: string;
    };
    url?: {
        demo: string;
        figma: string;
        github: string;
    };
    
}

export const worksData: Work[] = [
  {
    id: 1,
    title: "RESORT HOTEL",
    type: ['WEB', 'GRAPHIC'],
    tag: "プロジェクト",
    role: "コンセプト設計 / ロゴデザイン / UI・UXデザイン / Reactコーディング",
    detailTitle: "ホテル「uni」公式Webサイトデザイン・実装",
    description: "string",
    outline: {
        client: "架空リゾートホテル「uni」（沖縄県宮古島市）",
        target: "30〜50代の都内在住のパワーカップル",
        issue: "オーナーの要望に対し、Webサイトの立ち上げを提案",
        purpose: "デジタル上でホテルの圧倒的な「静寂」を疑似体験させ、直接予約へ繋げる",
        request: "白を基調とした洗練されたラグジュアリー感、およびスマホでのスムーズな操作性の確保"
    },
    concept: {
        main_concept: "余白と、静寂と。自分本来の純度に戻る旅",
        design_image: "a",
        font: "cormorant Garamond / ssnoto serif JP",
        colors: ["#4599C4", "#F49961", "#FFF8E1", "#4E4E4E"] ,
        boardImage: "",
    },
    data: {
        creationTime: "企画・設計　２週間　／　デザイン　２週間　／　コーディング　１ヶ月",
        tool: "figma　／　vscode ",
    },
    process: [
        {
            title: "01 リサーチ",
            description: "ターゲット層である20代女性の旅行トレンドを徹底的に分析し、ミニマルで洗練された空気感を持つホテルのコンセプトを設計しました。",
            image: ""
        },
        {
            title: "02 デザインカンプの作成",
            description: "Figmaを用いて細部にまでこだわったデザインシステムを構築。トンマナを水色とオレンジに統一し、高級感と親しみやすさを両立させています。",
            image: ""
        },
        {
            title: "03 コーディング",
            description: "ReactとTypeScriptを採用し、今回作成した滑らかなページトップリンクやレスポンシブ対応を含め、どのデバイスでも崩れない堅牢なWebサイトを実装しました。",
            image: ""
        }
    ],
    point: [
        {
            title: "01 リサーチ",
            description: "ターゲット層である20代女性の旅行トレンドを徹底的に分析し、ミニマルで洗練された空気感を持つホテルのコンセプトを設計しました。",
            image: ""
        },
        {
            title: "02 デザインカンプの作成",
            description: "Figmaを用いて細部にまでこだわったデザインシステムを構築。トンマナを水色とオレンジに統一し、高級感と親しみやすさを両立させています。",
            image: ""
        },
        {
            title: "03 コーディング",
            description: "ReactとTypeScriptを採用し、今回作成した滑らかなページトップリンクやレスポンシブ対応を含め、どのデバイスでも崩れない堅牢なWebサイトを実装しました。",
            image: ""
        }
    ],
    image: {
        mainImage: "",
        subImage: "",
        designcampPC: "",
        designcampMobile: "",
    },
    url: {
        demo: "https://uni-resort-site.vercel.app",
        figma: "string",
        github: "string",
    }
  },
  {
    id: 2,
    title: "CRAFT SAKE BREWERY",
    type: ['WEB', 'GRAPHIC'],
    tag: "プロジェクト",
    role: "ブランドロゴ / ホームページデザイン / グラフィック展開",
    detailTitle: "CRAFT SAKE 碧（AO）",
    description: "string",
    outline: {
        client: "ローカルクラフトサケ醸造所「碧（AO）」",
        target: "20〜30代の働く女性（丁寧な暮らしを好む層）",
        issue: "若者におじさん臭い日本酒だと思われてしまい価値が伝わらない課題",
        purpose: "ナチュラルワインのような「洗練された温かみ」としてWebと紙で再構築する",
        request: "若者が手に取りたくなるビジュアル展開、およびWebからリアルへの世界観の統一"
    },
    concept: {
        main_concept: "暮らしに溶け込む、ひとくちの青。",
        design_image: "a",
        font: "a",
        boardImage: "",
    },
    data: {
        creationTime: "企画・設計　デザイン　コーディング",
        tool: "",
    },
    process: [
        {
            title: "01 リサーチ",
            description: "ターゲット層である20代女性の旅行トレンドを徹底的に分析し、ミニマルで洗練された空気感を持つホテルのコンセプトを設計しました。",
            image: ""
        },
        {
            title: "02 デザインカンプの作成",
            description: "Figmaを用いて細部にまでこだわったデザインシステムを構築。トンマナを水色とオレンジに統一し、高級感と親しみやすさを両立させています。",
            image: ""
        },
        {
            title: "03 コーディング",
            description: "ReactとTypeScriptを採用し、今回作成した滑らかなページトップリンクやレスポンシブ対応を含め、どのデバイスでも崩れない堅牢なWebサイトを実装しました。",
            image: ""
        }
    ],
    point: [
        {
            title: "01 リサーチ",
            description: "ターゲット層である20代女性の旅行トレンドを徹底的に分析し、ミニマルで洗練された空気感を持つホテルのコンセプトを設計しました。",
            image: ""
        },
        {
            title: "02 デザインカンプの作成",
            description: "Figmaを用いて細部にまでこだわったデザインシステムを構築。トンマナを水色とオレンジに統一し、高級感と親しみやすさを両立させています。",
            image: ""
        },
        {
            title: "03 コーディング",
            description: "ReactとTypeScriptを採用し、今回作成した滑らかなページトップリンクやレスポンシブ対応を含め、どのデバイスでも崩れない堅牢なWebサイトを実装しました。",
            image: ""
        }
    ],
    image: {
        mainImage: "",
        subImage: "",
        designcampPC: "",
        designcampMobile: "",
    },
    url: {
        demo: "",
        figma: "",
        github: "",
    }
  },
  {
    id: 3,
    title: "IDOL GROUP",
    type: ['WEB', 'GRAPHIC'],
    tag: "プロジェクト",
    role: "トータルブランディング / ファンクラブサイト設計 / グッズ・グラフィック展開",
    detailTitle: "パステル・プリンセス公式ファンクラブ「プリンセス・ティータイム」",
    description: "結成2年目を迎え、ファン層が急速に拡大している5人組王道アイドルグループ「パステル・プリンセス（通称：パスプリ）」の公式ファンクラブ構築およびトータルブランディングを担当しました。従来の簡易サイトでは、グループが持つ「お姫様」や「お茶会」という甘くキラキラした世界観、そしてVIP限定プランの特別感が十分に伝わりきっていない点が課題でした。そこで本プロジェクトでは、パステルカラーを基調としたUIデザインへ刷新。マイページをユーザーの「最推しメンのカラー」にパーソナライズできる機能を実装し、ファンのエンゲージメントを高める設計にしました。さらに、Web上の体験にとどまらず、年額・VIP会員向けに贈られるリアル会員証（ゴールド箔押し仕様）や限定ピンバッジなどのグラフィック展開も一貫して制作。オンラインからライブ会場（リアル）まで、ファン（通称：ティアラ）がシームレスにときめきを感じられる世界観の統一を実現しました。",
    outline: {
      client: "アイドルエンターテインメント事務所（架空）",
      target: "10〜30代の王道アイドルファン（可愛い世界観やライブ空間を好む層）",
      issue: "結成2年目を迎えファン層が拡大する中、既存の簡易サイトでは「王道お姫様」という世界観の魅力やVIP限定特典の特別感が十分に伝わりきっていない課題",
      purpose: "パステルカラーを基調とした「お茶会（ティータイム）」の世界観をWebとリアル（会員証・グッズ）でトータル再構築する",
      request: "ファン（ティアラ）が毎日アクセスしたくなるビジュアル展開、および月額・年額・VIPプランの差別化とリアルへの世界観の統一"
    },
    concept: {
      main_concept: "5色のパステルが織りなす、あなただけのお茶会。",
      design_image: "淡いパステルピンク、ブルー、イエロー、パープル、グリーンの5色をベースに、お城のゴールドやトランプ、ティーカップなどのモチーフを散りばめた、華やかで夢見心地な世界観。",
      font: " ZEN maru Gothic",
      boardImage: "",
    },
    data: {
      creationTime: "2026年7月",
      tool: "Figma / Illustrator / Photoshop / React / Tailwind CSS",
    },
    process: [
        {
            title: "01 リサーチ＆コンセプト設計",
            description: "女性アイドルのファンコミュニティの動向と、現代のオタク文化における「アクスタと写真映え」のトレンドを分析。王道キラキラ系に必要な高揚感と、お茶会（ティータイム）という特別な空間設計を定義しました。",
            image: ""
        },
        {
            title: "02 UI/UXデザインとトーン＆マナーの統一",
            description: "Figmaを用い、5人のメンバーカラーが美しく調和するパステル調のUIを構築。マイページでは、ユーザーの「最推し」のカラーにサイト全体のテーマが切り替わるパーソナライズ機能をデザインシステム化しました。",
            image: ""
        },
        {
            title: "03 マルチデバイス実装とリアル展開への連動",
            description: "ReactとTypeScriptを採用。スマホファーストの滑らかなアニメーションで「お城の扉が開く」ようなログイン演出を実装。また、VIP会員向けリアル会員証（ゴールド箔押し）などのグラフィックデータも同時に制作し、完全な世界観の統一を図りました。",
            image: ""
        }
    ],
    point: [
        {
            title: "01 3つの会員プランに応じた導線設計",
            description: "月額・年額・VIP（プレミアム・アフタヌーン）の3プランの価値が直感的に伝わるよう、特典比較表やVIP限定特典（名前呼び動画等）の訴求エリアをUX視点で最適化し、入会コンバージョン率を高めました。",
            image: ""
        },
        {
            title: "02 メディアと連動するリアルタイムNEWS機能",
            description: "ツアー情報やテレビ出演、グッズ解禁、メンバーブログなどの多岐にわたるニュースを、ファンが迷わずキャッチできるよう「LIVE」「MEDIA」「FC限定」などのタグで瞬時にフィルタリングできる一覧UIを実装しました。",
            image: ""
        },
        {
            title: "03 推し活を加速させるビジュアルアイデンティティ",
            description: "SNSのプロフィールにファンが「@ティアラ」と書きたくなるような愛称のブランディングをはじめ、グッズ（ペンライトやカチューシャ）を持ったファンの姿を逆算した、SNS映えするグラフィック展開を施しました。",
            image: ""
        }
    ],
    image: {
        mainImage: "",
        subImage: "",
        designcampPC: "",
        designcampMobile: "",
    },
    url: {
        demo: "string",
        figma: "string",
        github: "string",
    }
  },
  {
    id: 4,
    title: "PILATES STUDIO",
    type: ['WEB'],
    tag: "LP",
    role: "集客・ネット予約特化型ランディングページ［LP］",
    detailTitle: "PILATES CORE BALANCE",
    description: "string",
    outline: {
      client: "パーソナルマシンピラティススタジオ「CORE BALANCE」",
      target: "30〜40代のデスクワークで肩こり・腰痛に悩むビジネスパーソン",
      issue: "専門性の高いスタジオなのに競合と混同され、体験予約に繋がらない課題",
      purpose: "スクロールするだけで強みが伝わり、その場で迷いを無くしてネット予約を発生させる",
      request: "清潔感と信頼感のあるデザイン、スマホで1画面以内に必ずアクションを起こせる利便性"
    },
    concept: {
      main_concept: "芯から、美しく、歩き出す。一生モノの体幹をあなたに。",
      design_image: "a",
      font: "a",
      boardImage: "",
    },
    data: {
      creationTime: "",
      tool: "",
    },
    process: [
        {
            title: "01 リサーチ",
            description: "ターゲット層である20代女性の旅行トレンドを徹底的に分析し、ミニマルで洗練された空気感を持つホテルのコンセプトを設計しました。",
            image: ""
        },
        {
            title: "02 デザインカンプの作成",
            description: "Figmaを用いて細部にまでこだわったデザインシステムを構築。トンマナを水色とオレンジに統一し、高級感と親しみやすさを両立させています。",
            image: ""
        },
        {
            title: "03 コーディング",
            description: "ReactとTypeScriptを採用し、今回作成した滑らかなページトップリンクやレスポンシブ対応を含め、どのデバイスでも崩れない堅牢なWebサイトを実装しました。",
            image: ""
        }
    ],
    point: [
        {
            title: "01 リサーチ",
            description: "ターゲット層である20代女性の旅行トレンドを徹底的に分析し、ミニマルで洗練された空気感を持つホテルのコンセプトを設計しました。",
            image: ""
        },
        {
            title: "02 デザインカンプの作成",
            description: "Figmaを用いて細部にまでこだわったデザインシステムを構築。トンマナを水色とオレンジに統一し、高級感と親しみやすさを両立させています。",
            image: ""
        },
        {
            title: "03 コーディング",
            description: "ReactとTypeScriptを採用し、今回作成した滑らかなページトップリンクやレスポンシブ対応を含め、どのデバイスでも崩れない堅牢なWebサイトを実装しました。",
            image: ""
        }
    ],
    image: {
        mainImage: "",
        subImage: "",
        designcampPC: "",
        designcampMobile: "",
    },
    url: {
        demo: "",
        figma: "",
        github: "",
    }
  },
  {
    id: 5,
    title: "PILATES STUDIO BANNER",
    type: ['WEB'],
    tag: "バナー",
    role: "Instagram用 広告バナー・3パターン展開",
    detailTitle: "",
    description: "string",
    outline: {
      client: "パーソナルマシンピラティススタジオ「CORE BALANCE」",
      target: "インスタグラムを利用している、姿勢崩れに悩む30〜40代の女性",
      issue: "集客LPへ誘導するための、SNS用のキャンペーン告知広告バナーの制作",
      purpose: "タイムライン上で一瞬で目を引き、自然とLPへクリックを促す",
      request: "体験50%OFFというオファーが目立ちつつも、ブランドの信頼感を壊さない上品なデザイン"
    },
    concept: {
      main_concept: "1つのキャンペーンに対し、ターゲットの心理に合わせた3つのアプローチを検証する",
      design_image: "a",
      font: "a",
      boardImage: "",
    },
    data: {
      creationTime: "",
      tool: "",
    },
    process: [
        {
            title: "01 リサーチ",
            description: "ターゲット層である20代女性の旅行トレンドを徹底的に分析し、ミニマルで洗練された空気感を持つホテルのコンセプトを設計しました。",
            image: ""
        },
        {
            title: "02 デザインカンプの作成",
            description: "Figmaを用いて細部にまでこだわったデザインシステムを構築。トンマナを水色とオレンジに統一し、高級感と親しみやすさを両立させています。",
            image: ""
        },
        {
            title: "03 コーディング",
            description: "ReactとTypeScriptを採用し、今回作成した滑らかなページトップリンクやレスポンシブ対応を含め、どのデバイスでも崩れない堅牢なWebサイトを実装しました。",
            image: ""
        }
    ],
    point: [
        {
            title: "01 リサーチ",
            description: "ターゲット層である20代女性の旅行トレンドを徹底的に分析し、ミニマルで洗練された空気感を持つホテルのコンセプトを設計しました。",
            image: ""
        },
        {
            title: "02 デザインカンプの作成",
            description: "Figmaを用いて細部にまでこだわったデザインシステムを構築。トンマナを水色とオレンジに統一し、高級感と親しみやすさを両立させています。",
            image: ""
        },
        {
            title: "03 コーディング",
            description: "ReactとTypeScriptを採用し、今回作成した滑らかなページトップリンクやレスポンシブ対応を含め、どのデバイスでも崩れない堅牢なWebサイトを実装しました。",
            image: ""
        }
    ],
    image: {
        mainImage: "",
        subImage: "",
        designcampPC: "",
        designcampMobile: "",
    },
    url: {
        demo: "",
        figma: "",
        github: "",
    }
  }
];
