import React from "react";

export const Contact: React.FC = () => {
    return (
        <div id="contact" className="responsive-contact-root" style={styles.contact}>
            <style>{`
                @media (max-width: 768px) {
                    /* 1. 全体の高さを確実に400px固定にする */
                    .responsive-contact-root {
                        height: 500px !important; 
                        
                        /* 400pxの高さに対して、完璧に綺麗ななだらかな山のアーチを描くための再計算 */
                        border-radius: 600px 600px 0 0 / 300px 300px 0 0 !important; 
                        
                        padding: 40px 20px !important; 
                        gap: 15px !important;
                    }
                    /* 2. CONTACTタイトルをスマホに収まるサイズに自動縮小 */
                    .responsive-contact-title {
                        font-size: clamp(36px, 10vw, 56px) !important;
                    }
                    /* 3. サブタイトルの一番下の隙間を調整 */
                    .responsive-contact-subtitle {
                        font-size: 14px !important;
                        margin-bottom: 10px !important;
                        text-align: center !important;
                    }
                    /* 4. メールボタンを横幅900pxから「画面幅100%（最大450px）」の可変サイズに変化 */
                    .responsive-contact-btn {
                        width: 100% !important;
                        max-width: 450px !important;
                        height: 60px !important; 
                        border-radius: 30px !important;
                    }
                    /* 5. メールアドレスの文字がはみ出さないようにフォントサイズを縮小 */
                    .responsive-contact-mail {
                        font-size: clamp(14px, 4.5vw, 20px) !important;
                    }
                }
            `}</style>

            <p className="responsive-contact-title" style={styles.title}>CONTACT</p>
            <p className="responsive-contact-subtitle" style={styles.subtitle}>
                下記メールアドレスへお気軽にご連絡ください。
            </p>

            <a 
                href="mailto:haruka.hosono0104@gmail.com?subject=ポートフォリオサイトからのお問い合わせ" 
                className="responsive-contact-btn" 
                style={styles.btn}
            >
                <p className="responsive-contact-mail" style={styles.btnMessage}>
                    haruka.hosono0104@gmail.com
                </p>
            </a>

        </div>
    );
};

const styles = {
    contact: {
        width: '100%',
        height: '700px',
        background: 'linear-gradient(0deg, #4599C4 0%, #7299AB 10%, #F49961 70%, #F49961 100%)',
        padding: '40px 0',
        marginTop: 'auto',
        borderRadius: '1000px 1000px 0 0 / 500px 500px 0 0',
        display: 'flex',
        flexDirection: 'column' as const,
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        boxSizing: 'border-box' as const,
    },
    title: {
        margin: '0 auto',
        fontFamily: 'Hepta Slab',
        fontSize: '90px',
        fontWeight: '900',
        letterSpacing: '0.1em',
        color: '#4599C4',
        textAlign: 'center' as const,
    },
    subtitle: {
        marginBottom: '20px',
        fontSize: '16px',
        color: '#4E4E4E',
        letterSpacing: '0.05em',
        textAlign: 'center' as const,
    },
    btn: {
        width: '900px',
        height: '100px',
        borderRadius: '60px',
        backgroundColor: '#4599C4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box' as const,
        textDecoration: 'none',
    },
    btnMessage: {
        fontFamily: 'Hepta Slab',
        fontSize: '40px',
        color: '#C4E9F2',
        margin: 0,
        textAlign: 'center' as const,
    }
};
