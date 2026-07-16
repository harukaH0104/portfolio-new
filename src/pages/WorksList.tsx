import React from "react";
import { Link } from "react-router-dom";
import { worksData } from "../data/worksData";

export const WorksList: React.FC = () => {
    return (
        <div style={styles.sectionContainer}>
            {/* セクションタイトル */}
            <div style={styles.titleContainer}>
                <p style={styles.contentSubtitle}>制作したもの</p>
                <h1 style={styles.contentTitle}>WORKS</h1>
            </div>

            {/* 🛠️ 無限対応型：最大幅のないフル画面グリッドコンテナ */}
            <div style={styles.worksGrid}>
                {worksData.map((work) => (
                    <Link to={`/works/${work.id}`} key={work.id} style={styles.workCard}>
                        
                        {/* 1. メイン画像（Figmaの比率を維持したまま、画面幅に合わせてどこまでも広がります） */}
                        <div style={styles.imageArea}>
                            <div style={styles.imagePlaceholder}>
                                [ {work.title} Image ]
                            </div>
                        </div>

                        {/* 2. タグ と タイトル の横並び */}
                        <div style={styles.titleLine}>
                            {/* 🌟 IDの判定を完全に廃止し、データに書き込まれた独自のタグ名（work.tag）をそのまま自動で表示します */}
                            <div style={styles.tagGrid}>{work.tag}</div>
                            <h2 style={styles.workTitle}>{work.title}</h2>
                        </div>

                        {/* 3. range */}
                        <p style={styles.rangeText}>{work.range}</p>

                    </Link>
                ))}
            </div>
        </div>
    );
};

const styles = {
    // ★最大幅（maxWidth: '1200px'）を完全に廃止し、画面の横幅いっぱいにフィットさせます
    sectionContainer: {
        width: '100%',
        padding: '100px 4%', // 左右に「4%」の流動的なマージンを空けることで、大画面でも綺麗に佇みます
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '50px',
        boxSizing: 'border-box' as const,
    },
    titleContainer: {
        alignSelf: 'flex-start' as const,
    },
    contentSubtitle: {
        fontSize: '16px',
        color: '#4599C4',
        letterSpacing: '0.05em',
        margin: '0 0 8px 0',
    },
    contentTitle: {
        fontFamily: 'Hepta Slab',
        fontSize: '32px',
        fontWeight: '800',
        letterSpacing: '0.1em',
        margin: '0 0 10px 0',
    },

    // 🌟【無限対応・最大幅なし】自動で作品を敷き詰める大画面グリッド
    worksGrid: {
        width: '100%',
        display: 'grid',
        /* 
          ・パソコンの大画面（4Kモニターなど）なら3列や4列に自動で広がる
          ・通常のノートPCなら2列（左上、右上、左下、右下）に配置される
          ・スマホなら自動で1列になる
          という、1つのコードで全ての画面幅に寄り添う究極の自動レイアウトです。
        */
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

    // 1. 画像エリア（500 × 281 の比率を保ったまま、大画面に合わせてダイナミックに拡大縮小）
    imageArea: {
        width: '100%',
        // ⭕ maxWidth: '500px' を外したため、大画面のボックス幅いっぱいに写真が広がります
        aspectRatio: '500 / 281', // 比率は完全にロックして歪みを防ぎます
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
    // 🌟 どんな長さのタグ名（「WEB/React」「UI/UX/LP」など）が来ても、ハミ出さずにド真ん中寄せをキープする可変タグ
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
        //fontWeight: '600',
        margin: 0,
    },

    // 3. range
    rangeText: {
        fontSize: '13px',
        color: '#F49961',
        margin: 0,
        letterSpacing: '0.05em',
    },
};
