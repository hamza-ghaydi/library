import { Link } from 'react-router-dom';
import { books } from '../../json/data';

function Home({ currentUser, setCurrentUser }) {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {books.map((book) => (
                    <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <img
                            src={book.image}
                            alt={book.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2 text-gray-800">{book.title}</h2>
                            <p className="text-gray-600">{book.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home; 