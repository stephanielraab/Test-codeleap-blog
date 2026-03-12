import {useEffect,useState} from "react"

import Header from "../components/Header"
import CreatePost from "../components/CreatePost"
import PostCard from "../components/PostCard"
import DeleteModal from "../components/DeleteModal"
import EditModal from "../components/EditModal"

import {getPosts,createPost,deletePost,updatePost} from "../services/api"

function Home(){

    const [posts,setPosts] = useState([])
    const [deleteItem,setDeleteItem] = useState(null)
    const [editItem,setEditItem] = useState(null)

    const username = localStorage.getItem("username")
        useEffect(()=>{
        loadPosts()
        },[])

async function loadPosts(){
    const data = await getPosts()
    setPosts(data.results)
}

async function handleCreate(title,content){
    await createPost(username,title,content)
    loadPosts()
}

async function handleDelete(id){
    await deletePost(id)
    setDeleteItem(null)
    loadPosts()
}

async function handleEdit(id,title,content){
    await updatePost(id,title,content)
    setEditItem(null)
    loadPosts()
}

return (
  <div className="container">
    <Header />
    
    <main className="home-main-content">
      <CreatePost onCreate={handleCreate} />

      <div className="posts-list">
        {posts.map(post => (
          <PostCard
            key={post.id}
            post={post}
            username={username}
            onDelete={setDeleteItem}
            onEdit={setEditItem}
          />
        ))}
      </div>
    </main>

    {/* Modais permanecem aqui embaixo */}
    {deleteItem && (
      <DeleteModal
        post={deleteItem}
        onConfirm={() => handleDelete(deleteItem.id)} 
        onCancel={() => setDeleteItem(null)}
      />
    )}

    {editItem && (
      <EditModal
        post={editItem}
        onSave={handleEdit}
        onCancel={() => setEditItem(null)}
      />
    )}
  </div>
);

}

export default Home;
