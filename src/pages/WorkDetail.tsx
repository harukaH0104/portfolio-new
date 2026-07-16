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
    <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '60px 20px', display: 'flex', gap: '40px' }}>
      
      {/* 🧭 左側：サイド情報領域（幅 440px） */}
      <div style={{ width: '440px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <Link to="/works" style={{ color: '#888888', textDecoration: 'none', fontSize: '13px' }}>← WORKS一覧へ戻る</Link>
        
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0 0 10px 0' }}>{work.title}</h1>
          <p style={{ fontSize: '12px', color: '#666666', lineHeight: '1.6' }}>{work.range}</p>
        </div>

        {/* Outline セクション */}
        <div style={{ borderTop: '1px solid #eeeeee', paddingTop: '20px' }}>
          <h2 style={{ fontSize: '14px', letterSpacing: '0.1em', margin: '0 0 15px 0', color: '#888888' }}>OUTLINE</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', lineHeight: '1.6' }}>
            <li><strong>クライアント：</strong>{work.outline.client}</li>
            <li><strong>ターゲット：</strong>{work.outline.target}</li>
            <li><strong>課題：</strong>{work.outline.issue}</li>
            <li><strong>目的：</strong>{work.outline.purpose}</li>
            <li><strong>要望：</strong>{work.outline.request}</li>
          </ul>
        </div>

        {/* Concept セクション */}
        <div style={{ borderTop: '1px solid #eeeeee', paddingTop: '20px' }}>
          <h2 style={{ fontSize: '14px', letterSpacing: '0.1em', margin: '0 0 15px 0', color: '#888888' }}>CONCEPT</h2>
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

      {/* 🎨 右側：ビジュアル領域（幅 1000px） */}
      <div style={{ flex: 1, width: '1000px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {/* ここにデザインカンプ、ワイヤーフレーム、ラフスケッチの画像を、上から縦にドンドン並べます */}
        <div style={{ width: '100%', height: '500px', backgroundColor: '#f5f5f5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span style={{ color: '#999999', fontSize: '13px' }}>[ ここに「{work.title}」のデザインカンプ（巨大画像）が入ります ]</span>
        </div>
        <div style={{ width: '100%', height: '500px', backgroundColor: '#f5f5f5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span style={{ color: '#999999', fontSize: '13px' }}>[ ここに「手書きラフスケッチ100個」や「ワイヤーフレーム」が並びます ]</span>
        </div>
      </div>

    </div>
  );
};
