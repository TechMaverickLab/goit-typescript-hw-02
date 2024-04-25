import React from 'react';
import styles from './LoadMoreBtn.module.css'; // Забезпечте правильний шлях до файлу CSS модуля

type LoadMoreBtnProps = {
    onClick: () => void;
};

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
    return (
        <button onClick={onClick} className={styles.button}> {/* Додано className для застосування стилів */}
            Load more
        </button>
    );
};

export default LoadMoreBtn;
