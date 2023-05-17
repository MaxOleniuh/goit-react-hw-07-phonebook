import { UlStyled, ButtonStyled, LiStyled } from './List.styled';
import PropTypes from 'prop-types';
import { remove } from 'redux/slice';
import { useDispatch } from 'react-redux';
const List = ({contacts}) => {
  const dispatch = useDispatch();
  return (
    <UlStyled>
      {contacts.map(({ id, number, name }) => (
        <LiStyled key={id}>
          {name}: {number}
          <ButtonStyled onClick={() => dispatch(remove(id))}>Delete</ButtonStyled>
        </LiStyled>
      ))}
    </UlStyled>
  );
};

List.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default List;
