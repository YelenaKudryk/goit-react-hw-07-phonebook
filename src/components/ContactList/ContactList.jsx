import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List, Text } from './ContactList.styled';
import { selectVisibleContacts } from 'redux/selectors';
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List>
      {visibleContacts.length > 0 &&
        visibleContacts.map(({ id, name, phone }) => {
          return <ContactListItem key={id} id={id} name={name} phone={phone} />;
        })}

      {visibleContacts.length === 0 && <Text>No matches found</Text>}

      {isLoading && !error && <Loader />}
      {error && <p>{error}</p>}
    </List>
  );
};
