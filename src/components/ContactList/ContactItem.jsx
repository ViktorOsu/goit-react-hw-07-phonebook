import PropTypes from 'prop-types';
import {
  ContItem,
  ContactName,
  ContactNbr,
  DeleteBtn,
} from './ContactList.styled';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ContItem>
      <ContactName> {name}: </ContactName>
      <ContactNbr>{number}</ContactNbr>
      <DeleteBtn type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DeleteBtn>
    </ContItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
