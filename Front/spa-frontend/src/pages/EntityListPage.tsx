import React, { useEffect, useState } from 'react';
import api from '../api';

interface Entity {
    id: number;
    name: string;
}

const EntityListPage: React.FC = () => {
    const [entities, setEntities] = useState<Entity[]>([]);

    useEffect(() => {
        const fetchEntities = async () => {
            try {
                const response = await api.get('/entities');
                setEntities(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchEntities();
    }, []);

    return (
        <div>
            <h2>Entity List</h2>
            <ul>
                {entities.map((entity) => (
                    <li key={entity.id}>{entity.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default EntityListPage;
