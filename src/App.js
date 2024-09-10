import Counter from "./features/counter/Counter";
import AddPostsForm from "./features/posts/AddPostsForm";
import PostsList from "./features/posts/PostsList";

function App() {
  return (
    <main className="App">
      {/* <Counter /> */}
      <AddPostsForm />
      <PostsList />
    </main>
  );
}

export default App;
