export interface Post {
  post: {
    title: string;
    excerpt: string;
    featuredImage: {
      url: string;
    };
    slug: string;
    author: {
      name: string;
      photo: {
        url: string;
      };
    };
    createdAt: string;
  };
}
