import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { worksData } from "../data/worksData";

export const Home: React.FC = () => {
    // 🌟全件ではなく、4つに切り出したデータをループに使用
    const featuredWorks = worksData.slice(1, 5);

    // 現在のスライド位置（0 = 1枚目, 1 = 2枚目, 2 = 3枚目）
    const [activeSlide, setActiveSlide] = useState(0);
    const sliderRef = React.useRef<HTMLDivElement>(null);
    const [isAutoScrolling, setIsAutoScrolling] = useState(false);

    // 10秒ごとのローテーション
    useEffect(() => {
        const timer = setInterval(() => {
            setIsAutoScrolling(true);
            setActiveSlide((prev) => (prev + 1) % 3);
        }, 10000); // 10秒
        return () => clearInterval(timer);
    }, []);

    // 🌟 画面全体を巻き込まず、写真の枠内「だけ」をスライドさせる処理（初期バグ完全修正版）
    useEffect(() => {
        if (window.innerWidth <= 768 && sliderRef.current) {
            const el = sliderRef.current;
            
            // ⭕【最重要】画面を読み込んだばかりで、レールの横幅がまだ 0 の時は、絶対にスクロール処理を行わない
            if (el.clientWidth === 0) return;

            // ⭕【最重要】1枚目（0番目）のときは、ブラウザ本来の初期位置（左端）のままで安定させるため、強制スクロールをスキップする
            if (activeSlide === 0 && el.scrollLeft === 0) {
                setIsAutoScrolling(false);
                return;
            }

            const targetScrollLeft = activeSlide * el.clientWidth;
            
            // 枠内の座標だけをスムーズに移動させる
            el.scrollTo({
                left: targetScrollLeft,
                behavior: "smooth"
            });
            
            const timeout = setTimeout(() => {
                setIsAutoScrolling(false);
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [activeSlide]); // カウントが切り替わった時だけ実行

    
    
    return (
        <div style={styles.pageRoot}>

            <style>{`
                /* =========================================================
                🌟 ヒーローセクション：左端固定の雲もくもくアニメーション
                ========================================================= */
                @keyframes leftCloudMoku {
                    0% {
                        /* 最初の状態：元の位置 */
                        transform: scale(1) translateY(0px) rotate(0deg);
                    }
                    50% {
                        /* 15秒後の状態：ほんのり少しだけ大きくし、上へ浮かせ、わずかに傾けます */
                        /* これにより、画像の位置は左端に固定されたまま、生き物のようにその場でもくもく動きます */
                        transform: scale(1.05) translateY(-8px) rotate(1.5deg);
                    }
                    100% {
                        /* 30秒かけて元の状態に戻ります */
                        transform: scale(1) translateY(0px) rotate(0deg);
                    }
                }

                .moving-cloud-single {
                    /* ⭕ もくもくアニメーションを30秒かけて、ゆったりと永久に無限ループさせます */
                    animation: leftCloudMoku 30s ease-in-out infinite;
                    
                     
                }
             
             

                @media (max-width: 768px) {
                    /* 1. ど真ん中の四角形を、タイトルとサブタイトルの真ん中（やや上方）に引き上げる */
                    .hero-center-square {
                        top: '35%' !important; /* ⭕ 縦長画面では、文字の塊の中心に吸い付くように上にスライド */
                        width: 320px !important; /* スマホ画面からはみ出さないスリムサイズに縮小 */
                        height: 320px !important;
                        border-radius: 24px !important;
                    }

                    /* 2. 星（stars）の写真を、タイトルの「一番上（斜め上）」に移動して可愛く整流 */
                    .hero-stars-photo {
                        top: -30px !important; 
                        right: 50px !important;   
                        width: 70px !important;  /* スマホの画面に合わせて、星のサイズをひと回り繊細に縮小 */
                    }
                    .responsive-work-card { width: 100% !important; max-width: 500px !important; }
                    .responsive-sub-photo-row {
                        display: flex !important;
                        flex-direction: row !important;
                        flex-wrap: nowrap !important;
                        overflow-x: auto !important;
                        scroll-snap-type: x mandatory !important;
                        scroll-behavior: smooth !important;
                        padding: 10px 0 !important;
                        width: 100% !important;
                        max-width: 500px !important;
                        margin: 30px auto 0 auto !important;
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                    .responsive-sub-photo-row::-webkit-scrollbar { display: none; }
                    .responsive-sub-image {
                        flex: 0 0 100% !important;
                        max-width: 100% !important;
                        scroll-snap-align: center !important;
                    }
                    
                    /* 🌟 追加：携帯サイズ時のみ丸ドットの並びを表示する */
                    .responsive-dot-container {
                        display: flex !important;
                    }
                }
            `}</style>

            {/* 1. HERO セクション */}
            <div style={styles.heroSection}>

                <div style={styles.heroInner}>
                    <h1 style={styles.heroTitle}>
                        HOSONO<br />
                        HARUKA's<br />
                        PORTFOLIO
                    </h1>
                    <p style={styles.heroSubtitle}>
                        あなたがまだ気づいていない想いを見つけ、<br />
                        ユーザーが使いやすい「最高の体験」へと翻訳する。
                    </p>

                    {/* 🌟 追加[2]：タイトルの横あたりに設置する星（stars）の写真 */}
                    <div className="hero-stars-photo" style={styles.starsImageWrapper}>
                        <img 
                            src="/top/stars.png"
                            alt="stars" 
                            style={styles.starsImg} 
                        />
                    </div>
                </div>

                {/* 🌟 左端寄せでその場でもくもく動く、1枚の雲画像 */}
                <div className="moving-cloud-single" style={styles.cloudLeftWrapper}>
                    <img 
                        src="/top/cloud.png"
                        alt="cloud" 
                        style={styles.cloudImg} 
                    />
                </div>

                {/* 🌟 追加[1]：ど真ん中に配置する角丸の四角形（背景写真） */}
                <div className="hero-center-square" style={styles.centerSquareCard} />

            </div>

            

            {/* 2. WORKS セクション（メイン注目作品） */}
            <div style={styles.sectionContainer}>
                <div style={styles.sectionTitleBlock}>
                    <p style={styles.sectionSubtitle}>制作したもの</p>
                    <h1 style={styles.sectionTitle}>WORKS</h1>
                </div>

                {/* 注目作品の特大カード */}
                <div style={styles.featuredWorkBlock}>
                    {/* 【上段】メイン画像とテキスト情報の2カラム構成 */}
                    <div style={styles.featuredMainRow}>
                        
                        {/* 左側：メイン写真領域 */}
                        <div style={styles.featuredImageContainer}>
                            <div style={styles.featuredMainImage}>[ Main Image 736 × 414 ]</div>
                        </div>
                        
                        {/* 右側：テキスト情報領域 */}
                        <div style={styles.featuredTextGroup}>
                            <div style={styles.workTitleLine}>
                                <div style={styles.categoryTag}>プロジェクト</div>
                                <p style={styles.workTitle}>ホテル「uni」</p>
                            </div>
                            <p style={styles.workRole}>コンセプト設計 / ロゴデザイン / UI・UXデザイン / Reactコーディング</p>
                            <p style={styles.workDescription}>
                                setumeisetumeisetumeisetumeisetumeisetumeisetumeisetumeisetumeisetumeisetumeisetumeisetumeisetumei
                                setumeisetumeisetumeisetumeisetumeisetumeisetumei
                                setumeisetumeisetumeisetumeisetumeisetumeisetumei
                            </p>
                            <Link to="/works/1" style={styles.textLinkBtn}>
                                詳しくみる　→
                            </Link>
                        </div>
                    </div>

                        {/* 【下段】サブの写真3枚（1枚目消失バグ・完全修正版） */}
                        <div 
                            ref={sliderRef}
                            className="responsive-sub-photo-row" 
                            style={styles.featuredSubPhotoRow}
                            onScroll={(e) => {
                                if (window.innerWidth <= 768) {
                                    // 🌟 機械が自動で動かしている間は、スマホからのスクロール通知を無視する
                                    if (isAutoScrolling) return;

                                    const el = e.currentTarget;
                                    if (el.clientWidth === 0) return;
                                    
                                    // 🌟 100%確実に現在のスクロール位置から「今何枚目か（0、1、2）」を正確に計算
                                    const currentIdx = Math.round(el.scrollLeft / el.clientWidth);
                                    
                                    // 0枚目〜2枚目の正常な範囲内で、現在地と変わった時だけステートを更新
                                    if (currentIdx >= 0 && currentIdx <= 2 && currentIdx !== activeSlide) {
                                        setActiveSlide(currentIdx);
                                    }
                                }
                            }}
                        >
                            <div className="responsive-sub-image" style={styles.subImageCard}>[ Sub Image 1 ]</div>
                            <div className="responsive-sub-image" style={styles.subImageCard}>[ Sub Image 2 ]</div>
                            <div className="responsive-sub-image" style={styles.subImageCard}>[ Sub Image 3 ]</div>
                        </div>

                        {/* 現在のページを表す小さな丸ドット（インジケーター） */}
                        <div className="responsive-dot-container" style={styles.dotContainer}>
                            {[0, 1, 2].map((idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setIsAutoScrolling(true); // 🌟タップされたら一時的に自動フラグをONにして安全にスライドさせる
                                        setActiveSlide(idx);
                                    }}
                                    style={{
                                        ...styles.dotItem,
                                        backgroundColor: activeSlide === idx ? '#4599C4' : '#e0e0e0',
                                    }}
                                    aria-label={`スライド ${idx + 1} を表示`}
                                />
                            ))}
                        </div>



                        
                </div>

                {/* 3. OTHERS セクション（グリッド表示） */}
                <div style={styles.subSectionTitleBlock}>
                    <h1 style={styles.otherSectionTitle}>OTHERS</h1>
                </div>

                <div style={styles.worksGridContainer}>
                    {featuredWorks.map((work) => (
                        <Link to={`/works/${work.id}`} key={work.id} className="responsive-work-card" style={styles.gridWorkCard}>
                            {/* 画像（Figmaの比率を維持） */}
                            <div style={styles.gridImageContainer}>
                                <div style={styles.gridImagePlaceholder}>[ {work.title} Image ]</div>
                            </div>
                            {/* タグ と タイトル */}
                            <div style={styles.workTitleLine}>
                                <div style={styles.categoryTag}>{work.tag}</div>
                                <h3 style={styles.workTitle}>{work.title}</h3>
                            </div>
                            {/* 担当範囲 */}
                            <p style={styles.workRole}>{work.role}</p>
                        </Link>
                    ))}
                </div>   

                {/* 全体を見るボタン */}
                <Link to='/works' style={styles.viewAllBtn}>
                    <div style={styles.viewAllIcon}>→</div>
                    <p style={styles.viewAllText}>すべてみる</p>
                </Link>
            </div>
                 
            {/* 4. ABOUT セクション（🌟画面の端から端まで余白なく横断するチェック柄） */}
            <div style={styles.aboutSectionWrapper}>
                <div style={styles.aboutInnerContainer}>
                    
                    {/* タイトル：左端に配置 */}
                    <div style={styles.titleContainer}>
                        <p style={styles.contentSubtitle}>わたしのこと</p>
                        <h1 style={styles.contentTitle}>ABOUT</h1>
                    </div>

                    {/* メインエリア：細くなっても「箱」と「写真」の双方が画面の真ん中を維持 */}
                    <div style={styles.aboutMainRow}>
                        
                        {/* 左側：名前、説明文、ボタンを包む「箱」（縦横500px固定） */}
                        <div style={styles.aboutTextBox}>
                            <p style={styles.nameSub}>細野　春花</p>
                            <p style={styles.name}>HOSONO HARUKA</p>
                            <p style={styles.introduce}>
                                クライアントの「自覚のない想い」まで対話で引き出し、Webから紙媒体まで横断して一気通貫で表現するデザイナーを目指しています。
                                現在の会社で培ったフロント・バックエンドの技術環境を活かし, Webの裏側を見据えたノイズのないUI/UX設計が可能。さらに名刺等の紙媒体にも世界観を正しく落とし込みます。
                                エゴではなく、お客様の「伝えたい意志」とユーザーの「使いやすさ」の双方に寄り添い, 確かな技術力でビジネスの課題解決に向き合います。
                            </p>
                            <Link to='/about' style={styles.textLinkBtn}>
                                詳しくみる　→
                            </Link>
                        </div>

                        {/* 右側：丸の写真（縦横500px固定） */}
                        <div style={styles.aboutPhotoItem}>
                            <div style={styles.profileImage}></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
    
};

const styles = {
    // 🌟 一番外側の土台：画面幅が狭まっても確実に「左右20pxの美しい余白」を死守する
    pageRoot: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column' as const,
        overflowX: 'hidden' as const,
        padding: '0 20px',               // ⭕ 全体に強制適用する左右の安全余白
        boxSizing: 'border-box' as const,  // ⭕ 余白を含めて100%幅を計算させ、ハミ出しを防止
    },

    // --- HERO SECTION ---
    heroSection: {
        width: '100%',
        marginTop: '100px',
        boxSizing: 'border-box' as const,
        position: 'relative' as const,
    },
    heroInner: {
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto 300px auto',
        display: 'flex',
        flexDirection: 'column' as const,
    },
    heroTitle: {
        fontFamily: 'Hepta Slab',
        fontSize: 'clamp(44px, 6.5vw, 96px)',
        fontWeight: '800',
        letterSpacing: '0.1em',
        //margin: '0 0 30px 0',
        alignSelf: 'flex-start' as const,
        zIndex: 3,
    },
    heroSubtitle: {
        fontSize: 'clamp(14px, 1.8vw, 24px)',
        color: '#4599C4',
        lineHeight: '1.8',
        letterSpacing: '0.05em',
        margin: '500px 0 150px 0',
        alignSelf: 'flex-end' as const,
        textAlign: 'right' as const,
        zIndex: 3,
    },

    // 🌟 新設：ヒーローのど真ん中に設置する角丸の四角形（動かない写真・背景）
    centerSquareCard: {
        position: 'absolute' as const,
        
        // ⭕ 【上下左右ど真ん中寄せの黄金比】
        top: '35%',
        left: '50%',
        transform: 'translate(-50%, -50%)', // 自身のサイズ分を戻して完璧なセンターへ
        
        // ⭕ PC大画面時のサイズ（デザインに合わせて自由に変えてください）
        width: '700px',
        height: '700px',
        
        borderRadius: '40px',               // 優しいしっかりめの角丸
        backgroundColor: '#ffffff',         // 写真を当てる前のベース（画像にする場合は以下を有効化）
        
        backgroundImage: 'url(/top/top.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
        boxShadow: '0 20px 50px rgba(0,0,0,0.03)', // 上品な沈み込み影
        zIndex: 1,                          // ⭕ 雲（zIndex:1）より手前、文字（zIndex:3）より後ろ
        boxSizing: 'border-box' as const,
        transition: 'all 0.5s ease',        // 画面が縮む時の滑らかな移動用
    },

    // 🌟 新設：タイトルの横あたりに設置する星（stars）の外枠
    starsImageWrapper: {
        position: 'absolute' as const,
        
        // ⭕ PC時はタイトルの横あたり（例：右側や斜め上など）に絶対配置で固定
        top: '10px',
        right: '50px', // 💡 タイトル「WORKS」などの文字が終わる右横あたりにジャストで合わせます
        
        width: '120px',  // PC時の星の写真のサイズ
        height: 'auto',
        zIndex: 2,       // 一番手前
        boxSizing: 'border-box' as const,
    },
    // 星の写真自体（歪み防止）
    starsImg: {
        width: '100%',
        height: 'auto',
        display: 'block' as const,
        objectFit: 'contain' as const,
    },

    // 🌟 新設：雲の画像を「左端」に完全に固定する外枠
    cloudLeftWrapper: {
        position: 'absolute' as const,
        top: '50%',
        left: '-60px', 
        transformOrigin: 'left center',
        width: 'clamp(250px, 35vw, 450px)', // 🌟 パソコンでは大きく、スマホでは勝手に程よく縮む可変の横幅
        aspectRatio: '4 / 3',   // お使いの雲画像の縦横比に合わせて自由に調整してください
        zIndex: 2,              // コンテンツ（キャッチコピー）の背後に潜り込ませる
        boxSizing: 'border-box' as const,
    },
    
    // 🌟 新設：雲画像自体のルール（絶対に歪ませず、枠いっぱいにフィットさせる）
    cloudImg: {
        width: '100%',
        height: '100%',
        objectFit: 'contain' as const, // ⭕ 画像の端っこが切り取られるのを100%防止
        display: 'block' as const,
    },

    // --- GENERAL SECTIONS (WORKS / ABOUT) ---
    // 各コンテンツセクションの共通の最大幅ラッパー
    sectionContainer: {
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto 150px auto',
        display: 'flex',
        flexDirection: 'column' as const,
        boxSizing: 'border-box' as const,
    },
    sectionTitleBlock: {
        alignSelf: 'flex-start' as const,
        marginBottom: '50px',
    },
    sectionSubtitle: {
        fontSize: '16px',
        color: '#4599C4',
        letterSpacing: '0.05em',
        margin: '0 0 5px 0',
    },
    sectionTitle: {
        fontFamily: 'Hepta Slab',
        fontSize: '32px',
        fontWeight: '800',
        letterSpacing: '0.1em',
        margin: 0,
    },

    // --- FEATURED WORK (uni) ---
    featuredWorkBlock: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '40px',
        marginBottom: '100px',
    },
    featuredMainRow: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row' as const,
        justifyContent: 'space-between',
        alignItems: 'center' as const,
        gap: '60px',
        flexWrap: 'wrap' as const, // スマホ時に縦並びにする
    },
    featuredImageContainer: {
        flex: '1 1 550px',
        width: '100%',
        maxWidth: '100%',
        display: 'flex',
        justifyContent: 'center', // 🌟縦並び時に中央寄せ
    },
    featuredMainImage: {
        width: '100%',
        maxWidth: '736px',
        aspectRatio: '736 / 414',
        backgroundColor: '#e0e0e0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#666',
    },
    featuredTextGroup: {
        flex: '1 1 450px',
        width: '100%',
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '20px',
    },
    featuredSubPhotoRow: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row' as const,
        //justifyContent: 'space-between',
        justifyContent: 'flex-start', 
        gap: '20px',
        flexWrap: 'wrap' as const, // 🌟スマホ時にサブ写真も綺麗に折り返す
    },
    subImageCard: {
        flex: '1 1 200px', // 🌟画面に合わせて流動的に縮み、スマホ時は中央に並ぶ
        width: '100%',
        // ⭕ PC画面で横に3枚並んだ際、カードが勝手に巨大化して2段に折れるバグを防ぐ上限設定
        maxWidth: 'calc(33.333% - 14px)', 
        aspectRatio: '232 / 130',
        backgroundColor: '#eaeaea',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#888',
        fontSize: '14px',
    },
        // --- 追加：スライダーのインジケーター（丸ドット）用のスタイル定義 ---
    // ドットを囲う親枠（PC時は非表示、スマホ時は真ん中に並ぶ）
    dotContainer: {
        display: 'none',             // ⭕ PC画面では邪魔にならないように完全に非表示
        justifyContent: 'center',
        alignItems: 'center',
        gap: '15px',                 // ドットとドットの間の隙間
        marginTop: '5px',           // 写真との間の隙間
        width: '100%',
    },
    // ドット単体のデザイン（丸型）
    dotItem: {
        width: '10px',                // ドットの横幅
        height: '10px',               // ドットの縦幅
        minWidth: '8px',             // 🌟追加：横に潰れるのを絶対に防ぐ
        minHeight: '8px',            // 🌟追加：縦に伸びるのを絶対に防ぐ
        borderRadius: '50%',         // 完璧な正円にする設定
        border: 'none',              // 縁線はなし
        padding: 0,
        cursor: 'pointer',
        transition: 'background-color 0.3s ease', // 色が変わる時の滑らかなアニメーション
        flexShrink: 0, 
        alignSelf: 'center' as const, 
    },
    // --- OTHERS GRID ---
    subSectionTitleBlock: {
        alignSelf: 'flex-start' as const,
        marginBottom: '40px',
    },
    otherSectionTitle: {
        fontFamily: 'Hepta Slab',
        fontSize: '24px',
        fontWeight: '800',
        letterSpacing: '0.1em',
        margin: 0,
        color: '#F49961',
    },
    worksGridContainer: {
        width: '100%',
        display: 'flex',
        gap: '40px 30px',
        marginBottom: '60px',
        flexWrap: 'wrap' as const,
        justifyContent: 'center', // ⭕ 重複を削除し、縦に並んだ時も綺麗に「画面の真ん中」に置くルールに統一                   // ⭕ GridからFlexに変更
        flexDirection: 'row' as const,       // 横並びを基本にする
    },
    gridWorkCard: {
        display: 'flex',
        gap: '15px',
        flexDirection: 'column' as const,
        textDecoration: 'none',
        color: 'inherit',
        minWidth: 0, // 🌟 Grid内で中のタイトル文字（nowrap）がハミ出してカード幅を広げないため
        // ⭕ 全体の50%（半分）から、横の間隔（gap: 30px）の半分である15pxを引いたサイズ
        width: 'calc(50% - 15px)', 
        boxSizing: 'border-box' as const, 
    },
    gridImageContainer: {
        width: '100%',
        aspectRatio: '500 / 281',
    },
    gridImagePlaceholder: {
        width: '100%',
        height: '100%',
        backgroundColor: '#e0e0e0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#666',
        fontSize: '14px',
    },
    // --- COMMON PARTS (TAG / TITLE) ---
    workTitleLine: {
        display: 'flex',
        flexDirection: 'row' as const,
        alignItems: 'center' as const,
        gap: '10px',
        flexWrap: 'nowrap' as const, // 🌟追加：タグとタイトルを行ごと絶対に改行させない
    },
    categoryTag: {
        width: '100px',
        height: '30px',
        fontSize: '14px',
        color: '#fff',
        backgroundColor: '#4599C4',
        padding: '4px 11px',
        borderRadius: '30px',
        fontWeight: 'bold',
        whiteSpace: 'nowrap' as const, // 🌟追加：タグ内の文字（プロジェクト等）を絶対改行しない
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0, // 🌟追加：画面が狭くなってもタグ自体が潰れて小さくならないように固定
    },
    workTitle: {
        fontSize: '16px',
        fontWeight: 'bold',
        margin: 0,
        color: '#F49961',
        whiteSpace: 'nowrap' as const, // 🌟追加：タイトル文字を絶対に改行しない
        overflow: 'hidden' as const,    // 🌟お好みで追加：画面を突き破る場合に三点リーダーにする設定
        textOverflow: 'ellipsis' as const,
    },
    workRole: {
        fontSize: '13px',
        color: '#F49961',
        margin: 0,
    },
    workDescription: {
        fontSize: '15px',
        lineHeight: '1.8',
        color: '#4E4E4E',
        margin: 0,
        wordBreak: 'break-all' as const,
    },
    // --- BUTTONS ---
    textLinkBtn: {
        width: '180px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '13px',
        //fontWeight: 'bold',
        color: '#4599C4',
        backgroundColor: '#ffffff',
        borderRadius: '30px',
        border: '3px #4599C4 solid',
        textDecoration: 'none',
        alignSelf: 'center' as const,
    },
    viewAllBtn: {
        display: 'flex',
        flexDirection: 'row' as const,
        alignItems: 'center' as const,
        gap: '15px',
        textDecoration: 'none',
        color: '#4599C4',
        alignSelf: 'flex-end' as const,
        marginTop: '20px',
    },
    viewAllIcon: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        border: '1px solid #4599C4',
        backgroundColor: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '18px',
    },
    viewAllText: {
        fontSize: '16px',
        fontWeight: 'bold',
        letterSpacing: '0.1em',
        margin: 0,
    },
    // --- ABOUT AREA ---
    // 🌟 セクション全体のラッパー：画面幅100%で余白なく横に完全に横断する土台
    aboutSectionWrapper: {
        width: '100vw',               // ⭕ 親を無視してブラウザ画面の横幅100%いっぱいに広げる
        marginLeft: 'calc(-50vw + 50%)', // ⭕ 【最重要】画面の左端まで強制的に引っ張る計算式
        marginRight: 'calc(-50vw + 50%)',// ⭕ 【最重要】画面の右端まで強制的に引っ張る計算式
        marginTop: '150px',
        marginBottom: '300px',
        padding: '60px  20px', 
        backgroundImage: `
            linear-gradient(to right, #C4E9F2 1px, transparent 1px),
            linear-gradient(to bottom, #C4E9F2 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px', // 穴の大きさ30px + 線1px = 31px
        boxSizing: 'border-box' as const,
    },
    // 内側の最大幅コンテナ：コンポーネント全体（WORKSなど）の1200pxラインに合わせる枠
    aboutInnerContainer: {
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        //padding: '0 20px', // スマホ用の安全マージン
        boxSizing: 'border-box' as const,
        display: 'flex',
        flexDirection: 'column' as const,
    },
    titleContainer: {
        alignSelf: 'flex-start' as const,
        marginBottom: '50px',
    },
    contentSubtitle: {
        fontSize: '16px',
        color: '#4599C4',
        letterSpacing: '0.05em',
        textAlign: 'left' as const, // 全て左寄せ
    },
    contentTitle: {
        fontFamily: 'Hepta Slab',
        fontSize: '32px',
        fontWeight: '800',
        letterSpacing: '0.1em',
        margin: '0 0 40px 0',
        textAlign: 'left' as const, // 全て左寄せ
    },
    
    // 🌟 メイン行：重複していたjustifyContentを1つに整理し、縦並び時の中央揃えを維持
    aboutMainRow: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row' as const,
        justifyContent: 'center', // ⭕ 重複を削除し、縦に並んだ時も綺麗に「画面の真ん中」に置くルールに統一
        alignItems: 'center' as const,
        gap: '30px',
        flexWrap: 'wrap' as const,
    },
    
    // 🌟 名前・説明文・ボタンを囲う「箱」（縦横500pxの完全固定サイズ）
    aboutTextBox: {
        width: '550px',              // ⭕ 横幅500px固定
        //height: '550px',             // ⭕ 縦幅500px固定
        backgroundColor: '#C4E9F2', 
        borderRadius: '30px',        
        padding: '50px',             
        boxSizing: 'border-box' as const,
        display: 'flex',
        flexDirection: 'column' as const,
        alignSelf: 'center' as const, // 縦一列になっても真ん中をキープ
    },
    nameSub: {
        fontSize: '18px',
        color: '#4599C4',
        margin: 0,
        textAlign: 'left' as const, 
    },
    name: {
        fontFamily: 'Hepta Slab',
        fontSize: '36px',
        fontWeight: '800',
        margin: 0,
        textAlign: 'left' as const, 
        //whiteSpace: 'nowrap' as const,
    },
    introduce: {
        fontSize: '15px',
        lineHeight: '1.9',
        color: '#555',
        margin: '50px 0 50px 0',
        textAlign: 'left' as const, // 左寄せ
    },
    
    // 🌟 右側：写真用の親コンテナ（縦横500pxの完全固定サイズ）
    aboutPhotoItem: {
        width: '500px',              // ⭕ 横幅500px固定
        height: '500px',             // ⭕ 縦幅500px固定
        boxSizing: 'border-box' as const,
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center' as const,
        alignSelf: 'center' as const, // 縦一列になっても真ん中をキープ
    },
    // プロフィール画像本体（親枠いっぱいの完全な正円）
    profileImage: {
        width: '100%',
        maxWidth: '450px',
        aspectRatio: '1 / 1',
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center' as const,
        borderRadius: '50%',
        backgroundColor: '#ffffff',
        backgroundImage: 'url(/top/top.about.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
};