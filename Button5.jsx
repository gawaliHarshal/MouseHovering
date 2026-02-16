function Button5() {
    const handleClick = () => {
      alert("React Event Triggered ⚡");
    };
    const handleHover = () => {
      console.log("Mouse Hovering");
    };
    return (
      <div>
        <h1>Functions & Events</h1>
        <button onClick={handleClick}>Click Me</button>
        <p onMouseOver={handleHover}>
          Hover over this text
        </p>
      </div>
    );
  }
  export default Button5;