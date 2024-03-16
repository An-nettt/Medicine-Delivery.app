import { Outlet, Link } from 'react-router-dom';

const SharedLayout = () => {
  return (
    // <Container>
    <div>
      {/* <Header> */}
      <nav>
        <Link to="/" end>
          Shops
        </Link>
        <Link to="/cart">Shopping Cart</Link>
      </nav>

      {/* </Header> */}
      <Outlet />
    </div>
    // </Container>
  );
};

export default SharedLayout;
