import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './SearchBar.module.css';

type SearchBarProps = {
    onSubmit: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (query.trim()) {
            onSubmit(query);
            setQuery('');
        }
    };

    return (
        <header className={styles.header}> 
            <form onSubmit={handleSubmit} className={styles.form}> 
                <input
                    className={styles.input} 
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={query}
                    onChange={handleChange}
                />
                <button className={styles.button} type="submit">Search</button> 
            </form>
        </header>
    );
};

export default SearchBar;
