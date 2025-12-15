const tagCounts = books.reduce((acc, book) => {
  book.tags.forEach(tag => {
    acc[tag] = (acc[tag] || 0) + 1;
  });
  return acc;
}, {});

console.log(tagCounts);