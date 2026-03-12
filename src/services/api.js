const API_URL = "https://dev.codeleap.co.uk/careers/";

export async function getPosts() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function createPost(username, title, content) {
  await fetch(API_URL, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ username, title, content })
  });
}

export async function deletePost(id) {
  await fetch(`${API_URL}${id}/`, { method: "DELETE" });
}

export async function updatePost(id, title, content) {
  await fetch(`${API_URL}${id}/`, {
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ title, content })
  });
}