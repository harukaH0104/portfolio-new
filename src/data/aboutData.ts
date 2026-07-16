// 🌟 インポータントのデータ構造
export interface ImportantItem {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    description: string;
}

// 🌟 スキルズのデータ構造
export interface SkillItem {
    id: number;
    title: string;
    image: string;
    subtitle: string;
    description: string;
}

export const importantData: ImportantItem[] = [
    {
        id: 1,
        title: "徹底的に寄り添う姿勢",
        subtitle: "−対話から課題とユーザーの心を汲み取る−",
        image: "https://placeholder.com",
        description: "これまでの接客・販売経験を活かし、クライアント様とユーザーの双方に深く寄り添います。対話を通じてクライアント様自身も気づいていない「本当の課題」を見つけ出し、携帯販売の現場で培った視点を活かして「使う意図が本当に使いやすいデザイン」へ落とし込みます。"
    },
    {
        id: 2,
        title: "細やかな気づき",
        subtitle: "ーユーザーに徹底的に寄り添うー",
        image: "https://placeholder.com",
        description: "人一倍、周囲の環境や人の感情、視覚的な違和感に素早く気づく繊細な観察眼を持っています。この特性を活かし、ユーザーがWebサイトを操作する際に感じる「ほんの少しのストレス（文字の読みづらさ、ボタンの配置の違和感）」を敏感に察知し、細部までノイズのない美しいUIを追求します。"
    },
    {
        id: 3,
        title: "柔軟な受容力と未知への探究心",
        subtitle: "−変化を楽しみ、真摯に向き合う−",
        image: "https://placeholder.com",
        description: "新しい技術や未知の領域に対して壁を作らず、まずは柔軟に受け入れることを大切にしています。クライアント様からの想定外のご要望や時代の変化に対しても、拒否反応を示すことなく「より良くするためのチャンス」と捉え、当事者意識を持って真摯に向き合い形にします。"
    },
    {
        id: 4,
        title: "課題解決のための自走力",
        subtitle: "−実装までやり切る強さ−",
        image: "https://placeholder.com",
        description: "デザインの見た目を作るだけでなく、モダンなフロントエンド技術（React, Next.js, TypeScript）の実装まで一貫して学習しています。自衛隊経験で培った「困難な状況でも最後までやり切る力」を活かし、技術面からもクライアント様の課題を解決します。"
    }
];

export const skillsData: SkillItem[] = [
    {
        id: 1,
        title: "design",
        image: "https://placeholder.com",
        subtitle: "Photoshop / Illustrator / figma",
        description: "UI設計からプロトタイプ制作（Figma）、バナー制作や写真レタッチ（Photoshop）、ロゴや素材作成（Illustrator）まで、Webデザインに必要な基本操作が可能です。"
    },
    {
        id: 2,
        title: "coding",
        image: "https://placeholder.com",
        subtitle: "HTML / CSS / JavaScript / TypeScript / React / Next.js",
        description: "レスポンシブ対応のマークアップに加えTypeScript、React、Next.jsを用いたコンポーネント指向のUI実装や、エンジニアとのスムーズな連携を意識した開発が可能です。",
    }
];
