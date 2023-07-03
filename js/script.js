const firstBook = {
  title: "The Last Kingdom",
  coverImage:
    "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
};

const { title: firstTitle, coverImage: firstCoverImage = " v  " } = firstBook;

console.log(firstTitle); // The Last Kingdom
console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg
