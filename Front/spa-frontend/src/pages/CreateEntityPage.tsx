import React, { useState } from 'react';
import api from '../api';

const CreateEntityPage: React.FC = () => {
    const [name, setName] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await api.post('/entities', { name });
            alert('Entity created successfully!');
        } catch (error) {
            console.error(error);
            alert('Failed to create entity.');
        }
    };

    return (
        <div>
            <h2>Create Entity</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CreateEntityPage;
