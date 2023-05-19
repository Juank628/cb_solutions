import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SelectBox.module.scss';

export default function SelectBox({ items = [] }) {
  const [selectedItem, setSelectedItem] = useState(items[0].name || '');

  const selectItem = (e) => {
    setSelectedItem(e.target.name);
  };

  return (
    <div className={styles.container}>
      <div className={styles.sideBar}>
        {items.map((item) => (
          <button key={item.id} type="button" name={item.name} onClick={selectItem} className={styles.serviceLinkDesktop}>{item.name}</button>
        ))}
      </div>
      {items.map((item) => (
        <div key={item.name}>
          <button type="button" name={item.name} onClick={selectItem} className={styles.serviceLinkMobile}>{item.name}</button>
          {selectedItem === item.name ? (
            <div className={styles.service}>
              <div className={styles.info}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className={styles.photo}>
                <img src={item.image} alt="" />
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

SelectBox.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  })).isRequired,
};
