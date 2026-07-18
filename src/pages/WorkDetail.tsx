import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { worksData } from '../data/worksData';

export const WorkDetail: React.FC = () => {
    // URLの末尾（/works/1 なら "1"）を取得
    const { id } = useParams<{ id: string }>();
  
    // データの中から、IDが一致する作品を1つ検索
    const work = worksData.find((w) => w.id === Number(id));

    // もしデータが見つからない場合の不具合防止（白紙画面になるのを防ぐお守り）
    if (!work) {
        return (
            <div style={{ padding: '80px 20px', textAlign: 'center' }}>
                <p style={{ marginBottom: '20px', color: '#888888' }}>作品が見つかりませんでした。</p>
                <Link to="/works" style={{ color: '#111111', fontWeight: 'bold' }}>← 作品一覧に戻る</Link>
            </div>
        );
    }

    return (
        <div style={styles.pageRoot}>

            <style>{`
                @media (max-width: 768px) {
                    .responsive-description-row {
                        flex-direction: column !important;
                        gap: 40px !important;
                    }
                    /* スマホ時は半々（50%）の制限を解除し、自動で画面幅100%に広げて中央配置にする */
                    .responsive-description-row > p,
                    .responsive-description-row > div {
                        flex: 1 1 100% !important;
                        max-width: 500px !important; /* 広がりすぎないようにABOUTの箱等とサイズを統一 */
                        align-self: center !important;
                    }
                }
            `}</style>

            {/* 🌟 画面いっぱいの画像 ＆ タイトルが重なるトップコンテナ */}
            <div style={styles.detailHeroWrapper}>
                
                {/* 🌟 画面いっぱいに広がり、狭くなったら自動で切り取られるメイン画像 */}
                {/* work.mainImage などの画像パスを src に指定してください */}
                <div style={styles.imageContainer}>
                    <img 
                        src={work.mainImage || "https://placeholder.com"} 
                        alt={work.title} 
                        style={styles.heroImage} 
                    />
                </div>

                {/* 🌟 既存のタイトル配置エリア（すでに実装されているもの） */}
                {/* 透明な座布団として上に重ね、左上にタイトルを固定します */}
                <div style={styles.heroTitleOverlay}>
                    <div style={styles.titleInnerBlock}>
                        <p style={styles.tag}>{work.tag}</p>
                        <h1 style={styles.workTitle}>{work.title}</h1>
                        <p style={styles.range}>{work.range}</p>
                    </div>
                </div>
            </div>

      
            

            {/* 紹介文 セクション */}
            <div  className="responsive-description-row" style={styles.descriptionContainer}>
                <p style={styles.description}>
                    setumeisetumeisetumeisetumeisetumeisetumeisetumeisetumeisetumeisetumeisetumeis
                    setumeisetumeisetumeisetumeisetumeisetumeisetumeisetumeisetumeisetumeisetumeis
                    setumeisetumeisetumeisetumeisetumeisetumeisetumeisetumeisetumeisetumeisetumeis
                    setumeisetumeisetumeisetumeisetumeisetumeisetumeisetumeisetumeisetumeisetumeis
                    setumeisetumeisetumeisetumeisetumeisetumeisetumeisetumeisetumeisetumeisetumeis
                    setumeisetumeisetumeisetumeisetumeisetumeisetumeisetumeisetumeisetumeisetumeis
                </p>
                <div style={styles.buttonContainer}>
                    <p style={styles.buttonDescription}>Reactで実装した動くデモサイト</p>
                    <a href={work.demoUrl} target="_blank" rel="noreferrer" style={styles.demoLink}>
                        View Site
                    </a>
                </div>
            </div>

            {/* Outline セクション */}
            <div style={styles.sectionContainer}>
                <div style={styles.sectionTitleContainer}>
                    <p style={styles.sectionSubtitle}>制作概要</p>
                    <h2 style={styles.sectionTitle}>OUTLINE</h2>
                </div>
                {/* 🌟 縦積みのグループコンテナ */}
                <div style={styles.outlineContainer}>
                    
                    {/* 1. クライアント：データが存在し、空文字ではない時だけ表示 */}
                    {work.outline.client && work.outline.client !== "" && (
                        <div style={styles.outlineGroup}>
                            <h4 style={styles.outlineTitle}>クライアント</h4>
                            <p style={styles.outlineContent}>{work.outline.client}</p>
                        </div>
                    )}
                    
                    {/* 2. ターゲット：データが存在し、空文字ではない時だけ表示 */}
                    {work.outline.target && work.outline.target !== "" && (
                        <div style={styles.outlineGroup}>
                            <h4 style={styles.outlineTitle}>ターゲット</h4>
                            <p style={styles.outlineContent}>{work.outline.target}</p>
                        </div>
                    )}

                    {/* 3. 課題：データが存在し、空文字ではない時だけ表示 */}
                    {work.outline.issue && work.outline.issue !== "" && (
                        <div style={styles.outlineGroup}>
                            <h4 style={styles.outlineTitle}>課題</h4>
                            <p style={styles.outlineContent}>{work.outline.issue}</p>
                        </div>
                    )}

                    {/* 4. 目的：データが存在し、空文字ではない時だけ表示 */}
                    {work.outline.purpose && work.outline.purpose !== "" && (
                        <div style={styles.outlineGroup}>
                            <h4 style={styles.outlineTitle}>目的</h4>
                            <p style={styles.outlineContent}>{work.outline.purpose}</p>
                        </div>
                    )}

                    {/* 5. 要望：データが存在し、空文字ではない時だけ表示 */}
                    {/* 💡 もしデータが "" であれば、この div の塊ごと画面から完全に消滅します */}
                    {work.outline.request && work.outline.request !== "" && (
                        <div style={styles.outlineGroup}>
                            <h4 style={styles.outlineTitle}>要望</h4>
                            <p style={styles.outlineContent}>{work.outline.request}</p>
                        </div>
                    )}

                </div>

            </div>

            {/* Concept セクション */}
            <div style={styles.sectionContainer}>
                <div style={styles.sectionTitleContainer}>
                    <p style={styles.sectionSubtitle}>コンセプト</p>
                    <h2 style={styles.sectionTitle}>CONCEPT</h2>
                </div>
                            {/* 🌟 縦積みのグループコンテナ */}
                <div style={styles.outlineContainer}>
                    
                    {/* 1. クライアント：データが存在し、空文字ではない時だけ表示 */}
                    {work.outline.client && work.outline.client !== "" && (
                        <div style={styles.outlineGroup}>
                            <h4 style={styles.outlineTitle}>コンセプト</h4>
                            <p style={styles.outlineContent}>{work.concept.main_concept}</p>
                        </div>
                    )}
                    
                    {/* 2. ターゲット：データが存在し、空文字ではない時だけ表示 */}
                    {work.outline.target && work.outline.target !== "" && (
                        <div style={styles.outlineGroup}>
                            <h4 style={styles.outlineTitle}>デザインイメージ</h4>
                            <p style={styles.outlineContent}>{work.concept.design_image}</p>
                        </div>
                    )}

                    {/* 3. 課題：データが存在し、空文字ではない時だけ表示 */}
                    {work.outline.issue && work.outline.issue !== "" && (
                        <div style={styles.outlineGroup}>
                            <h4 style={styles.outlineTitle}>フォント</h4>
                            <p style={styles.outlineContent}>{work.concept.font}</p>
                        </div>
                    )}

                    {/* 4. 目的：データが存在し、空文字ではない時だけ表示 */}
                    {work.outline.purpose && work.outline.purpose !== "" && (
                        <div style={styles.outlineGroup}>
                            <h4 style={styles.outlineTitle}>カラー</h4>
                            <p style={styles.outlineContent}>{work.outline.purpose}</p>
                        </div>
                    )}

                </div>

            </div>

            {/* data セクション */}
            <div style={styles.sectionContainer}>
                <div style={styles.sectionTitleContainer}>
                    <p style={styles.sectionSubtitle}>制作データ</p>
                    <h2 style={styles.sectionTitle}>DATA</h2>
                </div>
                            {/* 🌟 縦積みのグループコンテナ */}
                <div style={styles.outlineContainer}>

                    <div style={styles.outlineGroup}>
                        <h4 style={styles.outlineTitle}>制作時間</h4>
                        <p style={styles.outlineContent}>{work.data.creationTime}</p>
                    </div>

                    <div style={styles.outlineGroup}>
                        <h4 style={styles.outlineTitle}>ツール</h4>
                        <p style={styles.outlineContent}>{work.data.tool}</p>
                    </div>

                </div>
            </div>

            {/* 成果物へのリンクボタン */}
            <div>
                <div style={styles.buttonContainer}>
                    <p style={styles.buttonDescription}>デモサイトはこちら</p>
                    <a href={work.demoUrl} target="_blank" rel="noreferrer" style={styles.demoLink}>
                        View Site
                    </a>
                </div>
                <a href={work.figmaUrl} style={styles.figmaLink}>
                    Figmaリンク
                </a>
            </div>
            
        </div>
    );
};

const styles= {
    pageRoot: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column' as const,
        overflowX: 'hidden' as const,
        padding: '0 20px',               // ⭕ 全体に強制適用する左右の安全余白
        boxSizing: 'border-box' as const,  // ⭕ 余白を含めて100%幅を計算させ、ハミ出しを防止
    },

    // 🌟 画面いっぱいのヒーローエリアの土台（高さはパソコン時で 600px 前後がおすすめ）
    detailHeroWrapper: {
        position: 'relative' as const,
        // 親の最大幅（1200px）や左右余白を完全に突っ切って、ブラウザの端から端まで100%横断させる魔法
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        height: '600px', // ⭕ 画像を表示させたい縦幅（お好みで 500px や 70vh などに変更可）
        overflow: 'hidden' as const,
        boxSizing: 'border-box' as const,
        marginBottom: '60px',
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        position: 'absolute' as const,
        top: 0,
        left: 0,
        zIndex: 1, // ⭕ 文字（zIndex: 2）よりも後ろに配置
    },
    // 🌟 【最重要】画面いっぱいに広がり、狭くなったら勝手に切り取られる画像の設定
    heroImage: {
        width: '100%',
        height: '100%',
        
        // ⭕【ここが仕掛け！】画像を潰さずに、枠のサイズに合わせて自動で「切り取る（トリミング）」指示
        objectFit: 'cover' as const,
        
        // ⭕【ここが仕掛け！】切り取る基準点を「真ん中」にする。
        // これにより、画面が狭くなった時も、中央にある四角いモックアップが常に画面のど真ん中に見え残ります
        objectPosition: 'center center' as const,
    },
    
    // すでに実装済みのタイトルを上に重ねるための、透明な覆い（座布団）
    heroTitleOverlay: {
        position: 'absolute' as const,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        // 🌟 画像の上に文字が重なっても読めるように、ほんのり黒い薄い膜を敷く（不要なら background は消してOKです）
        //background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 50%)',
        display: 'flex',
        justifyContent: 'center', // 横軸は1200pxラインに合わせるため中央へ
        alignItems: 'flex-start' as const,
    },
    // タイトルの位置を、上のABOUT等の1200pxラインの左端とピシッと揃える内枠
    titleInnerBlock: {
        width: '100%',
        maxWidth: '1200px',
        
        // ⭕ 【最重要】paddingの左と右を「20px」に修正しました
        // これにより、画面がどれだけ細くなっても、文字だけは pageRoot の padding: '0 20px' の壁を絶対に越えなくなります
        padding: '150px 20px 0 20px', 
        
        boxSizing: 'border-box' as const,
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'flex-start' as const, // 確実に左寄せ
    },
    workTitle: {
        fontFamily: 'Hepta Slab',
        fontSize: 'clamp(32px, 5vw, 56px)', // スマホで勝手に小さくなる可変文字
        fontWeight: '900',
        //color: '#ffffff',
        margin: '10px 0 0 0',
        letterSpacing: '0.05em',
    },
    workSubtitle: {},
    tag: {
        width: '100%',
        height: '100%',
        fontSize: '18px',
        color: '#4599C4',
        whiteSpace: 'nowrap' as const, // 🌟追加：タグ内の文字（プロジェクト等）を絶対改行しない
        flexShrink: 0, // 🌟追加：画面が狭くなってもタグ自体が潰れて小さくならないように固定
    },
    range: {},
    sectionContainer: {
        width: '100%',
        maxWidth: '1200px',
        margin: '100px auto 100px auto',
        display: 'flex',
        flexDirection: 'column' as const,
        boxSizing: 'border-box' as const,
    },
    herosectionContainer: {
        width: '100%',
        maxWidth: '1200px',
        margin: '200px auto 100px auto',
        display: 'flex',
        flexDirection: 'column' as const,
        boxSizing: 'border-box' as const,
    },
    descriptionContainer: {
        width: '100%',
        maxWidth: '1200px',
        margin: '50px auto 50px auto',
        display: 'flex',
        flexDirection: 'row' as const,
        
        // ⭕ 修正：左右の並びを中央（center）に引き寄せ、縦ラインも「ど真ん中（center）」で完璧に揃える
        justifyContent: 'center',
        alignItems: 'center' as const,
        
        // 🌟 隙間（gap）を「30px」程度のほどよい幅にし、50%＋50%の計算がバグで崩れるのを完全に防御
        gap: '40px', 
        flexWrap: 'wrap' as const,
        boxSizing: 'border-box' as const,
    },
    // 🌟 修正：画面幅に合わせて自動で「勝手に改行」して収まる説明文スタイル
    description: {
        color: '#4E4E4E',
        fontSize: '15px',
        lineHeight: '1.8',
        margin: 0,
        
        // PC時は横幅の50%（半分）を維持して縮みます
        flex: '0 0 calc(50% - 20px)',
        width: '100%',
        minWidth: '320px',
        
        // 🌟【最重要】文章が枠幅に合わせて「勝手に改行」して収まるための設定
        whiteSpace: 'normal' as const,       // ⭕ 文字列を枠の右端で自然に折り返す指示
        wordBreak: 'break-word' as const,   // ⭕ 英語の長文やsetumei...といった連続した文字でも、枠を突き破らずに自動改行させる指示
        
        textAlign: 'left' as const, 
        alignSelf: 'center' as const, 
        boxSizing: 'border-box' as const,
    },
    // 🌟 右側：デモボタンのコンテナ（通常時：横幅を完全に半々の 1:1 にロックするルール）
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center' as const, // ボタンと上の文字をセンターに
        justifyContent: 'center',
        
        // ⭕ 修正：説明文と全く同じ「50%（半分）から隙間の半分（20px）を引いたサイズ」に固定して 1:1 にする
        flex: '0 0 calc(50% - 20px)',
        width: '100%',
        minWidth: '320px',
        
        alignSelf: 'center' as const, // 縦のど真ん中をキープ
        boxSizing: 'border-box' as const,
    },
    buttonDescription: {
        fontSize: '15px',
        color: '#4599C4',
        margin: '0 0 5px 0',
        textAlign: 'center' as const,
    },
    sectionTitleContainer: {},
    sectionTitle: {
        fontFamily: 'Hepta Slab',
        fontSize: '48px', 
        //letterSpacing: '0.1em', 
    },
    sectionSubtitle: {
        fontSize: '14px', 
        letterSpacing: '0.1em', 
        color: '#4599C4' 
    },
    // 全体を包むコンテナ
    outlineContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column' as const,
        margin: '20px 0',
        gap: '40px', // グループ（行）とグループの間の隙間
    },
    // 🌟 1つのタイトルと内容をまとめる縦積みのグループ
    outlineGroup: {
        display: 'flex',
        flexDirection: 'column' as const, // ⭕ 横並びではなく「上から下への縦積み」に指定
        alignItems: 'flex-start' as const, // 中身をすべて左寄せ
        gap: '6px',                       // タイトルと説明文の間の細かな隙間
        width: '100%',
    },
    // 🌟 タイトル単体のスタイル
    outlineTitle: {
        width: '150px',
        height: '35px',
        border: '3px solid #F49961',
        borderRadius: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '15px',
        color: '#F49961',
        backgroundColor: '#fff',
        margin: 0,
        letterSpacing: '0.05em',
    },
    // 内容（説明文）のスタイル
    outlineContent: {
        fontSize: '15px',
        lineHeight: '1.7',
        color: '#4E4E4E',
        margin: 0,
        textAlign: 'left' as const, // 確実に左寄せ
    },
    demoLink: {
        width: '300px',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Hepta Slab',
        fontSize: '30px',
        color: '#ffffff',
        backgroundColor: '#F49961',
        borderRadius: '60px',
        textDecoration: 'none',
        letterSpacing: '0.05em',
        transition: 'background-color 0.3s ease',
    },
    figmaLink: {},
};
