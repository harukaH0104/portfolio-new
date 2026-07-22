import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { worksData } from "../data/worksData";

export const WorksList: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<'ALL' | 'WEB' | 'GRAPHIC'>('ALL');

    const filteredWorks = worksData.filter((work) => {
        if (activeFilter === 'ALL') return true; // ALLの時は無条件ですべて表示
        
        // ⭕【ここがキモ！】work.typeの中に「WEB」や「GRAPHIC」が含まれているか（includes）で判定
        return work.type.includes(activeFilter); 
    });
    

    return (
        <div style={styles.sectionContainerPageRoot}>
            <div style={styles.sectionInnerContainer}>
                {/* 最上部：スマホ時のはみ出しバグを100%粉砕するレスポンシブCSS */}
                <style>{`
                    @media (max-width: 580px) {
                        /* 1. スマホ時は480pxの最小幅ロックを解除し、画面幅いっぱいの縦1列に強制フィット */
                        .responsive-works-grid {
                            grid-template-columns: 1fr !important;
                            row-gap: 40px !important; /* スマホ用に上下の隙間を少し引き締め */
                        }
                        /* 2. スマホ時はタグとタイトルが横並びだと窮屈になるため、縦並びに変形 */
                        .responsive-title-line {
                            flex-direction: column !important;
                            align-items: flex-start !important;
                            gap: 10px !important;
                        }
                    }
                `}</style>

                {/* セクションタイトル */}
                <div style={styles.titleContainer}>
                    <p style={styles.contentSubtitle}>制作したもの</p>
                    <h1 style={styles.contentTitle}>WORKS</h1>
                </div>

                {/* 🌟 追加：洗練されたソート機能のタブメニューエリア */}
                <div style={styles.filterMenuWrapper}>
                    {(['ALL', 'WEB', 'GRAPHIC'] as const).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveFilter(tab)}
                            style={{
                                ...styles.filterTabBtn,
                                // 現在選ばれているタブだけ、いつもの青色背景・白文字に反転させる
                                backgroundColor: activeFilter === tab ? '#4599C4' : '#ffffff',
                                color: activeFilter === tab ? '#ffffff' : '#4599C4',
                            }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* 🛠️ 無限対応型：最大幅のないフル画面グリッドコンテナ */}
                {/* 🌟 修正：スマホ用CSSと紐付けるため className="responsive-works-grid" を追加 */}
                <div className="responsive-works-grid" style={styles.worksGrid}>
                    {/* 🌟 修正：worksData ではなく、絞り込まれた filteredWorks を展開します */}
                    {filteredWorks.map((work) => (
                        <Link to={`/works/${work.id}`} key={work.id} style={styles.workCard}>
                            
                            {/* 1. メイン画像 */}
                            <div style={styles.imageArea}>
                                <div style={styles.imagePlaceholder}>
                                    [ {work.title} Image ]
                                </div>
                            </div>

                            {/* 2. タグ と タイトル の横並び */}
                            {/* 🌟 修正：スマホ時に縦並び中央寄せにするため className を追加 */}
                            <div className="responsive-title-line" style={styles.titleLine}>
                                <div style={styles.tagGrid}>{work.tag}</div>
                                <h2 style={styles.workTitle}>{work.title}</h2>
                            </div>

                            {/* 3. range */}
                            <p style={styles.roleText}>{work.role}</p>

                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

const styles = {
    // 🌟 修正（新設）：Homeの pageRoot と完全に同じ挙動にする最外枠スタイル
    sectionContainerPageRoot: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column' as const,
        overflowX: 'hidden' as const,     // ⭕ 画面全体の右側へのはみ出しを強制カット
        padding: '0 20px',                // ⭕ 全体に強制適用する左右の20px安全余白
        boxSizing: 'border-box' as const, // ⭕ 余白を含めて100%幅を計算させ、ハミ出しを防止
    },

    // 🌟 修正（新設）：Homeの heroInner と完全に同じ挙動にする内枠最大幅スタイル
    sectionInnerContainer: {
        width: '100%',
        maxWidth: '1200px',
        margin: '200px auto 200px auto',  // ⭕ 上下にゆったりとした余白を持たせ、左右は auto で完璧にど真ん中寄せ
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '50px',                      // タイトル、メニュー、グリッド間の縦の隙間
        boxSizing: 'border-box' as const,
    },
    titleContainer: {
        alignSelf: 'flex-start' as const,
    },
    contentSubtitle: {
        fontSize: '16px',
        color: '#4599C4',
        letterSpacing: '0.05em',
    },
    contentTitle: {
        fontFamily: 'Hepta Slab',
        fontSize: '32px',
        fontWeight: '800',
        letterSpacing: '0.1em',
        margin: '0 0 10px 0',
    },

    // 🌟 新設：ソートタブを左揃えで綺麗に並べるコンテナ
    filterMenuWrapper: {
        display: 'flex',
        flexDirection: 'row' as const,
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '12px', // ボタン同士の横の隙間
        width: '100%',
        boxSizing: 'border-box' as const,
        marginBottom: '10px',
    },
    // 🌟 新設：洗練されたカプセル型のソートボタンデザイン
    filterTabBtn: {
        fontFamily: 'Hepta Slab',
        fontSize: '13px',
        fontWeight: 'bold',
        letterSpacing: '0.05em',
        height: '34px',
        padding: '0 24px',
        borderRadius: '17px',
        border: '2px solid #4599C4', // いつもの青い細枠
        cursor: 'pointer',
        boxSizing: 'border-box' as const,
        transition: 'all 0.3s ease', // 切り替わるときの心地よい色変化アニメーション
    },

    // 既存の大画面自動グリッド（元の完璧な設定を維持、className側でスマホ時に上書き）
    worksGrid: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))',
        columnGap: '50px', 
        rowGap: '60px',    
    },

    workCard: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '20px', 
        textDecoration: 'none',
        color: '#111111',
        transition: 'all 0.3s ease',
    },
    imageArea: {
        width: '100%',
        aspectRatio: '500 / 281', 
    },
    imagePlaceholder: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f5f5f5',
        border: '1px solid #eeeeee',
        borderRadius: '24px', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#aaaaaa',
        fontSize: '13px',
    },
    titleLine: {
        display: 'flex',
        flexDirection: 'row' as const,
        alignItems: 'center' as const, 
        gap: '16px', 
    },
    tagGrid: {
        minWidth: '110px',
        padding: '0 16px',
        height: '32px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '30px',
        color: '#FFFCF3',
        backgroundColor: '#4599C4',
        fontSize: '13px',
        fontWeight: 'bold',
        letterSpacing: '0.05em',
        flexShrink: 0,
    },
    workTitle: {
        fontSize: '20px',
        color: '#F49961',
        margin: 0,
    },
    roleText: {
        fontSize: '13px',
        color: '#F49961',
        margin: 0,
        letterSpacing: '0.05em',
    },
};
