import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { worksData } from '../data/worksData';

export const WorkDetail: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    // URLの末尾（/works/1 なら "1"）を取得
    const { id } = useParams<{ id: string }>();
  
    // データの中から、IDが一致する作品を1つ検索
    const work = worksData.find((w) => w.id === Number(id));

    // 💡 現在の作品データ（work）のIDをもとに、1つ前と1つ後のデータを自動で検索します
    const currentId = Number(work.id);
    const prevWork = worksData.find(w => w.id === currentId - 1);
    const nextWork = worksData.find(w => w.id === currentId + 1);


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
                    /* 🌟 統合：携帯サイズになったらすべてのジグザグ行を一律で「通常の縦積み」にする */
                    .responsive-zigzag-row {
                        flex-direction: column !important;
                        gap: 24px !important;
                    }
                    .responsive-zigzag-row > div {
                        flex: 1 1 100% !important;
                        max-width: 100% !important;
                    }
                    /* 🌟 追加：携帯サイズになったら各URLグループを縦並びに変形 */
                    .responsive-url-row {
                        flex-direction: column !important;
                        align-items: flex-start !important; /* スマホ時は左揃え */
                        gap: 16px !important; /* テキストとすぐ真下のボタンの間の心地よい隙間 */
                    }
                    /* スマホ時はボタンの横幅を100%いっぱいに広げて押しやすくします */
                    .responsive-url-row > a {
                        width: 100% !important;
                        max-width: 100% !important;
                    }
                    .responsive-camp-row {
                        flex-direction: column !important;
                        height: auto !important; /* ⭕ スマホ時は450pxの高さ制限を解除 */
                        gap: 32px !important; 
                    }
                    /* スマホ時は 2:1 の制限を完全に解除し、画面幅に合わせて自動で縮小配置にします */
                    .responsive-camp-row > div {
                        flex: 1 1 auto !important;
                        width: 100% !important;
                        max-width: 450px !important; /* スマホ画面で横に広がりすぎない安心のロック */
                        align-self: center !important;
                    }
                    /* スマホ時は画像の「高さ100%」の縛りを解き、横幅100%基準の自動可変に変形させます */
                    .responsive-camp-row img {
                        width: 100% !important;
                        height: auto !important;
                    }
                    /* 🌟 追加：携帯サイズになったら作品リンクコーナーを縦並びに変形 */
                    .responsive-nav-row {
                        flex-direction: column !important;
                        gap: 40px !important; /* スマホ時のprevカードとnextカードの間の隙間 */
                    }
                    /* スマホ時は半々の制限を完全に解除し、画面幅100%に広げます */
                    .responsive-nav-row > a {
                        flex: 1 1 100% !important;
                        max-width: 100% !important;
                    }
                    /* 🌟 スマホ時のみ：右側（next）の文字も一律で「左寄せ」に揃えて視線を整流します */
                    .responsive-nav-row > a:last-of-type > div {
                        justify-content: flex-start !important;
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
                        <p style={styles.roleText}>{work.role}</p>
                    </div>
                </div>
            </div>

      
            

            {/* 紹介文 セクション */}
            <div  className="responsive-description-row" style={styles.descriptionContainer}>
                {/* 🌟 修正：説明文エリアの左側（または右側）の塊の中に配置します */}
                <div style={styles.descriptionBlock}>
                    
                    {/* 🌟 新設：説明文の上に凛と佇む、詳細な案件名 */}
                    {work.detailTitle && work.detailTitle !== "" && (
                        <h3 style={styles.detailTitleText}>
                            {work.detailTitle}
                        </h3>
                    )}

                    {/* 🌟 既存：データから引っ張ってくる説明文（あなたの完璧なスタイルを100%維持） */}
                    {work.description && work.description !== "" && (
                        <p style={styles.description}>
                            {work.description}
                        </p>
                    )}
                    
                </div>


                {work.url.demo && work.url.demo !== "" && (
                    <div style={styles.buttonContainer}>
                        <p style={styles.buttonDescription}>Reactで実装した動くデモサイト</p>
                        <a href={work.url.demo} target="_blank" rel="noreferrer" style={styles.demoLink}>
                            View Site
                        </a>
                    </div>
                )}
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
                                src={work.concept.boardImage || "https://placehold.jp/1600x1200.png"} 
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

            {/* 🌟 1. PROCESS & NOTES セクション */}
            {work.process && work.process.length > 0 && (
                <div style={styles.sectionContainer}>
                    <div style={styles.sectionTitleContainer}>
                        <p style={styles.sectionSubtitle}>制作錯誤</p>
                        <div style={styles.titleWithLineFlex}>
                            <h2 style={styles.sectionTitle}>PROCESS & NOTES</h2>
                            <div style={styles.titleFlexLine} />
                        </div>
                    </div>

                    <div style={styles.zigzagSectionWrapper}>
                        {work.process.map((step, index) => (
                            /* 🌟 共通のクラス名とスタイル名を利用 */
                            <div 
                                key={index} 
                                className="responsive-zigzag-row"
                                style={{
                                    ...styles.zigzagRowGroup,
                                    flexDirection: index % 2 === 0 ? 'row' as const : 'row-reverse' as const,
                                }}
                            >
                                <div style={styles.zigzagTextBlock}>
                                    <h3 style={styles.zigzagStepTitle}>{step.title}</h3>
                                    <p style={styles.zigzagStepContent}>{step.description}</p>
                                </div>
                                <div style={styles.zigzagImageBlock}>
                                    <img src={step.image　　 || "https://placehold.jp/1200x800.png"} alt={step.title} style={styles.zigzagImage} loading="lazy" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* 🌟 2. POINT セクション */}
            {work.point && work.point.length > 0 && (
                <div style={styles.sectionContainer}>
                    <div style={styles.sectionTitleContainer}>
                        <p style={styles.sectionSubtitle}>こだわったポイント</p>
                        <div style={styles.titleWithLineFlex}>
                            <h2 style={styles.sectionTitle}>POINT</h2>
                            <div style={styles.titleFlexLine} />
                        </div>
                    </div>

                    <div style={styles.zigzagSectionWrapper}>
                        {work.point.map((item, index) => (
                            /* 🌟 まったく同じ共通のクラス名とスタイル名をそのまま再利用！ */
                            <div 
                                key={index} 
                                className="responsive-zigzag-row"
                                style={{
                                    ...styles.zigzagRowGroup,
                                    flexDirection: index % 2 === 0 ? 'row' as const : 'row-reverse' as const,
                                }}
                            >
                                <div style={styles.zigzagTextBlock}>
                                    <h3 style={styles.zigzagStepTitle}>{item.title}</h3>
                                    <p style={styles.zigzagStepContent}>{item.description}</p>
                                </div>
                                <div style={styles.zigzagImageBlock}>
                                    <img src={item.image　 || "https://placehold.jp/1200x800.png"} alt={item.title} style={styles.zigzagImage} loading="lazy" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}


            {/* URL セクション：データが存在する項目だけを表示 */}
            {((work.url?.demo && work.url.demo !== "") || 
              (work.url?.figma && work.url.figma !== "") || 
              (work.url?.github && work.url.github !== "")) && (
                <div style={styles.sectionContainer}>
                    {/* タイトルエリア（制作データの形を完全にコピー） */}
                    <div style={styles.sectionTitleContainer}>
                        <p style={styles.sectionSubtitle}>関連リンク</p>
                        <div style={styles.titleWithLineFlex}>
                            <h2 style={styles.sectionTitle}>URL</h2>
                            <div style={styles.titleFlexLine} />
                        </div>
                    </div>

                    {/* 縦積みのグループコンテナ */}
                    <div style={styles.outlineContainer}>

                        {/* 1. デモサイト：データがある場合のみ出現 */}
                        {work.url?.demo && work.url.demo !== "" && (
                            <div className="responsive-url-row" style={styles.urlRowGroup}>
                                <div style={styles.outlineGroup}>
                                    <h4 style={styles.outlineTitle}>デモサイト</h4>
                                    <p style={styles.outlineContent}>{work.url.demo}</p>
                                </div>
                                <a href={work.url.demo} target="_blank" rel="noreferrer" style={styles.urlLinkBtn}>
                                    View Site
                                </a>
                            </div>
                        )}

                        {/* 2. Figma：データがある場合のみ出現 */}
                        {work.url?.figma && work.url.figma !== "" && (
                            <div className="responsive-url-row" style={styles.urlRowGroup}>
                                <div style={styles.outlineGroup}>
                                    <h4 style={styles.outlineTitle}>Figma</h4>
                                    <p style={styles.outlineContent}>{work.url.figma}</p>
                                </div>
                                <a href={work.url.figma} target="_blank" rel="noreferrer" style={styles.urlLinkBtn}>
                                    Open Figma
                                </a>
                            </div>
                        )}

                        {/* 3. GitHub：データがある場合のみ出現 */}
                        {work.url?.github && work.url.github !== "" && (
                            <div className="responsive-url-row" style={styles.urlRowGroup}>
                                <div style={styles.outlineGroup}>
                                    <h4 style={styles.outlineTitle}>GitHub</h4>
                                    <p style={styles.outlineContent}>{work.url.github}</p>
                                </div>
                                <a href={work.url.github} target="_blank" rel="noreferrer" style={styles.urlLinkBtn}>
                                    View Code
                                </a>
                            </div>
                        )}

                    </div>
                </div>
            )}

            {/* 🌟 デザインカンプセクション（画面の端から端まで余白なく横断するチェック柄） */}
            <div style={styles.campSectionWrapper}>
                <div style={styles.campInnerContainer}>
                    
                    {/* メインエリア：PC時は横並び半々、携帯サイズ時は中央寄せ縦並びに可変 */}
                    <div className="responsive-camp-row" style={styles.campMainRow}>
                        
                        {/* 左側：パソコン版のデザインカンプ（トリミングせずそのまま綺麗に縮小） */}
                        <div style={styles.campImageBlockPC}>
                            <img 
                                src={work.image.designcampPC || "https://placehold.jp/1920x5000.png"} 
                                alt="PC Design Camp" 
                                style={styles.campImage} 
                            />
                        </div>

                        {/* 右側：携帯版のデザインカンプ（トリミングせずそのまま綺麗に縮小） */}
                        <div style={styles.campImageBlockSP}>
                            <img 
                                src={work.image.designcampMobile || "https://placehold.jp/1024x3000.png"} 
                                alt="SP Design Camp" 
                                style={styles.campImage} 
                            />
                        </div>

                    </div>
                </div>
            </div>


            {/* 🌟 修正：最初と最後を自動判別し、1つの時はど真ん中に配置するナビゲーション */}
            <div style={styles.navSectionContainer}>
                
                <div className="responsive-nav-row" style={{
                    ...styles.navMainRow,
                    /* 💡【ここが最大の仕掛け！】
                       もし「前の作品」か「次の作品」のどちらか片方しかない場合は、
                       左右均等配置（space-between）ではなく、強制的に「画面のど真ん中（center）」に引き寄せます */
                    justifyContent: (!prevWork || !nextWork) ? 'center' : 'space-between',
                }}>
                    
                    {/* 👈 左側：前の作品（Prev）グループ：データが存在する場合のみ出力 */}
                    {prevWork && (
                        <Link to={`/works/${prevWork.id}`} style={styles.navCardLink}>
                            <div style={styles.navCardHeaderLeft}>
                                <span style={styles.arrowText}>← prev</span>
                            </div>
                            <div style={styles.navImageFrame}>
                                <img src={prevWork.image.mainImage || "https://placehold.jp/512x288.png"} alt="Previous Work" style={styles.navImage} />
                            </div>
                        </Link>
                    )}

                    {/* 👉 右側：次の作品（Next）グループ：データが存在する場合のみ出力 */}
                    {nextWork && (
                        <Link to={`/works/${nextWork.id}`} style={styles.navCardLink}>
                            <div style={{
                                ...styles.navCardHeaderRight,
                                /* 💡【ここが隠し味！】
                                   もし最初の作品で「next →」が1つだけでど真ん中に来た時は、
                                   文字が右端にあると不格好なので、文字も一緒に左端（通常位置）に揃えます */
                                justifyContent: !prevWork ? 'flex-start' : 'flex-end',
                            }}>
                                <span style={styles.arrowText}>next →</span>
                            </div>
                            <div style={styles.navImageFrame}>
                                <img src={nextWork.image.mainImage || "https://placehold.jp/512x288.png"} alt="Next Work" style={styles.navImage} />
                            </div>
                        </Link>
                    )}

                </div>

                {/* 下部ど真ん中：All works ボタン（変更なし） */}
                <div style={styles.allWorksBtnWrapper}>
                    <Link to="/works" style={styles.allWorksBtn}>
                        All Works
                    </Link>
                </div>

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
    roleText: {
        //fontSize: '13px',
        color: '#F49961',
        margin: 0,
        letterSpacing: '0.05em',
    },
    tag: {
        width: '100%',
        height: '100%',
        fontSize: '18px',
        color: '#4599C4',
        whiteSpace: 'nowrap' as const, // 🌟追加：タグ内の文字（プロジェクト等）を絶対改行しない
        flexShrink: 0, // 🌟追加：画面が狭くなってもタグ自体が潰れて小さくならないように固定
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
    // 🌟 新設：詳細タイトルと説明文を縦にきれいに並べ、PC時に横幅の50%で縮ませるための親の箱
    descriptionBlock: {
        flex: '0 0 calc(50% - 20px)',
        width: '100%',
        minWidth: '320px',
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '14px',                       // 🌟 詳細タイトルと説明文の間の細かな心地よい隙間
        alignSelf: 'center' as const,
        boxSizing: 'border-box' as const,
    },

    // 🌟 新設：説明文の上に載せる詳細な案件名のデザインルール
    detailTitleText: {
        fontSize: '18px',                  // 説明文（15px）より一回り大きくして視認性を確保
        fontWeight: 'bold',
        color: '#4599C4',                  // 意思を感じるシックな黒
        margin: 0,
        lineHeight: '1.4',
        textAlign: 'left' as const,
        letterSpacing: '0.03em',
        wordBreak: 'break-word' as const,  // ⭕ 長い名前が来ても絶対に右端を突き破らないお守り
    },

    // 🌟 修正：あなたの完璧な設定から、横幅を制御するflex関連のみを上の親箱（descriptionBlock）へお引越しさせました
    description: {
        color: '#4E4E4E',
        fontSize: '15px',
        lineHeight: '1.8',
        margin: 0,
        width: '100%',
        whiteSpace: 'normal' as const,       
        wordBreak: 'break-word' as const,   
        textAlign: 'left' as const, 
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

    // 🌟 統合：ジグザグレイアウト用の共通スタイル一式
    zigzagSectionWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '100px', // グループ同士の間のゆったりとした隙間
        marginTop: '40px',
        boxSizing: 'border-box' as const,
    },
    zigzagRowGroup: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center' as const,
        gap: '60px',
        boxSizing: 'border-box' as const,
    },
    zigzagTextBlock: {
        flex: '0 0 calc(50% - 30px)',
        width: '100%',
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '12px',
        boxSizing: 'border-box' as const,
    },
    zigzagStepTitle: {
        fontFamily: 'Hepta Slab, sans-serif',
        fontSize: '22px',
        fontWeight: 'bold',
        color: '#F49961',
        margin: 0,
        letterSpacing: '0.05em',
    },
    zigzagStepContent: {
        fontSize: '15px',
        lineHeight: '1.8',
        color: '#4E4E4E',
        margin: 0,
        textAlign: 'left' as const,
        whiteSpace: 'normal' as const,
        wordBreak: 'break-word' as const,
    },
    zigzagImageBlock: {
        flex: '0 0 calc(50% - 30px)',
        width: '100%',
        boxSizing: 'border-box' as const,
    },
    zigzagImage: {
        width: '100%',
        height: 'auto',
        display: 'block' as const,
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.04), inset 0 0 0 1px rgba(0,0,0,0.06)',
    },

    urlRowGroup: {
        display: 'flex',
        flexDirection: 'row' as const,
        justifyContent: 'space-between',
        alignItems: 'center' as const, // ⭕ ボタンと左のテキストの高さを中央で完璧に揃える
        width: '100%',
        boxSizing: 'border-box' as const,
    },
    // 🌟 新設：洗練されたブランドカラーのリンクボタンデザイン
    urlLinkBtn: {
        fontFamily: 'Hepta Slab',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '180px',           // ボタンのスマートな横幅
        height: '45px',           // カラーやフォントのカプセルと揃えた黄金比の45px
        backgroundColor: '#F49961', // ブランドカラーのオレンジ
        color: '#ffffff',
        fontWeight: 'bold',
        textDecoration: 'none',   // 下線を消す
        borderRadius: '23px',     // 完全な丸型カプセル
        fontSize: '14px',
        letterSpacing: '0.05em',
        transition: 'background-color 0.3s ease, opacity 0.3s ease',
        boxSizing: 'border-box' as const,
        flexShrink: 0,            // ボタンが潰れるのを防止
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

    campSectionWrapper: {
        width: '100vw',               // ⭕ 親を無視してブラウザ画面の横幅100%いっぱいに広げる
        marginLeft: 'calc(-50vw + 50%)', // ⭕ 【最重要】画面の左端まで強制的に引っ張る計算式
        marginRight: 'calc(-50vw + 50%)',// ⭕ 【最重要】画面の右端まで強制的に引っ張る計算式
        marginTop: '150px',
        marginBottom: '150px',
        padding: '80px 20px',          // 🌟 上下の余白を少し贅沢に広げてカンプの特別感を演出
        backgroundImage: `
            linear-gradient(to right, #C4E9F2 1px, transparent 1px),
            linear-gradient(to bottom, #C4E9F2 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',   // ABOUTセクションと完全にシンクロするマスの大きさ
        backgroundColor: 'transparent',
        boxSizing: 'border-box' as const,
    },
    
    // 内側の最大幅コンテナ：ABOUTやお持ちの1200pxラインにピシッと合わせる枠
    campInnerContainer: {
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        boxSizing: 'border-box' as const,
        display: 'flex',
        flexDirection: 'column' as const,
    },
    
    // 🌟 PC時の横並び・上下ど真ん中揃えを設定するレール
    campMainRow: {
        display: 'flex',
        flexDirection: 'row' as const,
        justifyContent: 'center', 
        
        // ⭕【最重要】ここにカンプを表示させたい「高さ」の限界線を指定します
        // 450pxの中に2枚の画像が上下余白なくジャストサイズで収まるようになります（お好みで 500px 等に変更可）
        height: 'auto', 
        
        gap: '40px', // カンプ同士の横のすっきりとした隙間
        width: '100%',
        boxSizing: 'border-box' as const,
    },
    
    // パソコン版・携帯版の各画像を包む、横幅を完璧に1:1（半々）にするための箱
    campImageBlockPC: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box' as const,
        
        // ⭕【ここが最大の仕掛け】
        // 全体の幅配分を「2（広く取る）」に完全強制ロックするTypeScript専用の厳格な記述です
        flex: '2 1 0%' as const, 
    },
    campImageBlockSP: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box' as const,
        
        // ⭕【ここが最大の仕掛け】
        // 全体の幅配分を「1（スマートに取る）」に完全強制ロックするTypeScript専用の厳格な記述です
        flex: '1 1 0%' as const, 
    },

    // 🌟 以前大成功した、アスペクト比を崩さず絶対に切り取らずにそのまま綺麗に縮小する画像ルール
    campImage: {
        // ⭕【ここが最大のキモ！】
        // 横幅（width）をあえて auto にし、高さ（height）を「100%」に完全強制ロックします！
        // これにより、左右の画像が親の450pxという高さにピタッと吸い付き、1ミリの狂いもなく高さが一直線に揃います
        width: 'auto',
        height: '100%',
        
        maxWidth: '100%',
        objectFit: 'contain' as const, // 左右が切り取られるのを100%防御
        borderRadius: '12px',          
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)', 
        boxSizing: 'border-box' as const,
    },
        
    // ナビゲーションセクション全体の包み箱
    navSectionContainer: {
        width: '100%',
        maxWidth: '1200px',
        margin: '100px auto 100px auto',
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '60px', // 上のカード群と下のAll worksボタンの間の隙間
        boxSizing: 'border-box' as const,
    },
    
    // 左右のカードを横並びにするレール
    navMainRow: {
        display: 'flex',
        flexDirection: 'row' as const,
        justifyContent: 'space-between',
        alignItems: 'flex-start' as const,
        gap: '40px', // 左右カードの間の心地よい隙間
        width: '100%',
        boxSizing: 'border-box' as const,
    },
    
    // 🌟 グループ全体を1つの大きなリンクボタンにするためのカード設定
    navCardLink: {
        flex: '0 0 calc(50% - 20px)', // PC時は完璧な 1 : 1（半々）に固定
        width: '100%',
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '12px',                  // 文字とすぐ下の画像の間の細かな隙間
        textDecoration: 'none',       // リンクの下線を消す
        boxSizing: 'border-box' as const,
        cursor: 'pointer',
    },
    
    // 👈 左のカード用：文字を「一番左端」に寄せるヘッダー
    navCardHeaderLeft: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start', // 左寄せ
    },
    
    // 👉 右のカード用：文字を「一番右端」に寄せるヘッダー
    navCardHeaderRight: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',   // 右寄せ
    },
    
    // 矢印テキスト単体のスタイル（装飾なし・文字だけ・いつもの青色）
    arrowText: {
        fontFamily: 'Hepta Slab, sans-serif',
        fontSize: '15px',
        fontWeight: 'bold',
        color: '#4599C4', // いつもの青色
        margin: 0,
        letterSpacing: '0.05em',
    },
    
    // カード内の画像を包むフレーム
    navImageFrame: {
        width: '100%',
        borderRadius: '12px', // 他のセクションと揃えた美しい角丸
        overflow: 'hidden' as const,
        boxShadow: '0 4px 20px rgba(0,0,0,0.03), inset 0 0 0 1px rgba(0,0,0,0.06)',
        backgroundColor: '#ffffff',
    },
    
    // 画像自体（アスペクト比を保って100%きれいにフィット縮小）
    navImage: {
        width: '100%',
        height: 'auto',
        display: 'block' as const,
        transition: 'transform 0.3s ease', // マウスを乗せた時にフワッと動かす予備線
    },
    
    // 下部：ボタンを中央配置にするためのラッパー
    allWorksBtnWrapper: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center', // ⭕ ど真ん中に配置
        alignItems: 'center',
    },
    
    allWorksBtn: {
        fontFamily: 'Hepta Slab',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '200px',    
        height: '60px',  
        backgroundColor: '#ffffff',
        color: '#4599C4',           
        fontSize: '15px',
        letterSpacing: '0.05em',
        textDecoration: 'none',
        borderRadius: '30px',       // カプセル型
        
        // ⭕ 【最重要】ご指定通りの「3pxの青い太枠」を完全再現
        border: '3px solid #4599C4', 
        
        boxSizing: 'border-box' as const,
        transition: 'background-color 0.3s ease, color 0.3s ease',
    }

};
