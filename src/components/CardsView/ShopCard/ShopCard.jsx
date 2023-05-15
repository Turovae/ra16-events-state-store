import PropTypes from 'prop-types';
import './ShopCard.css';

const ShopCard = (props) => {
  const { name, price, color, img } = props.card;

  return (
    <div className='shop-cards__card'>
      <h3 className='card__name'>{name}</h3>
      <div className="card__color">{color}</div>
      <div className="card__img" style={{
        backgroundImage: `url(${img})`
      }}/>
      <div className="card__cart-row">
        <div className="card__price">${price}</div>
        <button className='item__add small-button'>Add to cart</button>
      </div>
    </div>
  );
};

ShopCard.propTypes = {
  card: PropTypes.object,
}

export default ShopCard;
