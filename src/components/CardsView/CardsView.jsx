import PropTypes from 'prop-types';
import ShopCard from './ShopCard/ShopCard';
import './CardView.css';

const CardsView = (props) => {

  const { items } = props

  return (
    <div className='view-cards'>
      {items.map((item, i) => <ShopCard key={i} card={item} />)}
    </div>
  )
}

CardsView.propTypes = {
  items: PropTypes.array,
}

export default CardsView;
