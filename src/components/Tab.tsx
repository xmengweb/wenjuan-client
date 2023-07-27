import React, { memo, useState } from "react";
import classnames from "classnames";
import styles from "./tab.module.less";

interface IPropItem {
  key: string;
  label: React.ReactNode;
  children: React.ReactNode;
}

interface ITabProps {
  items: Array<IPropItem>;
}

const Tab: React.FC<ITabProps> = memo(({ items }) => {
  const [active, setActive] = useState(0);

  function handleChange(index: number) {
    if (index !== active) setActive(index);
  }

  return (
    <div className={styles.tabs}>
      <div className={styles["tabs-nav-list"]}>
        {items.map((item, index) => {
          return (
            <div
              className={classnames({
                [styles["tabs-nav-list-tab"]]: true,
                [styles["tabs-nav-list-tab-active"]]: index === active,
              })}
              key={item.key}
              onClick={() => handleChange(index)}>
              {item.label}
            </div>
          );
        })}
      </div>
      <div className={styles["tabs-content"]}>{items[active].children}</div>
    </div>
  );
});

export default Tab;
