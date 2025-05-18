export const users = [
    {
        email: "test@test.com",
        username: "Addmin",
        password: "admin",
        isAdmin: true,
    }
]

export const addUsers = (user) =>{
    users.push(user)
}

export const findUserByEmail = (email) => {
  return users.find(user => user.email === email);
}

export const findUserByUsername = (username) => {
  return users.find(user => user.username === username);
}

export const validateUser = (emailOrUsername, password) => {
  const user = findUserByEmail(emailOrUsername) || findUserByUsername(emailOrUsername);
  return user && user.password === password ? user : null;
}



export const books = [
    {
        id: 1,
        title: "The Silent Patient",
        description: "A psychological thriller about a woman's act of violence against her husband—and the therapist obsessed with uncovering her motive.",
        image: "https://covers.openlibrary.org/b/id/10594798-L.jpg"
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        description: "A timeless novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it.",
        image: "https://covers.openlibrary.org/b/id/8228691-L.jpg"
    },
    {
        id: 3,
        title: "1984",
        description: "A dystopian novel set in a totalitarian society ruled by Big Brother.",
        image: "https://covers.openlibrary.org/b/id/7222246-L.jpg"
    },
    {
        id: 4,
        title: "The Great Gatsby",
        description: "A novel about the American dream, love, and tragedy in the Jazz Age.",
        image: "https://covers.openlibrary.org/b/id/10437881-L.jpg"
    },
    {
        id: 5,
        title: "Pride and Prejudice",
        description: "A romantic novel of manners written by Jane Austen.",
        image: "https://covers.openlibrary.org/b/id/10056860-L.jpg"
    },
    {
        id: 6,
        title: "Harry Potter and the Sorcerer's Stone",
        description: "The first book in the magical Harry Potter series.",
        image: "https://covers.openlibrary.org/b/id/7984916-L.jpg"
    },
    {
        id: 7,
        title: "The Hobbit",
        description: "A fantasy adventure of Bilbo Baggins on his journey to win a share of treasure guarded by a dragon.",
        image: "https://covers.openlibrary.org/b/id/6979861-L.jpg"
    },
    {
        id: 8,
        title: "The Catcher in the Rye",
        description: "A story about teenage rebellion and alienation told by Holden Caulfield.",
        image: "https://covers.openlibrary.org/b/id/8231856-L.jpg"
    },
    {
        id: 9,
        title: "The Alchemist",
        description: "A fable about following your dreams and listening to your heart.",
        image: "https://covers.openlibrary.org/b/id/9283897-L.jpg"
    },
    {
        id: 10,
        title: "The Book Thief",
        description: "A story narrated by Death about a girl who finds solace in stealing books in Nazi Germany.",
        image: "https://covers.openlibrary.org/b/id/9324651-L.jpg"
    },
    {
        id: 11,
        title: "Brave New World",
        description: "A futuristic society controlled by technology and conditioning.",
        image: "https://covers.openlibrary.org/b/id/10256355-L.jpg"
    },
    {
        id: 12,
        title: "The Road",
        description: "A post-apocalyptic journey of a father and his son.",
        image: "https://covers.openlibrary.org/b/id/8231996-L.jpg"
    },
    {
        id: 13,
        title: "Little Women",
        description: "The coming-of-age story of four sisters during the Civil War.",
        image: "https://covers.openlibrary.org/b/id/10598900-L.jpg"
    },
    {
        id: 14,
        title: "Frankenstein",
        description: "A gothic novel about science, creation, and humanity.",
        image: "https://covers.openlibrary.org/b/id/11051694-L.jpg"
    },
    {
        id: 15,
        title: "The Fault in Our Stars",
        description: "A touching romance between two teenagers with cancer.",
        image: "https://covers.openlibrary.org/b/id/7268374-L.jpg"
    },
    {
        id: 16,
        title: "Dune",
        description: "A science fiction epic set on the desert planet Arrakis.",
        image: "https://covers.openlibrary.org/b/id/10610484-L.jpg"
    },
    {
        id: 17,
        title: "Moby-Dick",
        description: "The tale of obsession and revenge against the white whale.",
        image: "https://covers.openlibrary.org/b/id/7222256-L.jpg"
    },
    {
        id: 18,
        title: "The Girl on the Train",
        description: "A psychological thriller filled with twists and secrets.",
        image: "https://covers.openlibrary.org/b/id/9281483-L.jpg"
    },
    {
        id: 19,
        title: "Gone Girl",
        description: "A suspenseful story of a missing wife and the secrets behind a marriage.",
        image: "https://covers.openlibrary.org/b/id/8172225-L.jpg"
    },
    {
        id: 20,
        title: "The Kite Runner",
        description: "A novel of friendship, betrayal, and redemption in Afghanistan.",
        image: "https://covers.openlibrary.org/b/id/8235263-L.jpg"
    }
]



export const addBook = (book) => {
    book.push({
        id: books.length + 1,
        ...book
    })
}