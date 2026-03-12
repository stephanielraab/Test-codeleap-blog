import { timeAgo } from "../utils/timeAgo";

function PostCard({ post, username, onDelete, onEdit }) {

  const isOwner = username === post.username;

  return (
    <div className="post">
      <div className="post-header">
        <h3>{post.title}</h3>

        {isOwner && (
          <div className="post-actions">
              <button className="icon-btn" onClick={() => onDelete(post)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill="white"/>
              </svg>
            </button>

            {/* Botão de Editar */}
            <button className="icon-btn" onClick={() => onEdit(post)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="white"/>
              </svg>
            </button>
          </div>
        )}
      </div>
      
      <div className="post-body">
        <div className="post-info">
          <span>@{post.username}</span>
          <span>{timeAgo(post.created_datetime)}</span>
        </div>

        <p>{post.content}</p>
      </div>
    </div>
  );
}

export default PostCard;