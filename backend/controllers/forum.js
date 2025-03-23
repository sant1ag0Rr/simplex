// Datos en memoria (simulando publicaciones del foro)
let forumPosts = [];

const getForumPosts = (req, res) => {
  res.json(forumPosts);
};

const createForumPost = (req, res) => {
  const { title, content, author, category } = req.body;

  const newPost = {
    id: forumPosts.length + 1,
    title,
    content,
    author,
    category,
    replies: [],
    createdAt: new Date(),
  };

  forumPosts.push(newPost);
  res.json({ message: 'Publicación creada exitosamente', post: newPost });
};

const getForumPostById = (req, res) => {
  const postId = parseInt(req.params.id);
  const post = forumPosts.find((p) => p.id === postId);

  if (!post) {
    return res.status(404).json({ message: 'Publicación no encontrada' });
  }

  res.json(post);
};

const replyToForumPost = (req, res) => {
  const postId = parseInt(req.params.id);
  const { content, author } = req.body;

  const post = forumPosts.find((p) => p.id === postId);

  if (!post) {
    return res.status(404).json({ message: 'Publicación no encontrada' });
  }

  const newReply = {
    id: post.replies.length + 1,
    content,
    author,
    createdAt: new Date(),
  };

  post.replies.push(newReply);
  res.json({ message: 'Respuesta agregada exitosamente', reply: newReply });
};

module.exports = { getForumPosts, createForumPost, getForumPostById, replyToForumPost };