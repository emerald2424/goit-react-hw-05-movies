import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Layout } from '../Layout';
import { Toaster } from 'react-hot-toast';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import css from '../SharedLayout/SharedLayout.module.css';

const StyledLink = styled(NavLink)`
    color: black;
    &.active {
      color: salmon;
    }
`;

export const SharedLayout = () => {
  
  return (
    <>
      <header>
        <Toaster toastOptions={{ duration: 2000, position: 'top-right' }} />
        <nav className={css.Nav}>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </header>
      <main>
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Layout>
      </main>
    </>
  );
};