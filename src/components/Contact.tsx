import React from "react";

export const Contact: React.FC = () => {
    return (
        <div style={styles.contact}>
            <p style={styles.title}>CONTACT</p>
            <p style={styles.subtitle}>
                下記メールアドレスへお気軽にご連絡ください。
            </p>
            <div style={styles.btn}>
                <p style={styles.btnMessage}>
                    haruka.hosono0104@gmail.com
                </p>
            </div>
        </div>
    );
};

const styles = {
    contact: {
        width: '100%',
        height: '700px',
        background: 'linear-Gradient(0deg, #4599C4 0%, #7299AB 10%, #F49961 70%, #F49961 100%)',
        padding: '40px 0',
        marginTop: 'auto',
        borderRadius: '1000px 1000px 0 0 / 500px 500px 0 0',
        display: 'flex',
        flexDirection: 'column' as const,
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px'
    },
    title: {
        margin: '0 auto',
        fontFamily: 'Hepta Slab',
        fontSize: '90px',
        fontWeight: '900',
        letterSpacing: '0.1em',
        color: '#4599C4',
    },
    subtitle: {
        marginBottom: '20px',
        fontSize: '16px',
        color: '#4E4E4E',
        letterSpacing: '0.05em',
    },
    btn: {
        width: '900px',
        height: '100px',
        borderRadius: '60px',
        backgroundColor: '#4599C4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnMessage: {
        fontFamily: 'Hepta Slab',
        fontSize: '40px',
        color: '#C4E9F2'
    }
};