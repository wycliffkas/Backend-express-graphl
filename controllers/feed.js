exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ title: "wyco kas", content: "hello there" }],
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;

  //create post in the db

  res.status(201).json({
    message: "post created successfully",
    post: { id: new Date().toISOString(), title: title, content: content },
  });
};
