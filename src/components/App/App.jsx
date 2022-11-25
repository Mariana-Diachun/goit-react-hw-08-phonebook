// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { selectError, selectIsLoading } from 'redux/selectors';
// import { fetchContacts } from 'redux/operations';

// import { Layout } from 'components/Layout/Layout';
// import { ContactForm } from 'components/ContactForm/ContactForm';
// import { Filter } from 'components/Filter/Filter';
// import { ContactList } from 'components/ContactList/ContactList';
// import { Loader } from 'components/Loader/Loader';
import { Layout } from 'components/Layout/Layout';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';

const HomePage = lazy(() => import('pages/Home/Home'));
const RegisterPage = lazy(() => import('pages/Register/Register'));
const LoginPage = lazy(() => import('pages/Login/Login'));
const ContactsPage = lazy(() => import('pages/Contacts/Contacts'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
