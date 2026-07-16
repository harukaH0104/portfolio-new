import React, { useState, useEffect } from "react";

export const PageTopLink: React.FC = () => {
    const [isVisible, setIsOpen] = useState(false);       // ボタン自体を表示するかどうか
    const [isTopMode, setIsTopMode] = useState(false);     // 「scroll」か「top」のどちらのモードか
    const [isContactVisible, setIsContactVisible] = useState(false); // コンタクトが見えているか

    useEffect(() => {
        const getScrollTop = () => {
            return window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || (document.getElementById("root")?.scrollTop ?? 0);
        };

        const handleScroll = () => {
            const scrollY = getScrollTop();
            
            if (scrollY <= 100) {
                setIsOpen(false);
                setIsTopMode(false);
            } else if (scrollY > 100 && scrollY <= 600) {
                setIsOpen(true);
                setIsTopMode(false);
            } else {
                setIsOpen(true);
                setIsTopMode(true);
            }

            const contactElement = document.getElementById("contact");
            if (contactElement) {
                const rect = contactElement.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                if (rect.top < windowHeight) {
                    setIsContactVisible(true);
                } else {
                    setIsContactVisible(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        document.documentElement.addEventListener("scroll", handleScroll, { passive: true });
        document.body.addEventListener("scroll", handleScroll, { passive: true });
        const appRoot = document.getElementById("root");
        if (appRoot) { appRoot.addEventListener("scroll", handleScroll, { passive: true }); }

        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.documentElement.removeEventListener("scroll", handleScroll);
            document.body.removeEventListener("scroll", handleScroll);
            if (appRoot) { appRoot.removeEventListener("scroll", handleScroll); }
        };
    }, []);

    const scrollToTopCustom = () => {
        const getScrollTop = () => {
            return window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || (document.getElementById("root")?.scrollTop ?? 0);
        };
        
        const startPosition = getScrollTop();
        if (startPosition === 0) return;

        const duration = Math.min(1500, Math.max(500, startPosition * 0.4)); 
        let startTime: number | null = null;

        const animation = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            
            const progress = Math.min(timeElapsed / duration, 1);
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);

            const nextPos = startPosition * (1 - easeOutCubic);
            
            window.scrollTo(0, nextPos);
            document.documentElement.scrollTop = nextPos;
            document.body.scrollTop = nextPos;
            const appRoot = document.getElementById("root");
            if (appRoot) { appRoot.scrollTop = nextPos; }

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        };

        requestAnimationFrame(animation);
    };
    

    const showButton = isVisible && !isContactVisible;

    return (
        /* 🌟 修正：className="responsive-page-top" を確実に記述 */
        <div 
            onClick={isTopMode ? scrollToTopCustom : undefined}
            className="responsive-page-top"
            style={{
                ...styles.pageTopRoot,
                opacity: showButton ? 1 : 0,
                transform: showButton ? 'translateY(0)' : 'translateY(20px)',
                pointerEvents: showButton ? 'auto' : 'none',
                cursor: isTopMode ? 'pointer' : 'default',
            }}
        >
            {/* 🌟 携帯サイズ（768px以下）用のCSS指定：クラス名に紐付けることで100%確実に上書きを適用します */}
            <style>{`
                @media (max-width: 768px) {
                    /* 1. 全体の配置を少し画面の端（右下）に寄せる */
                    .responsive-page-top {
                        bottom: 25px !important;
                        right: 20px !important;
                        gap: 8px !important;
                    }
                    
                    /* 2. 矢印の全長を105px ➔ スマホ用に「70px」へ大幅にコンパクト化 */
                    .responsive-arrow-icon {
                        height: 70px !important;
                    }
                    /* 矢印の「直線」を細く（1.5px）、短く（65px） */
                    .responsive-arrow-line {
                        width: 1.5px !important;
                        height: 65px !important;
                    }
                    /* 矢印の「先端」もひと回りシャープに */
                    .responsive-arrow-tip {
                        width: 6px !important;
                        height: 6px !important;
                        border-left-width: 1.5px !important;
                        border-bottom-width: 1.5px !important;
                        margin-top: -5px !important;
                    }
                    
                    /* 3. 文字を縦に積み重ねるコンテナの文字間をさらに引き締める */
                    .responsive-text-container {
                        gap: 2px !important;
                    }
                    
                    /* 4. 文字を14px ➔ スマホに馴染む繊細な「11px」に縮小 */
                    .responsive-letter {
                        font-size: 11px !important;
                        width: 11px !important;
                        height: 11px !important;
                    }
                }
            `}</style>

            {/* 左側：一本線矢印（各パーツにレスポンシブ用のクラス名を付与） */}
            <div className="responsive-arrow-icon" style={{
                ...styles.arrowIcon,
                transform: isTopMode ? 'rotate(180deg)' : 'rotate(0deg)',
            }}>
                <div className="responsive-arrow-line" style={styles.arrowLine} />
                <div className="responsive-arrow-tip" style={styles.arrowTip} />
            </div>

            {/* 右側：文字（クラス名を付与） */}
            <div className="responsive-text-container" style={styles.textWordContainer}>
                {isTopMode ? (
                    <>
                        <span className="responsive-letter" style={styles.letter}>t</span>
                        <span className="responsive-letter" style={styles.letter}>o</span>
                        <span className="responsive-letter" style={styles.letter}>p</span>
                    </>
                ) : (
                    <>
                        <span className="responsive-letter" style={styles.letter}>s</span>
                        <span className="responsive-letter" style={styles.letter}>c</span>
                        <span className="responsive-letter" style={styles.letter}>r</span>
                        <span className="responsive-letter" style={styles.letter}>o</span>
                        <span className="responsive-letter" style={styles.letter}>l</span>
                        <span className="responsive-letter" style={styles.letter}>l</span>
                    </>
                )}
            </div>
            
        </div>
    );
};

const styles = {
    pageTopRoot: {
        position: 'fixed' as const,
        bottom: '40px', 
        right: '40px',  
        zIndex: 99999,  
        display: 'flex',
        flexDirection: 'row' as const, 
        alignItems: 'center' as const, 
        gap: '12px',                   
        transition: 'opacity 0.4s ease, transform 0.4s ease',
    },
    textWordContainer: {
        display: 'flex',
        flexDirection: 'column' as const, 
        alignItems: 'center' as const,
        gap: '4px', 
    },
    letter: {
        fontFamily: 'Hepta Slab',
        fontSize: '14px',
        fontWeight: 'bold',
        color: 'rgba(69, 153, 196, 0.5)', 
        margin: 0,
        lineHeight: 1,
        display: 'inline-block' as const,
        transform: 'rotate(90deg)', 
        transformOrigin: 'center center',
        width: '14px',
        height: '14px',
        textAlign: 'center' as const,
        letterSpacing: '0.1em',
    },
    arrowIcon: {
        width: '16px',
        height: '105px', 
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center' as const,
        position: 'relative' as const,
        transition: 'transform 0.5s cubic-bezier(0.1, 0.8, 0.3, 1)', 
    },
    arrowLine: {
        width: '2px', 
        height: '99px', 
        backgroundColor: 'rgba(69, 153, 196, 0.5)', 
    },
    arrowTip: {
        width: '8px',
        height: '8px',
        borderLeft: '2px solid rgba(69, 153, 196, 0.5)', 
        borderBottom: '2px solid rgba(69, 153, 196, 0.5)', 
        transform: 'rotate(-45deg)', 
        marginTop: '-6px', 
    }
};
