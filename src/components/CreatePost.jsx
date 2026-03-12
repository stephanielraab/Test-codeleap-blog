import { useState } from "react";

function CreatePost({ onCreate }) {

  const [title,setTitle] = useState("")
  const [content,setContent] = useState("")

  function handleCreate(){
    onCreate(title,content)
    setTitle("")
    setContent("")
  }

  return(
    <div className="create-post">

      <h3>What's on your mind?</h3>
        <label>Title</label>
        <input
        placeholder="Hello world"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        />
        <label>Content</label>
        <textarea
        placeholder="Content here"
        value={content}
        onChange={(e)=>setContent(e.target.value)}
        />

        <button
        disabled={!title || !content}
        onClick={handleCreate}
        >
        CREATE
        </button>

    </div>
  )
}

export default CreatePost;