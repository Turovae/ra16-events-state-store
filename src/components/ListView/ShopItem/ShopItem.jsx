import PropTypes from 'prop-types';
import './ShopItem.css';

const ShopItem = (props) => {
  const { name, price, color, img } = props.item;
  return (
    <li className='view-list__item'>
      <div className="item__column item__img" style={{
        backgroundImage: `url(${img})`,
      }} />
      <div className="item__column item__name">{name}</div>
      <div className="item__column item__color">{color}</div>
      <div className="item__column item__price">${price}</div>
      <div className="item__column item__select">
        <button className='item__add'>Add to cart</button>
      </div>
    </li>
  );
}

ShopItem.propTypes = {
  item: PropTypes.object,
}

export default ShopItem;
