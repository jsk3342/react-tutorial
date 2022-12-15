import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  

  return (
    <div>
      <header style={{ background: 'lightgray', padding: 16, fontSize: 24 }}>
        {/* <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글 목록</button> */}header
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
