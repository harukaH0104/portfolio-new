import React from "react";
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={styles.footer}>
            {/* 🌟 携帯サイズ（768px以下）用のCSS指定：ご要望のレイアウトに変形させます */}
            <style>{`
                @media (max-width: 768px) {
                    /* 1. 仕切り線のスラッシュ（/）をスマホ時は完全に非表示にする */
                    .footer-slash {
                        display: none !important;
                    }
                    /* 2. メニューリンクを「縦並び・左寄せ」に切り替え、隙間（gap）を空ける */
                    .responsive-footer-left {
                        flex-direction: column !important;
                        align-items: flex-start !important;
                        gap: 12px !important;
                    }
                    /* 3. コピーライトの文字サイズを小さくし、右寄せを維持 */
                    .responsive-copyright {
                        font-size: 11px !important; /* PC時の文字からさらに小さく調整 */
                        text-align: right !important;
                        line-height: 1.5 !important;
                    }
                    /* 4. PC用の1行コピーライトをスマホ時は消す */
                    .pc-copyright {
                        display: none !important;
                    }
                    /* 5. 代わりに、Allの直前で改行を入れたスマホ専用の2段コピーライトを表示する */
                    .mobile-copyright {
                        display: block !important;
                    }
                }
            `}</style>

            <div style={styles.container}>
                {/* 🌟 className="responsive-footer-left" を追加 */}
                <div className="responsive-footer-left" style={styles.leftArea}>
                    <Link to='/top' style={{ fontFamily: 'Hepta Slab', textDecoration: 'none', color: '#F49961'}}>top</Link>
                    {/* 🌟 クラス名を追加し、スマホでスラッシュを消せるようにしました */}
                    <p className="footer-slash" style={{margin: '0 30px 0 30px'}}>/</p>
                    
                    <Link to='/about' style={{ fontFamily: 'Hepta Slab', textDecoration: 'none', color: '#F49961'}}>about</Link>
                    <p className="footer-slash" style={{margin: '0 30px 0 30px'}}>/</p>
                    
                    <Link to='/works' style={{ fontFamily: 'Hepta Slab', textDecoration: 'none', color: '#F49961'}}>works</Link>
                </div>

                <div style={styles.rightArea}>
                    {/* 🌟 PC用の1行コピーライト（スマホ時は自動で非表示になります） */}
                    <p className="pc-copyright" style={styles.copyright}>
                        &copy; { currentYear } Myozi Namae All Right Reserved.
                    </p>

                    {/* 🌟 スマホ専用：Allの直前で改行を入れた2段コピーライト（PC時は非表示、スマホ時のみ出現） */}
                    <p className="mobile-copyright responsive-copyright" style={{ ...styles.copyright, display: 'none' }}>
                        &copy; { currentYear } Myozi Namae<br />All Right Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        fontFamily: 'Hepta Slab',
        width: '100%',
        backgroundColor: '#FFF8E1',
        padding: '40px 0',
        marginTop: 'auto',
    },
    container: {
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '0 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxSizing: 'border-box' as const,
    },
    leftArea: {
        display: 'flex',
        flexDirection: 'row' as const, // 元のタイポ（flesDirection）を正規の flexDirection に修正
        alignItems: 'center',
    },
    logo: {
        fontSize: '14px',
        fontWeight: 'bold', // 元のタイポ（fonstWeight）を修正
        letterSpacing: '0.1em',
        color: '#F49961',
    },
    description: {
        fontSize: '11px',
        color: '#F49961',
        margin: 0,
        letterSpacing: '0.05em',
    },
    rightArea: {
        textAlign: 'right' as const,
    },
    copyright: {
        fontSize: '13px', // 元のタイポ（fonstSize）を修正し、スマホ時との差が出るようPC版は13pxに設定
        color: '#F49961',
        margin: 0,
        letterSpacing: '0.02em', // 元のタイポ（letteSpacing）を修正
    },
};
