import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Item, Button } from './ContactListItem.styled';
import PropTypes from 'prop-types';

export const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      {name}: {phone}
      <Button onClick={() => dispatch(deleteContact(id))} type="button">
        Delete
      </Button>
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
