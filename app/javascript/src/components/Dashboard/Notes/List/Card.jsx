import React from "react";

import classnames from "classnames";
import PropTypes from "prop-types";

const Card = ({ className = "", children, ...otherProps }) => {
  return (
    <div
      className={classnames(
        "px-4 w-full border py-2 flex flex-col space-y-2",
        className
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const Header = ({ children, className }) => {
  return (
    <div className={classnames("flex justify-between", className)}>
      {children}
    </div>
  );
};

const Body = ({ children, className }) => {
  return (
    <div className={classnames("overflow-auto", className)}>{children}</div>
  );
};

const Footer = ({ children, className }) => {
  return (
    <div
      className={classnames("flex justify-between border-t py-2", className)}
    >
      {children}
    </div>
  );
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
