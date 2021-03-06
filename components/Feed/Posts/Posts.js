import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../../firebase";
import Post from "./Post";
function Posts({ posts }) {
  const [realtimePost] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );
  return (
    <div>
      {realtimePost
        ? realtimePost?.docs.map((post) => (
            <Post
              key={post.id}
              name={post.data().name}
              message={post.data().message}
              email={post.data().email}
              timestamp={post.data().timestamp}
              profilePic={post.data().profilePic}
              postImage={post.data().postImage}
            />
          ))
        : posts.map((post) => (
            <Post
              key={post.id}
              name={post.name}
              message={post.message}
              email={post.email}
              timestamp={post.timestamp}
              profilePic={post.profilePic}
              postImage={post.postImage}
            />
          ))}
    </div>
  );
}

export default Posts;
