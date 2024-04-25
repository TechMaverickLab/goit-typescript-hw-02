import React from 'react';
import ImageCard from '../ImageCard/ImageCard';  // Переконайтеся, що шлях до файлу правильний
import styles from './ImageGallery.module.css'; // Переконайтеся, що шлях до файлу правильний

type Image = {
    id: string;
    alt_description?: string;
    urls: {
        small: string;
        regular: string;
    };
    user: {
        name: string;
    };
    likes: number;
};

type ImageGalleryProps = {
    images: Image[];
    onImageClick: (image: Image) => void;
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
    return (
        <ul className={styles.gallery}>
            {images.map((image) => (
                <li key={image.id} onClick={() => onImageClick(image)} className={styles.item}>
                    <ImageCard image={image} />
                </li>
            ))}
        </ul>
    );
};

export default ImageGallery;
