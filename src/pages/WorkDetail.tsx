import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { worksData } from '../data/worksData';

export const WorkDetail: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
                    /* 🌟 修正：携帯サイズになったら枠ごと画像の高さに合わせて自動縮小させます */
                    .responsive-sub-hero {
                        /* ⭕ absoluteの箱を消したため、height: auto にするだけで、
                           中の画像の縮小スピードと100%完全に同期して、外側の高さも綺麗に縮みます */
                        height: auto !important;
                        min-height: 300px !important; /* 安全用 */
                        
                        /* 画面いっぱいの横断（100vw）をスマホ時も維持するための指定 */
                        width: 100vw !important;
                        margin-left: calc(-50vw + 50%) !important;
                        margin-right: calc(-50vw + 50%) !important;
                    }
                    
                    /* スマホ時の画像自体のサイズ制限を解除し、画面幅ぴったりに合わせます */
                    .responsive-sub-hero img {
                        width: 100% !important;
                        height: auto !important;
                        max-height: none !important;
                    }
                    .hover-tooltip:hover span,
                    .hover-tooltip:active span {
                        opacity: 1 !important;
                        visibility: visible !important;
                        transform: translateX(-50%) translateY(0) !important;
                    }

                    .hover-tooltip span {
                        transform: translateX(-50%) translateY(5px);
                    }

                    /* 🌟 追加：携帯サイズになったら左右の2分割を解除して「縦並び」にする */
                    .responsive-concept-split {
                        flex-direction: column !important;
                        gap: 50px !important; /* スマホ時の左側（テキスト）と右側（画像）の間の縦の隙間 */
                    }
                    /* スマホ時は半々（50%）の制限を完全に解除し、画面幅100%に広げて縦に積み重ねます */
                    .responsive-concept-split > div {
                        flex: 1 1 100% !important;
                        max-width: 100% !important;
                    }
                }
            `}</style>

            {/* 🌟 画面いっぱいの画像 ＆ タイトルが重なるトップコンテナ */}
            <div style={styles.detailHeroWrapper}>
                
                {/* 🌟 画面いっぱいに広がり、狭くなったら自動で切り取られるメイン画像 */}
                {/* work.mainImage などの画像パスを src に指定してください */}
                <div style={styles.imageContainer}>
                    <img 
                        src={work.image.mainImage || "https://placeholder.com"} 
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

            {/* 🌟 クラス名を付与。外枠の inline-style（subHeroWrapper）がスマホ時の邪魔をしないようにします */}
            <div className="responsive-sub-hero" style={styles.subHeroWrapper}>
                {/* 🌟 修正：SafariやChromeで高さが0に潰れる原因となる imageContainer（absoluteの箱）を完全に撤去しました */}
                <img 
                    src={work.image.subImage || "https://placeholder.com"} 
                    alt={work.title} 
                    style={styles.subImage} 
                />
            </div>



            {/* Outline セクション */}
            <div style={styles.sectionContainer}>
                {/* 1. タイトルエリア：右横にすーっと細い棒が伸びる仕様に変更 */}
                <div style={styles.sectionTitleContainer}>
                    <p style={styles.sectionSubtitle}>制作概要</p>
                    
                    {/* 🌟 修正：文字と直線を綺麗に「横並び＆上下中央」でドッキングさせます */}
                    <div style={styles.titleWithLineFlex}>
                        <h2 style={styles.sectionTitle}>OUTLINE</h2>
                        
                        {/* 🌟 追加：これが右横に気持ちよく伸びる「細い棒（直線）」の本体です */}
                        <div style={styles.titleFlexLine} />
                    </div>
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
                    
                    {/* 🌟 修正：文字と直線を綺麗に「横並び＆上下中央」でドッキングさせます */}
                    <div style={styles.titleWithLineFlex}>
                        <h2 style={styles.sectionTitle}>CONCEPT</h2>
                        
                        {/* 🌟 追加：これが右横に気持ちよく伸びる「細い棒（直線）」の本体です */}
                        <div style={styles.titleFlexLine} />
                    </div>
                </div>
                
                <div className="responsive-concept-split" style={styles.conceptFlexWrapper}>
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

                        {/* 🌟 フォント：データが存在し、空文字ではない時だけグループごと表示 */}
                        {work.concept.font && work.concept.font !== "" && (
                            <div style={styles.outlineGroup}>
                                <h4 style={styles.outlineTitle}>フォント</h4>
                                
                                {/* 🌟 複数フォントがある場合に、上から下へ綺麗に縦積みするコンテナ */}
                                <div style={styles.fontColumnWrapper}>
                                    {/* 💡 スラッシュ（/）で区切られたフォント名を1つずつに分解してループ処理します */}
                                    {work.concept.font.split('/').map((rawFont, index) => {
                                        const fontName = rawFont.trim(); // 前後の不要なスペースを削るお守り
                                        
                                        // 💡 日本語フォントか英語フォントかで、プレビューする短文を自動で切り替える賢い処理
                                        // フォント名に「Noto」「Mincho」「Gothic」「明朝」などが含まれていたら日本語にします
                                        const isJapanese = /Noto|Sans|Gothic|Mincho|明朝|ゴシック|ヒラギノ/i.test(fontName);
                                        const previewText = isJapanese ? "デザイン" : "The quick fox";

                                        return (
                                            <div key={index} style={styles.fontTagCard}>
                                                {/* 🌟 左側：文字サイズを大きく確保した、フォントの個性が一目でわかる短文プレビュー */}
                                                <span style={{ ...styles.fontPreviewText, fontFamily: fontName }}>
                                                    {previewText}
                                                </span>
                                                
                                                {/* 🌟 右側：フォント名（少し控えめに配置してプレビューを引き立たせます） */}
                                                <span style={styles.fontNameText}>{fontName}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}



                        {/* 4. 目的：データが存在し、空文字ではない時だけ表示 */}
                        {work.concept.colors && work.concept.colors.length > 0 && (
                        <div style={styles.outlineGroup}>
                            <h4 style={styles.outlineTitle}>カラー</h4>
                            <div style={styles.colorRowWrapper}>
                                {work.concept.colors.map((color, index) => (
                                    <div 
                                        key={index}
                                        className="hover-tooltip"
                                        style={{
                                            ...styles.colorSquareCard,
                                            backgroundColor: color,
                                        }}
                                    >
                                        <span style={styles.tooltipText}>{color}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        )}

                    </div>

                    {/* 👉 右側：【新設】コンセプトボード欄（アスペクト比を保ったまま綺麗に収まります） */}
                    <div style={styles.boardContainer}>
                        <h4 style={styles.outlineTitle}>コンセプトボード</h4>
                        <div style={styles.boardImageFrame}>
                            <img 
                                src={work.concept.boardImage || "https://placeholder.com"} 
                                alt="Concept Board" 
                                style={styles.boardImage} 
                            />
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* data セクション */}
            <div style={styles.sectionContainer}>
                {/* 1. タイトルエリア：右横にすーっと細い棒が伸びる仕様に変更 */}
                <div style={styles.sectionTitleContainer}>
                    <p style={styles.sectionSubtitle}>制作データ</p>
                    
                    {/* 🌟 修正：文字と直線を綺麗に「横並び＆上下中央」でドッキングさせます */}
                    <div style={styles.titleWithLineFlex}>
                        <h2 style={styles.sectionTitle}>DATA</h2>
                        
                        {/* 🌟 追加：これが右横に気持ちよく伸びる「細い棒（直線）」の本体です */}
                        <div style={styles.titleFlexLine} />
                    </div>
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
        
        // ❌ Chromeの表示・ホバー計算を強制遮断する原因のため、この1行を削除
        // overflowX: 'hidden' as const, 
        
        padding: '0 20px',               
        boxSizing: 'border-box' as const,  
    },


    // 🌟 画面いっぱいのヒーローエリアの土台（高さはパソコン時で 600px 前後がおすすめ）
    detailHeroWrapper: {
        position: 'relative' as const,
        // 親の最大幅（1200px）や左右余白を完全に突っ切って、ブラウザの端から端まで100%横断させる魔法
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        height: '800px', // ⭕ 画像を表示させたい縦幅（お好みで 500px や 70vh などに変更可）
        overflow: 'hidden' as const,
        boxSizing: 'border-box' as const,
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
        backgroundColor: '#ffffff',
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
        margin: '100px auto',
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
    subHeroWrapper: {
        position: 'relative' as const,
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        height: '500px', // PC時は500px固定
        overflow: 'hidden' as const,
        boxSizing: 'border-box' as const,
        backgroundColor: '#ffffff',
        // 🌟 追加：中の画像を上下左右のど真ん中に配置する設定
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    // 🌟 修正：100%全体を縮小させ、スマホ時に高さが潰れるのを防ぐ写真ルール
    subImage: {
        // ⭕ 修正：親の500pxの枠に対して、縦横比を崩さず最大サイズで収まるように設定
        maxWidth: '100%',
        maxHeight: '100%',
        width: 'auto',
        height: 'auto',
        objectFit: 'contain' as const,
        boxSizing: 'border-box' as const,
    },
    sectionContainer: {
        width: '100%',
        maxWidth: '1200px',
        margin: '100px auto 100px auto',
        display: 'flex',
        flexDirection: 'column' as const,
        boxSizing: 'border-box' as const,
    },
    
    // 🌟 新設：左右を分割するFlexbox横並びレール
    conceptFlexWrapper: {
        display: 'flex',
        flexDirection: 'row' as const,
        justifyContent: 'space-between',
        alignItems: 'flex-start' as const, // 上端でピシッと高さを揃える
        gap: '60px',                      // 左右のエリアの間のほどよい隙間
        width: '100%',
        margin: '20px 0',
        boxSizing: 'border-box' as const,
    },
    
    // タイトルセクション全体の囲み（元の設定を維持、あるいは上下の余白を調整）
    sectionTitleContainer: {
        width: '100%',
        marginBottom: '30px', // コンセプトのコンテンツとの間の心地よい隙間
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'flex-start' as const,
    },
    
    // 🌟 新設：タイトル文字と右横の直線を綺麗にドッキングさせるFlexコンテナ
    titleWithLineFlex: {
        display: 'flex',
        flexDirection: 'row' as const,
        alignItems: 'center' as const, // ⭕ 文字の縦の中心と、棒の縦の中心をピシッと一直線に揃える指示
        width: '100%',                 // 横幅を100%いっぱいに広げる
        gap: '24px',                   // 🌟 CONCEPT という文字と、棒のスタート位置の間の心地よい隙間
    },
    // 🌟 新設：右横にすーっと伸びる細い直線のデザインルール
    titleFlexLine: {
        // ⭕【ここが最大の仕掛け！】
        // 文字が使った残りの横幅のスペースを「100%すべて使い切って右端まで自動で伸びなさい」という命令
        flex: 1, 
        
        // ⭕ 線の太さ（1px にすると繊細でプロっぽい洗練された空気感が出ます。1.5px や 2px に太くしてもOKです）
        height: '1px', 
        
        // ⭕ 線のカラー（あなたのブランドカラーのオレンジに指定。#4599C4の水色にしても非常に映えます）
        backgroundColor: '#4599C4', 
        
        borderRadius: '1px', // 念のため端を滑らかにするお守り
        opacity: 0.8,        // ほんのり透けさせて上品に（不要なら削除して100%くっきりでOKです）
    },
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
    // 🌟 修正：左側テキストエリア（PC時は全体の50%から隙間の半分を引いたサイズに固定）
    outlineContainer: {
        flex: '0 0 calc(50% - 30px)',
        width: '100%',
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '40px', 
        boxSizing: 'border-box' as const,
    },
    
    // 🌟 新設：右側コンセプトボードエリア（左側と完璧に1:1の横幅を死守）
    boardContainer: {
        flex: '0 0 calc(50% - 30px)',
        width: '100%',
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '6px', // 「コンセプトボード」というタイトルと画像枠の間の隙間
        boxSizing: 'border-box' as const,
    },
    // ボード画像を包むおしゃれな枠（デザインはお好みで調整してください）
    boardImageFrame: {
        width: '100%',
        borderRadius: '12px',
        overflow: 'hidden' as const,
        boxShadow: '0 4px 20px rgba(0,0,0,0.05), inset 0 0 0 1px rgba(0,0,0,0.08)',
        backgroundColor: '#ffffff',
        marginTop: '4px',
    },
    // ボード画像自体：絶対に形を崩さず（トリミングせず）100%縮小表示するcontain仕様
    boardImage: {
        width: '100%',
        height: 'auto',
        display: 'block' as const,
    },
    // 1つのタイトルと内容をまとめるグループ（既存を維持）
    outlineGroup: {
        display: 'flex',
        flexDirection: 'column' as const, 
        alignItems: 'flex-start' as const, 
        gap: '6px',                       
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
    // 🌟 追加：フォントタグを綺麗に配置するコンテナ（スマホ時は自動で折り返します）
    fontColumnWrapper: {
        display: 'flex',
        flexDirection: 'column' as const, // ⭕ 縦並び（縦積み）を指定
        gap: '10px',                     // カードとカードの間の縦の隙間
        width: '100%',
        marginTop: '4px',
        boxSizing: 'border-box' as const,
    },
    fontTagCard: {
        display: 'flex',
        flexDirection: 'column' as const, // ⭕ カードの内部も「上が短文、下がフォント名」の美しい縦並びに
        alignItems: 'flex-start' as const, // すべて左寄せ
        justifyContent: 'center',
        width: '100%',
        maxWidth: '500px',                // 画面幅が広いPC時も広がりすぎない安心の最大幅
        backgroundColor: '#ffffff',       // クリーンな白背景
        padding: '16px 20px',             // 上下左右にしっかり余白を取って高級感を演出
        borderRadius: '12px',             // 今っぽい少し丸みのある角丸
        // 薄い色が背景に溶けないための繊細な輪郭線とごくわずかなシャドウ
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.02)', 
        boxSizing: 'border-box' as const,
        gap: '6px',                       // 短文とフォント名の間の細かな隙間
    },
    fontPreviewText: {
        fontSize: '22px',                 // ⭕ 小さくて見えない問題を解決する特大サイズ
        fontWeight: 'normal',
        color: '#4599C4',                 // あなたのブランドの水色（お好みで#4E4E4Eなどの文字色にしても映えます）
        margin: 0,
        lineHeight: '1.2',
        width: '100%',
        whiteSpace: 'nowrap' as const,    // 途中で不自然に改行されるのを防止
        overflow: 'hidden' as const,
        textOverflow: 'ellipsis' as const, // 万が一スマホ幅で溢れたら末尾を「...」にする安全弁
    },
    fontNameText: {
        fontFamily: 'Hepta Slab, sans-serif',
        fontSize: '12px',                 // プレビューを引き立てるために一回り繊細なフォントサイズに
        fontWeight: 'bold',
        color: '#A0A0A0',                 // 主張しすぎない上品なライトグレー
        margin: 0,
        letterSpacing: '0.05em',
    },
    colorRowWrapper: {
        display: 'flex',
        flexDirection: 'row' as const,
        flexWrap: 'nowrap' as const,    
        justifyContent: 'flex-start',   
        gap: '10px',                    
        width: '100%',
        marginTop: '4px',               
        boxSizing: 'border-box' as const,
        transform: 'translateZ(0)', 
    },
    colorSquareCard: {
        width: '45px',                  
        aspectRatio: '1 / 1',           
        borderRadius: '6px',            
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.08)', 
        flexShrink: 1,                  
        minWidth: '10px',               
        boxSizing: 'border-box' as const,
        position: 'relative' as const, 
    },
    tooltipText: {
        position: 'absolute' as const,
        bottom: '125%',               
        left: '50%',
        transform: 'translateX(-50%)', 
        backgroundColor: '#333333',   
        color: '#ffffff',             
        fontSize: '11px',             
        fontFamily: 'Hepta Slab',
        padding: '5px 8px',           
        borderRadius: '4px',          
        whiteSpace: 'nowrap' as const,
        zIndex: 10,                   
        opacity: 0,
        visibility: 'hidden' as const,
        transition: 'opacity 0.2s ease, transform 0.2s ease', 
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
