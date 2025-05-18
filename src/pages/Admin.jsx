import { useState } from 'react';
import { books, addBook } from '../json/data';

function Admin() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: '',
    });
    const [previewImage, setPreviewImage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
                setFormData({
                    ...formData,
                    image: reader.result,
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(formData);
        setFormData({
            title: '',
            description: '',
            image: '',
        });
        setPreviewImage('');
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Add New Book</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Book Title</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                className="input-field"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Description</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                className="input-field h-32"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Book Image</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="input-field"
                                required
                            />
                        </div>
                        {previewImage && (
                            <div className="mb-4">
                                <img
                                    src={previewImage}
                                    alt="Preview"
                                    className="w-full h-48 object-cover rounded"
                                />
                            </div>
                        )}
                        <button type="submit" className="btn-primary w-full">
                            Add Book
                        </button>
                    </form>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Current Books</h2>
                    <div className="space-y-4">
                        {books.map((book) => (
                            <div key={book.id} className="border-b pb-4">
                                <h3 className="font-semibold">{book.title}</h3>
                                <p className="text-gray-600 text-sm">{book.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin; 