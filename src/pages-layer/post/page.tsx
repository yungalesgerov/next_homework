import { getPosts } from './api/get-posts'
import { Post } from './config/types'

export async function generateStaticParams() {
  const posts: Post[] = await getPosts()

  return posts.map((post) => ({
    id: post.id.toString(),
  }))
}

export const PostPage = async ({ params }: { params: { id: string } }) => {
  const posts: Post[] = await getPosts()
  const post = posts.find((p) => p.id.toString() === params.id)

  if (!post) {
    return <p>Пост не найден</p>
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <div>{post.body}</div>
    </article>
  )
}
