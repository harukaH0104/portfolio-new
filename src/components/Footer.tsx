import React from "react";
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <div style={styles.leftArea}>
                <Link to='/top' style={{ fontFamily: 'Hepta Slab', textDecoration: 'none', color: '#F49961'}}>top</Link>
                <p style={{margin: '0 30px 0 30px'}}>/</p>
                <Link to='/about' style={{ fontFamily: 'Hepta Slab', textDecoration: 'none', color: '#F49961'}}>about</Link>
                <p style={{margin: '0 30px 0 30px'}}>/</p>
                <Link to='/works' style={{ fontFamily: 'Hepta Slab', textDecoration: 'none', color: '#F49961'}}>works</Link>
                </div>

                <div style={styles.rightArea}>
                    <p style={styles.copyright}>
                        &copy; { currentYear } Haruka Hosono All Right Reserved.
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
    },
    leftArea: {
        display: 'flex',
        flesDirection: 'column' as const,
        gap: '8px',
    },
    logo: {
        fontSize: '14px',
        fonstWeight: 'bold',
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
        fonstSize: '11px',
        color: '#F49961',
        margin: 0,
        letteSpacing: '0.02em',
    },
};