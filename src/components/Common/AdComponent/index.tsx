import React, { useEffect, useRef } from 'react';
import styles from "./styles.module.css";

type AdBannerProps = {
};

const AdBanner: React.FC<AdBannerProps> = ({ }) => {
    const adRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (adRef.current) {
            const script1 = document.createElement('script');
            script1.type = 'text/javascript';
            script1.innerHTML = `
          atOptions = {
            'key' : '3ca6be2c5a4f1256d6db9da8845b9e23',
            'format' : 'iframe',
            'height' : 90,
            'width' : 728,
            'params' : {}
          };
        `;
            adRef.current.appendChild(script1);

            const script2 = document.createElement('script');
            script2.type = 'text/javascript';
            script2.src = '//www.highperformanceformat.com/3ca6be2c5a4f1256d6db9da8845b9e23/invoke.js';
            adRef.current.appendChild(script2);

            // Очистка скриптів при розмонтуванні компонента
            return () => {
                if (adRef.current) {
                    adRef.current.removeChild(script1);
                    adRef.current.removeChild(script2);
                }
            };
        }
    }, []);

    return (
        <div className={`${styles.ctn_ad} d-flex-center`}>
            <div ref={adRef} />
        </div>
    );
};

export default AdBanner;
