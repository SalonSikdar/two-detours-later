const blogContext = require.context('./', false, /\.json$/);
const rawBlogs = blogContext.keys()
  .filter((key) => !key.startsWith('./_template'))
  .map((key) => blogContext(key));

const blogCategories = [
  'recipes',
  'our stories',
  'travel itineraries',
  'workation',
  'hacks',
  'tech career',
];

const blogs = rawBlogs
  .map((blog) => ({
    ...blog,
    date: blog.date ? new Date(blog.date).toISOString() : new Date().toISOString(),
    tags: Array.isArray(blog.tags) ? blog.tags : [],
  }))
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export { blogs, blogCategories };