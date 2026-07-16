import React from "react";
import { importantData, skillsData } from "../data/aboutData"; // 🌟データファイルをインポート

export const About: React.FC = () => {
    return (
        <div style={styles.pageRoot}>
            {/* 🌟 メディアクエリを埋め込んで携帯サイズ（768px以下）時の挙動を100%安全に制御 */}
                        {/* 🌟 携帯サイズ（768px以下）用のCSS指定に、スマホ時のみ発動するorderルールを追記 */}
                        <style>{`
                @media (max-width: 768px) {
                    /* すべての横並びを縦一列にする */
                    .responsive-about-row {
                        flex-direction: column !important;
                        gap: 40px !important;
                    }
                    .responsive-text-group,
                    .responsive-photo-container {
                        width: 100% !important;
                        max-width: 500px !important;
                        align-self: center !important;
                    }
                    
                    /* インポータントの親枠を縦並びにする */
                    div[style*="importantFlexGrid"] {
                        display: flex !important;
                        flex-direction: column !important;
                    }

                    /* 🌟 追加：スマホ（携帯サイズ）のときだけ発動する、カードの並び替え命令 */
                    .order-1 { order: 1 !important; }
                    .order-2 { order: 2 !important; }
                    .order-3 { order: 3 !important; }
                    .order-4 { order: 4 !important; }

                    /* インポータントのカードをスマホサイズにする */
                    .responsive-important-card {
                        width: 100% !important;
                        height: auto !important;
                        max-width: 550px !important;
                        align-self: center !important;
                    }
                    .responsive-important-img {
                        width: 100% !important;
                        max-width: 267px !important;
                    }

                    /* スキルズのカードをスマホサイズにする */
                    .responsive-skill-card {
                        width: 100% !important;
                        height: auto !important;
                        max-width: 550px !important;
                        align-self: center !important;
                    }
                    .responsive-skill-img {
                        width: 100% !important;
                        max-width: 267px !important;
                    }
                }
            `}</style>


            <div style={styles.innerWrapper}>
                
                {/* =========================================================
                    1. ABOUT セクション（既存）
                   ========================================================= */}
                <div style={styles.titleBlock}>
                    <p style={styles.sectionSubtitle}>わたしのこと</p>
                    <h1 style={styles.sectionTitle}>ABOUT</h1>
                </div>

                <div className="responsive-about-row" style={styles.mainColumns}>
                    <div className="responsive-text-group" style={styles.profileTextGroup}>
                        <div style={styles.nameBlock}>
                            <p style={styles.nameJapanese}>細野　春花</p>
                            <p style={styles.nameEnglish}>HOSONO HARUKA</p>
                        </div>
                        <div style={styles.bioTextBlock}>
                            <p style={styles.bioText}>
                                1999年　北海道　旭川市生まれ。<br />
                                「誰かのためになりたい」という気持ちでキャリアを築いてきました。<br />
                                昔から憧れていたWebデザインの世界へ、「確かなデザインと技術を身につければ、どこからでも誰かの力になれる仕事ができる」と確信し、一念発起して挑戦を決めました。<br />
                                私は、自分のエゴやセンスを前面に出すクリエイターではなく、クライアントの「熱い想い」や「こだわり」に誰よりも寄り添い、それをユーザーに届く最適な形へと翻訳できるデザイナーになりたいと考えています。<br />
                                世の中には、素晴らしいサービスや独自の哲学を持っているのに、それをどうビジュアルや言葉にして発信すればいいか悩んでいる企業や人がたくさんいます。私は、クライアント自身もまだ言語化できていない「自覚のない想い」まで徹底的な対話とリサーチで引き出し、整理するお手伝いをしたいです。<br />
                                And、引き出した想いを形にする際は、Webサイトから印刷物まで媒体を横断し、あらゆる接点でブランドの世界観を一気通貫で再現する技術力でお客様の課題解決に向き合えるようなデザイナーを目指しています。現在の会社ではフロントエンドやバックエンドの技術に触れる環境にあるため、Webの裏側の仕組みまで理解したノイズのないUI/UX設計が可能です。それと同時に、名刺やショップカードといった紙媒体にもその世界観を正しく落とし込み、ユーザーがどこで触れても「使いやすく、心地よい体験」ができることに徹底的にこだわります。<br />
                                クライアントの「伝えたい意志」と、ユーザーの「最高の体験」の双方に寄り添い、ビジネスを成功に導くカタチをデザインと技術の力で一緒に作っていきます。<br />
                            </p>
                        </div>
                    </div>
                    <div className="responsive-photo-container" style={styles.photoContainer}>
                        <div style={styles.avatarPhoto}></div>
                    </div>
                </div>

                {/* =========================================================
                    2. IMPORTANT セクション（🌟新規追加：30pxチェック柄背景を内包）
                   ========================================================= */}
                {/* FlexboxでPC時2×2、スマホ時真ん中寄せ縦並び */}
                <div style={styles.skillsSectionWrapper}>
                    <div style={styles.skillsTitleBlock}>
                        <p style={styles.sectionSubtitle}>大切にしていること</p>
                        <h1 style={styles.sectionTitle}> IMPORTANT</h1>
                    </div>
                    <div style={styles.importantFlexGrid}>
                        {importantData.map((item, index) => {
                            // 左上(0)と右下(3)は青背景(#C4E9F2)、右上(1)と左下(2)はオレンジ背景(#FCEAD2)
                            const isBlue = index === 0 || index === 3;
                            
                            // 🌟 縦並び（モバイル）時の順番をクラス名（order-1, order-2...）として割り振る
                            let orderClass = "order-1";
                            if (index === 1) orderClass = "order-2";
                            if (index === 2) orderClass = "order-4"; // カード番号3は「4番目」へ
                            if (index === 3) orderClass = "order-3"; // カード番号4は「3番目」へ

                            return (
                                <div 
                                    key={item.id} 
                                    /* 🌟 className に並び替え用の orderClass を追加しました */
                                    className={`responsive-important-card ${orderClass}`}
                                    style={{
                                        ...styles.importantCard,
                                        backgroundColor: isBlue ? '#4599C4' : '#F49961'
                                    }}
                                >
                                    <h3 style={styles.cardTitle}>{item.title}</h3>
                                    <p style={styles.cardSubtitle}>{item.subtitle}</p>
                                    
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="responsive-important-img"
                                        style={styles.importantImage} 
                                    />
                                    <p style={styles.cardDescription}>{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>


                {/* =========================================================
                    3. SKILLS セクション（🌟新規追加）
                   ========================================================= */}
                <div style={styles.skillsSectionWrapper}>
                    <div style={styles.skillsTitleBlock}>
                        <p style={styles.sectionSubtitle}>できること</p>
                        <h1 style={styles.sectionTitle}>SKILLS</h1>
                    </div>

                    {/* FlexboxでPC時左右横並び、スマホ時真ん中寄せ縦並び */}
                    <div style={styles.skillsFlexGrid}>
                        {skillsData.map((skill, index) => {
                            // 左が青背景(#C4E9F2)、右がオレンジ背景(#FCEAD2)
                            const isBlue = index === 0;
                            return (
                                <div 
                                    key={skill.id} 
                                    className="responsive-skill-card"
                                    style={{
                                        ...styles.skillCard,
                                        backgroundColor: isBlue ? '#4599C4' : '#F49961'
                                    }}
                                >
                                    {/* 🌟 インポータントと同じ構成（中身はすべて真ん中揃え） */}
                                    <h3 style={styles.skillCardTitle}>{skill.title}</h3>
                                    
                                    <img 
                                        src={skill.image} 
                                        alt={skill.title} 
                                        className="responsive-skill-img"
                                        style={styles.skillImage} 
                                    />

                                    <p style={styles.skillCardSubtitle}>{skill.subtitle}</p>
                                    <p style={styles.cardDescription}>{skill.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>                                    
            </div>
        </div>
    );
};

const styles = {
    // コンポーネントの一番外側の土台
    pageRoot: {
        width: '100%',
        maxWidth: '1200px',
        margin: '200px auto 200px auto',
        padding: '0 20px', 
        display: 'flex',
        flexDirection: 'column' as const,
        boxSizing: 'border-box' as const,
    },
    innerWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column' as const,
    },
    // タイトル周り（アバウト共通）
    titleBlock: {
        alignSelf: 'flex-start' as const,
        marginBottom: '50px',
    },
    sectionSubtitle: {
        fontSize: '16px',
        color: '#4599C4',
        letterSpacing: '0.05em',
        textAlign: 'left' as const,
    },
    sectionTitle: {
        fontFamily: 'Hepta Slab',
        fontSize: '32px',
        fontWeight: '800',
        letterSpacing: '0.1em',
        margin: '0 0 40px 0',
        textAlign: 'left' as const,
    },
    // 名前ブロック
    nameBlock: {
        alignSelf: 'flex-start' as const,
        marginBottom: '30px',
    },
    nameJapanese: {
        fontSize: '20px',
        color: '#4599C4',
        letterSpacing: '0.05em',
        margin: 0,
        textAlign: 'left' as const,
    },
    nameEnglish: {
        fontFamily: 'Hepta Slab',
        //whiteSpace: 'nowrap' as const,
        fontSize: '40px', 
        fontWeight: '800',
        lineHeight: 1,
        letterSpacing: '0.05em',
        margin: 0,
        textAlign: 'left' as const,
    },
    mainColumns: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row' as const,
        justifyContent: 'center', 
        alignItems: 'center' as const, 
        gap: '60px', 
        flexWrap: 'wrap' as const,     
    },
    profileTextGroup: {
        flex: '1 1 550px', 
        width: '100%',
        maxWidth: '100%',
        minWidth: '320px',
        display: 'flex',
        flexDirection: 'column' as const,
        boxSizing: 'border-box' as const,
        alignSelf: 'center' as const,
    },
    bioTextBlock: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column' as const,
    },
    bioText: {
        fontSize: '15px',
        lineHeight: '2.0',
        color: '#4e4e4e',
        margin: 0,
        whiteSpace: 'normal' as const,
        wordBreak: 'break-all' as const,
        textAlign: 'left' as const,
    },
    photoContainer: {
        flex: '0 1 500px',
        width: '100%',
        minWidth: '320px',
        aspectRatio: '736 / 414',
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center' as const,
    },
    avatarPhoto: {
        width: '100%',
        maxWidth: '450px',
        aspectRatio: '1 / 1',
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center' as const,
        borderRadius: '50%',
        backgroundColor: '#ffffff',
    },
    // =========================================================// 🌟 IMPORTANT SECTION STYLES// =========================================================// 親の壁（1200px）を突っ切ってブラウザの端から端まで30pxのチェック柄を敷く
    importantSectionWrapper: {
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        marginTop: '300px',
        padding: '100px calc(50vw - 50%)',
         // 🌟中身だけ1200pxの内側にピシッと揃える計算式
        backgroundImage: `linear-gradient(to right, #C4E9F2 1px, transparent 1px)', 'linear-gradient(to bottom, #C4E9F2 1px, transparent 1px)`,
        backgroundSize: '31px 31px',
        boxSizing: 'border-box' as const,
        display: 'flex',
        flexDirection: 'column' as const,
    },
    importantTitleBlock: {
        alignSelf: 'flex-start' as const,
        marginBottom: '50px',
    },
    // FlexboxでPC時2×2を構築（1行辺り550px×2枚＋隙間30px＝約1130pxで内側に美しく収まります）
    importantFlexGrid: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row' as const,
        flexWrap: 'wrap' as const,
        justifyContent: 'center',
        // 縦並び時に画面の真ん中に寄せる
        gap: '40px 30px',
    },
        // 横550px、縦600px、角丸30px、縁（縁線）なし固定カード
    importantCard: {
        width: '550px',
        height: '600px',
        borderRadius: '30px',
        padding: '50px 50px',
        boxSizing: 'border-box' as const,
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '20px',
        justifyContent: 'center',
        alignItems: 'center' as const,// 🌟中身の文字や写真はすべて左寄せ
    },
    cardSubtitle: {
        fontSize: '14px',
        color: '#FFF8E1',
        //fontWeight: 'bold',
        letterSpacing: '0.05em',
        margin: 0,
        textAlign: 'center' as const,
    },
    cardTitle: {
        fontSize: '29px',
        fontWeight: '900',
        color: '#FFF8E1',
        margin: 0,
        textAlign: 'center' as const,
    },
    // 横２６７、縦２０１固定写真
    importantImage: {
        width: '267px',
        height: '201px',
        objectFit: 'cover' as const,
        backgroundColor: '#ffffff', // 枠がないので写真の輪郭が綺麗に見える土台
        alignSelf: 'center' as const, 
    },
    cardDescription: {
        fontSize: '16px',
        lineHeight: '1.8',
        color: '#4e4e4e',
        margin: 0,
        textAlign: 'center' as const, // 🌟文章は左揃え
    },
    // =========================================================// 🌟 SKILLS SECTION STYLES// =========================================================
    skillsSectionWrapper: {
        width: '100%',
        marginTop: '300px',
        display: 'flex',
        flexDirection: 'column' as const,
    },
    skillsTitleBlock: {
        fontFamily: 'Hepta Slab',
        alignSelf: 'flex-start' as const,
        marginBottom: '50px',
    },
    skillsFlexGrid: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row' as const,
        flexWrap: 'wrap' as const,
        justifyContent: 'center', 
        gap: '40px 30px',
    },
    // 🌟 修正：インポータントと全く同じサイズ（横550、縦600）かつ中央揃えの箱に固定
    skillCard: {
        width: '550px',
        height: '600px',
        borderRadius: '30px',
        padding: '50px 50px',
        boxSizing: 'border-box' as const,
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '20px',
        justifyContent: 'center',
        alignItems: 'center' as const, // 中身をすべて横方向の中央揃えにする
    },
    skillCardTitle: {
        fontFamily: 'Hepta Slab',
        color: '#FFFCF3',
        fontSize: '40px',
        fontWeight: 'bold',
        margin: 0,
        textAlign: 'center' as const,
    },
    skillCardSubtitle: {
        fontFamily: 'Hepta Slab',
        color: '#FFFCF3',
        fontSize: '14px',
        //fontWeight: 'bold',
        letterSpacing: '0.05em',
        margin: 0,
        textAlign: 'center' as const,
    },
    // 🌟 修正：インポータントと全く同じサイズ（横267、縦201）の写真枠に変更
    skillImage: {
        width: '267px',
        height: '201px',
        objectFit: 'cover' as const,
        backgroundColor: '#ffffff',
        alignSelf: 'center' as const, // 写真を真ん中に固定
    },
};