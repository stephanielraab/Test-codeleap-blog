import { useState } from "react";

function EditModal({ post, onSave, onCancel }) {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Edit item</h3>

        <div className="edit-form">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Hello world"
          />

          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content here"
            rows="4"
          />
        </div>

        <div className="modal-actions">
          <button className="btn-cancel" onClick={onCancel}>
            Cancel
          </button>
          <button 
            className="btn-save" 
            disabled={!title || !content} // Opcional: desabilita se estiver vazio
            onClick={() => onSave(post.id, title, content)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;