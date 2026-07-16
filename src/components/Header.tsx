import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);        // ハンバーガーメニューの開閉状態
    const [isScrolled, setIsScrolled] = useState(false);  // スクロールされたかどうかの状態

    // 画面のスクロール量を監視する処理
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header style={styles.headerRoot}>
            {/* 携帯サイズ（768px以下）用のCSS指定 */}
            <style>{`
                @media (max-width: 768px) {
                    .pc-nav-links {
                        display: none !important;
                    }
                    .hamburger-toggle-btn {
                        display: flex !important;
                        opacity: 1 !important;
                        pointer-events: auto !important;
                    }
                }
            `}</style>

            <div style={styles.headerInnerContainer}>
                {/* 左側：元のロゴ */}
                <Link to='/' style={styles.logoText} onClick={() => setIsOpen(false)}>
                    PORTFOLIO
                </Link>

                                {/* 右側：① PC用の通常メニュー */}
                                <nav 
                    className="pc-nav-links" 
                    style={{ 
                        ...styles.pcNavWrapper,
                        opacity: isScrolled ? 0 : 1,
                        pointerEvents: isScrolled ? 'none' : 'auto',
                    }}
                >
                    <Link to='/about' style={styles.pcNavLink}>ABOUT</Link>
                    <Link to='/works' style={styles.pcNavLink}>WORKS</Link>
                    
                    {/* 🌟 修正：Link を HashLink に変更し、to の後ろに #contact を付けます */}
                    <HashLink smooth to="#contact" style={styles.pcNavLink}>CONTACT</HashLink>
                </nav>


                                {/* 右側：② ハンバーガーボタン */}
                                <button 
                    className="hamburger-toggle-btn"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        ...styles.hamburgerBtn,
                        opacity: (isScrolled || isOpen) ? 1 : 0,
                        pointerEvents: (isScrolled || isOpen) ? 'auto' : 'none',
                        zIndex: isOpen ? 10002 : 10001,
                    }}
                >
                    {/* 🌟 修正：バツの形が完璧な正十字（45度）で交差する変形アニメーション */}
                    <span style={{ 
                        ...styles.hamburgerLine, 
                        backgroundColor: isOpen ? '#ffffff' : '#F49961',
                        // ⭕ 縦のズレを綺麗に中央へ引き寄せる 3.5px にミリ単位で修正
                        transform: isOpen ? 'translateY(2.7px) rotate(45deg)' : 'none' 
                    }} />
                    <span style={{ 
                        ...styles.hamburgerLine, 
                        backgroundColor: isOpen ? '#ffffff' : '#F49961',
                        opacity: isOpen ? 0 : 1,
                        // ⭕ 閉じている時も開いている時も、ブレをなくすため中心軸を完全にセンター（center）に固定
                        transformOrigin: 'center center'
                    }} />
                    <span style={{ 
                        ...styles.hamburgerLine, 
                        backgroundColor: isOpen ? '#ffffff' : '#F49961',
                        // ⭕ 縦のズレを綺麗に中央へ引き寄せる -3.5px にミリ単位で修正
                        transform: isOpen ? 'translateY(-2.7px) rotate(-45deg)' : 'none' 
                    }} />
                </button>
            </div>

            {/* 🌟 右上から円形の背景が拡大するスマホメニュー画面 */}
            {/* ⭕ 改善：文字以外のどこを押しても閉じるように、この親枠自体に onClick を仕込みました */}
            <div 
                style={{
                    ...styles.mobileMenuOverlay,
                    opacity: isOpen ? 1 : 0,
                    pointerEvents: isOpen ? 'auto' : 'none',
                    zIndex: isOpen ? 10000 : -1,
                }}
                onClick={() => setIsOpen(false)} // 🌟 文字以外のオレンジ色の背景をタップしたらメニューを閉じる指示
            >
                {/* 右上から拡大するオレンジの円形背景 */}
                <div style={{
                    ...styles.circleBackground,
                    transform: isOpen ? 'scale(45)' : 'scale(0)',
                }} />

                {/* メニューの中身のリンク（文字は左寄せ・真ん中配置） */}
                <div 
                    style={{
                        ...styles.mobileMenuLinksWrapper,
                        opacity: isOpen ? 1 : 0,
                        transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <Link to='/about' style={styles.mobileNavLink} onClick={() => setIsOpen(false)}>ABOUT</Link>
                    <Link to='/works' style={styles.mobileNavLink} onClick={() => setIsOpen(false)}>WORKS</Link>
                    
                    {/* 🌟 修正：Link を HashLink に変更し、to の後ろに #contact を付けます */}
                    <HashLink smooth to="#contact" style={styles.mobileNavLink} onClick={() => setIsOpen(false)}>CONTACT</HashLink>
                </div>
            </div>
        </header>
    );
};

const styles = {
    headerRoot: {
        position: 'fixed' as const,
        top: 0,
        left: 0,
        width: '100%',
        height: '80px',
        zIndex: 9999,
        boxSizing: 'border-box' as const,
    },
    headerInnerContainer: {
        width: '100%',
        height: '100%',
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' as const,
        padding: '20px 40px',
        boxSizing: 'border-box' as const,
        position: 'relative' as const,
    },
    logoText: { 
        fontFamily: 'Hepta Slab', 
        textDecoration: 'none', 
        color: '#F49961', 
        fontWeight: 'bold' as const,
        fontSize: '24px',
        letterSpacing: '0.05em',
        textAlign: 'left' as const,
        // 🌟 追加：メニューが開いている時もロゴがオレンジ色のまま最前面に見えるように調整
        position: 'relative' as const,
        zIndex: 10002, 
    },
    pcNavWrapper: { 
        display: 'flex', 
        gap: '30px',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
    },
    pcNavLink: { 
        fontFamily: 'Hepta Slab', 
        textDecoration: 'none', 
        color: '#F49961', 
        fontWeight: 'bold' as const,
        fontSize: '16px',
        letterSpacing: '0.05em',
    },
    hamburgerBtn: {
        display: 'none', 
        flexDirection: 'column' as const,
        width: '40px',
        height: '40px',
        justifyContent: 'center', 
        alignItems: 'center' as const,
        gap: '5px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        boxSizing: 'border-box' as const,
        transition: 'opacity 0.4s ease, transform 0.4s ease',
        position: 'relative' as const, // 🌟 手前に引き出すための準備
    },
    hamburgerLine: {
        width: '22px', 
        height: '2px', 
        transformOrigin: '5px center', 
        transition: 'transform 0.4s ease, opacity 0.4s ease, background-color 0.3s ease',
    },
    mobileMenuOverlay: {
        position: 'fixed' as const,
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden' as const,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center' as const,
        transition: 'opacity 0.4s ease',
        cursor: 'pointer', // 背景が触れることを伝えるマウスカーソル
    },
    circleBackground: {
        position: 'absolute' as const,
        top: '25px', 
        right: '40px',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: '#F49961', 
        transformOrigin: 'center center',
        transition: 'transform 0.5s cubic-bezier(0.1, 0.8, 0.3, 1)', 
    },
    mobileMenuLinksWrapper: {
        position: 'relative' as const,
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '40px',
        alignItems: 'flex-start' as const, 
        transition: 'opacity 0.4s ease 0.15s, transform 0.4s ease 0.15s', 
        cursor: 'default', // 文字の上は通常の矢印カーソルに戻す
    },
    mobileNavLink: {
        fontFamily: 'Hepta Slab',
        fontSize: '36px', 
        fontWeight: 'bold' as const,
        color: '#ffffff', 
        textDecoration: 'none',
        letterSpacing: '0.1em',
        textAlign: 'left' as const, 
    }
};

