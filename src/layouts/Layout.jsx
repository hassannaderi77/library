import styles from "./Layout.module.css"

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>
          <a href="">BootCamp</a> | React.js Full Course
          </p>
      </header>
      {children}
      <footer className={styles.footer}><p>Developed By Milad With</p></footer>
    </>
  );
}

export default Layout;
