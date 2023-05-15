import { useState, createElement } from 'react';
import IconSwitch from './IconSwitch/IconSwitch';
import CardsView from './CardsView/CardsView';
import ListView from './ListView/ListView';
import products from '../data/data';

const Store = () => {
  const icons = [ 'view_module', 'view_list' ];
  const STATE_LIST = 0;
  const STATE_MODULE = 1;

  const [ state, setState ] = useState(STATE_LIST);

  const changeState = () => {
    if (state === STATE_LIST) {
      setState(STATE_MODULE);
    } else {
      setState(STATE_LIST);
    }
  }

  return (
    <div className="store">
      <IconSwitch icon={icons[state]} onSwitch={changeState} />
      {createElement(
        state === STATE_LIST ? ListView : CardsView,
        { items: products },
      )}
    </div>
  );
}

export default Store;
