import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/UI/Loader/Loader';
import { ContactList } from 'components/ContactList/ContactList';
import { MainTitle } from 'pages/Contacts/Contacts.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <MainTitle>Phonebook</MainTitle>
      </Helmet>
      <ContactForm />
      {isLoading && !error && <Loader />}
      <Filter />
      <ContactList />
    </>
  );
}