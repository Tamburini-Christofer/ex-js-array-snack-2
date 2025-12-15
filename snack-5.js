function getBooks(ids) {
  const requests = ids.map(id =>
    fetch(`http://localhost:3333/books/${id}`)
      .then(res => res.json())
  );

  return Promise.all(requests);
}

