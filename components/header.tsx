const Header = () => {
  return (
    <>
      <header>
        <h1>TODO LIST</h1>
      </header>

      <style jsx>{`
        header {
          background-color: #333;
          color: #fff;
          padding: 20px;
        }
        h1 {
          font-size: 1.5em;
          margin: 0;
        }
      `}</style>
    </>
  );
};

export default Header;
