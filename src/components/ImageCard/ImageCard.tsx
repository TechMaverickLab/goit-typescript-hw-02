import React from 'react';
import styles from './ImageCard.module.css'; // Переконайтеся, що шлях до файлу правильний

type Image = {
    urls: {
        small: string;
    };
    alt_description?: string;
};

type ImageCardProps = {
    image: Image;
};

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
    return (
        <div className={styles.card}>
            <img src={image.urls.small} alt={image.alt_description || 'Image'} />
        </div>
    );
};

export default ImageCard;
