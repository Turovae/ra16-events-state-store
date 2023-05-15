import PropTypes from 'prop-types';
import ShopItem from './ShopItem/ShopItem';
import './ListView.css';

const ListView = (props) => {

  const { items } = props;

  return (
    <>
      <ul className='view-list'>
        {items.map((item, i) => <ShopItem key={i} item={item} /> )}
      </ul>
    </>
  )
}

ListView.propTypes = {
  items: PropTypes.array,
}

export default ListView;
