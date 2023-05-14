import React, { useState } from 'react';
import styles from './SelectBox.module.scss';

export default function SelectBox({ items = [] }) {
  const [selectedItem, setSelectedItem] = useState(items[0].name || '');

  const selectItem = (e) => {
    setSelectedItem(e.target.name);
  };

  return (
    <div className={styles.container}>
      {items.map((item) => (
        <div key={item.name}>
          <button type="button" name={item.name} onClick={selectItem} className={styles.serviceLink}>{item.name}</button>
          {selectedItem === item.name ? (
            <div className={styles.service}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <img src={item.image} alt="" />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
