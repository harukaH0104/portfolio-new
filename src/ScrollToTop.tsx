import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // 1. 通常のブラウザ画面全体を一番上に戻す
        window.scrollTo(0, 0);

        // 2. 🌟【最重要】親のCSS（overflow）のせいで中にスクロールが溜まっている場合、
        // ページを形作っているすべての要素（bodyやルートタグなど）のスクロールを強制的に0にします
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        // 3. 🌟【お守り】ReactのIDで囲まれた大元のコンテナ要素（#root）も強制リセット
        const appRoot = document.getElementById("root");
        if (appRoot) {
            appRoot.scrollTop = 0;
        }
    }, [pathname]); // URL（ページ）が変わるたびに100%発動

    return null;
};
