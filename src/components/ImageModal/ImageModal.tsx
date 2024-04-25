import React, { useEffect } from 'react';
import Modal from 'react-modal';
import styles from './ImageModal.module.css'; // Переконайтесь, що шлях до файлу правильний

type Image = {
    urls: {
        regular: string;
    };
    alt_description?: string;
    user: {
        name: string;
    };
    likes: number;
};

type ImageModalProps = {
    image: Image;
    onClose: () => void;
};

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    useEffect(() => {
        const handleEscPress = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleEscPress);
        return () => {
            window.removeEventListener('keydown', handleEscPress);
        };
    }, [onClose]);

    return (
        <Modal
            isOpen={!!image}
            onRequestClose={onClose}
            className={styles.modal}
            overlayClassName={styles.overlay}
        >
            <div onClick={handleOverlayClick} className={styles.overlayDiv}>
                <img src={image.urls.regular} alt={image.alt_description} className={styles.content} />
                <div className={styles.content}>
                    <p>Author: {image.user.name}</p>
                    <p>Likes: {image.likes}</p>
                </div>
                <button onClick={onClose} className={styles.closeButton}>Close</button>
            </div>
        </Modal>
    );
};

export default ImageModal;
