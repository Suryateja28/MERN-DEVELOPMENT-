import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MernApp = () => {
    const [items, setItems] = useState([]);
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [loading, setLoading] = useState(true);

    const API_URL = 'http://localhost:5000/api/items';

    // Fetch items from Backend
    const fetchItems = async () => {
        try {
            const res = await axios.get(API_URL);
            setItems(res.data);
            setLoading(false);
        } catch (err) {
            console.error("Error fetching data:", err);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);

    // Add Item
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name) return;

        try {
            const res = await axios.post(API_URL, { name, description: desc });
            setItems([res.data, ...items]);
            setName('');
            setDesc('');
        } catch (err) {
            console.error("Error adding item:", err);
        }
    };

    // Delete Item
    const deleteItem = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            setItems(items.filter(item => item._id !== id));
        } catch (err) {
            console.error("Error deleting item:", err);
        }
    };

    return (
        <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto', color: '#fff', background: '#1a1a1a', borderRadius: '15px', minHeight: '80vh' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>⚡ MERN CRUD</h1>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input
                    type="text"
                    placeholder="Item Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ padding: '12px', borderRadius: '8px', border: '1px solid #444', background: '#222', color: '#fff' }}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    style={{ padding: '12px', borderRadius: '8px', border: '1px solid #444', background: '#222', color: '#fff' }}
                />
                <button type="submit" style={{ padding: '12px', background: '#646cff', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                    Add to MongoDB
                </button>
            </form>

            {/* List */}
            <div>
                <h2>Items in Database:</h2>
                {loading ? <p>Loading...</p> : (
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {items.map(item => (
                            <li key={item._id} style={{
                                background: '#2d2d2d',
                                padding: '15px',
                                borderRadius: '8px',
                                marginBottom: '10px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <div>
                                    <h3 style={{ margin: 0 }}>{item.name}</h3>
                                    <p style={{ margin: '5px 0 0', color: '#aaa', fontSize: '0.9rem' }}>{item.description}</p>
                                </div>
                                <button
                                    onClick={() => deleteItem(item._id)}
                                    style={{ background: '#ff4444', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default MernApp;
