function Header() {
  return (
    <div className="header">
      <a href="trang-home.html">
        <h3>Logo</h3>
      </a>
      <div class="nav-link">
        <div class="nav-link-item">
          <a href="list.html">
            <h4>list</h4>
          </a>
          <div class="sub-nav">
            <div class="sub-nav-item">Item 1</div>
            <div class="sub-nav-item">Item 2</div>
          </div>
        </div>
        <div class="nav-link-item">
          <a href="about.html">
            <h4>about</h4>
          </a>
        </div>
      </div>
      <img class="avatar" src="../211125265_56b64a6e37_o.jpg" alt="" />
    </div>
  );
}
export default Header;
