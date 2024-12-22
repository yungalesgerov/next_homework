import { getPosts } from '@/pages-layer/post/api/get-posts'
import { Post } from '@/pages-layer/post/config/types'
import { PostPage } from '@/pages-layer/post/page'

const Posts = async () => {
  const posts: Post[] = await getPosts()
  const post = posts[0]

  return <PostPage params={{ id: post.id.toString() }} />
}

export default Posts
