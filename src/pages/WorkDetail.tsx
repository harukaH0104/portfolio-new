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
      
            <div style={styles.herosectionContainer}>
                <p style={styles.tag}>{work.tag}</p>
                <h1 style={styles.workTitle}>{work.title}</h1>
                <p style={styles.range}>{work.range}</p>
            </div>

            {/* Outline セクション */}
            <div style={styles.sectionContainer}>
                <div style={styles.sectionTitleContainer}>
                    <p style={styles.sectionSubtitle}>制作概要</p>
                    <h2 style={styles.sectionTitle}>OUTLINE</h2>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', lineHeight: '1.6' }}>
                    <li><strong>クライアント：</strong>{work.outline.client}</li>
                    <li><strong>ターゲット：</strong>{work.outline.target}</li>
                    <li><strong>課題：</strong>{work.outline.issue}</li>
                    <li><strong>目的：</strong>{work.outline.purpose}</li>
                    <li><strong>要望：</strong>{work.outline.request}</li>
                </ul>
            </div>

            {/* Concept セクション */}
            <div style={styles.sectionContainer}>
                <div style={styles.sectionTitleContainer}>
                    <p style={styles.sectionSubtitle}>コンセプト</p>
                    <h2 style={styles.sectionTitle}>CONCEPT</h2>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', lineHeight: '1.6' }}>
                    <li><strong>コンセプト：</strong>{work.concept.main_concept}</li>
                    <li><strong>デザインイメージ：</strong>{work.concept.design_image}</li>
                    <li><strong>フォント：</strong>{work.concept.font}</li>
                </ul>
            </div>

            {/* data セクション */}
            <div style={styles.sectionContainer}>
                <div style={styles.sectionTitleContainer}>
                    <p style={styles.sectionSubtitle}>制作データ</p>
                    <h2 style={styles.sectionTitle}>DATA</h2>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', lineHeight: '1.6' }}>
                    <li><strong>コンセプト：</strong>{work.concept.main_concept}</li>
                    <li><strong>デザインイメージ：</strong>{work.concept.design_image}</li>
                    <li><strong>フォント：</strong>{work.concept.font}</li>
                </ul>
            </div>

            {/* 成果物へのリンクボタン */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '10px' }}>
                <a href={work.demoUrl} target="_blank" rel="noreferrer" style={{ padding: '14px', backgroundColor: '#111111', color: '#ffffff', textAlign: 'center', textDecoration: 'none', fontSize: '13px', fontWeight: 'bold' }}>
                    Reactデモサイトを見る
                </a>
                <a href={work.figmaUrl} style={{ padding: '12px', border: '1px solid #dddddd', color: '#111111', textAlign: 'center', textDecoration: 'none', fontSize: '13px' }}>
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
    sectionContainer: {
        width: '100%',
        maxWidth: '1200px',
        margin: '200px auto 100px auto',
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
    sectionTitleContainer: {},
    workTitle: {
        fontFamily: 'Hepta Slab',
        fontSize: '48px', 
        //letterSpacing: '0.1em',
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
};
