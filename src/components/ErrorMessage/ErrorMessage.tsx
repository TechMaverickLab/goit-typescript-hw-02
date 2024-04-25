import React from 'react';
import styles from './ErrorMessage.module.css'; // Переконайтеся, що шлях до файлу правильний

type ErrorMessageProps = {
    message: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
    return (
        <div className={styles.errorContainer}>
            <p>{message}</p>
        </div>
    );
};

export default ErrorMessage;
