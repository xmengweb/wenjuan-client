import React, { memo } from "react";
import classnames from 'classnames'
import styles from "./link.module.less";

interface ILinkProps {
  type?: string;
  href?: string;
  target?: string;
  children: string;
}

const Link: React.FC<ILinkProps> = memo(({ type = "primary", href, target, children }) => {
  return (
    <>
      <a className={classnames(styles.link,styles[`link-${type}`])} href={href} target={target}>
        <span className={styles["link-inner"]}>{children}</span>
      </a>
    </>
  );
});

export default Link;
