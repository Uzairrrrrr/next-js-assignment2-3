export default function Home() {
  return (
    <div className="Home">
      <div className="Profile">
        <div className="Image">
          <img src="/static/photos/mypic.jpeg" alt="Profile Pic" />
        </div>
        <div className="TextContent">
          <h1>Welcome to My Profile</h1>
          <p>
            Hi there! This is a simple profile page created using Next.js.
          </p>
        </div>
      </div>
    </div>
  );
}
