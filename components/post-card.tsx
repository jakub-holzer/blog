import { Author } from "lib/author";
import { PostMetadata } from "lib/post";
import Link from "next/link";
import ClientRender from "./client-render";

interface Props {
  post: PostMetadata;
  author: Author;
  showCover?: boolean;
}

const PostCard: React.FC<Props> = ({ post, author, showCover = false }) => {
  const formatDate = (stamp: string) =>
    new Date(stamp).toLocaleDateString("cs-CZ", { dateStyle: "medium" });
  return (
    <Link href={post.path} className="post-card-link">
      <div className="post-card">
        {showCover && (
          <img
            alt=""
            loading="lazy"
            width="100%"
            style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
            src={post.coverImageUrl}
          />
        )}
        <div className="post-card-meta">
          <div className="post-card-author">
            <ClientRender>{formatDate(post.date)}</ClientRender>
            {" • "}
            {author.name}
          </div>
          <h2>{post.title}</h2>
          <p className="post-card-description">{post.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
