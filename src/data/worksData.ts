export interface Work {
  id: number;
  title: string;
  tag: string;
  range: string;
  outline: {
    client: string;
    target: string;
    issue: string;
    purpose: string;
    request: string;
  };
  concept: {
    main_concept: string;
    design_image: string;
    font: string;
  };
  data: {
    creationTime: string;
    tool: string;
  };
  process: {
    process1: string;
    process2: string;
    process3: string;
  };
  point: {
    point1: string;
    point2: string;
    point3: string;
  };
  mainImage: string;
  demoUrl: string;
  figmaUrl: string;
  githubUrl: string;
}

export const worksData: Work[] = [
  {
    id: 1,
    title: "RESORT HOTEL uni",
    tag: "プロジェクト",
    range: "コンセプト設計 / ロゴデザイン / UI・UXデザイン / Reactコーディング",
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
      font: "a",
    },
    data: {
      creationTime: "企画・設計　２週間　／　デザイン　２週間　／　コーディング　１ヶ月",
      tool: "figma　／　vscode ",
    },
    process: {
      process1: "",
      process2: "",
      process3: "",
    },
    point: {
      point1: "",
      point2: "",
      point3: "",
    },
    mainImage: "",
    demoUrl: "https://vercel.app",
    figmaUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "CRAFT SAKE 碧（AO）",
    tag: "プロジェクト",
    range: "ブランドロゴ / ホームページデザイン / グラフィック展開",
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
    },
    data: {
      creationTime: "企画・設計　デザイン　コーディング",
      tool: "",
    },
    process: {
      process1: "",
      process2: "",
      process3: "",
    },
    point: {
      point1: "",
      point2: "",
      point3: "",
    },
    mainImage: "",
    demoUrl: "#",
    figmaUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "CRAFT SAKE 碧（AO）",
    tag: "プロジェクト",
    range: "ブランドロゴ / ホームページデザイン / グラフィック展開",
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
    },
    data: {
      creationTime: "",
      tool: "",
    },
    process: {
      process1: "",
      process2: "",
      process3: "",
    },
    point: {
      point1: "",
      point2: "",
      point3: "",
    },
    mainImage: "",
    demoUrl: "#",
    figmaUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "PILATES CORE BALANCE",
    tag: "LP",
    range: "集客・ネット予約特化型ランディングページ［LP］",
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
    },
    data: {
      creationTime: "",
      tool: "",
    },
    process: {
      process1: "",
      process2: "",
      process3: "",
    },
    point: {
      point1: "",
      point2: "",
      point3: "",
    },
    mainImage: "",
    demoUrl: "#",
    figmaUrl: "#",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "CAMPAIGN BANNER",
    tag: "バナー",
    range: "Instagram用 広告バナー・3パターン展開",
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
    },
    data: {
      creationTime: "",
      tool: "",
    },
    process: {
      process1: "",
      process2: "",
      process3: "",
    },
    point: {
      point1: "",
      point2: "",
      point3: "",
    },
    mainImage: "",
    demoUrl: "#",
    figmaUrl: "#",
    githubUrl: "#"
  }
];
