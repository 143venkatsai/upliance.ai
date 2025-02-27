import React from "react";
import { motion } from "framer-motion";

const UserItem = (props) => {
  const { userDetails } = props;
  const { name, address, email, phone } = userDetails;

  return (
    <motion.li
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="grid sm:grid-cols-1 md:grid-cols-2 border border-slate-600 rounded-lg mb-3 p-4"
    >
      <h1>
        <strong>Name: </strong>
        {name}
      </h1>
      <p>
        <strong>Address: </strong>
        {address}
      </p>
      <p>
        <strong>Email: </strong>
        {email}
      </p>
      <p>
        <strong>Phone No: </strong>
        {phone}
      </p>
    </motion.li>
  );
};

export default UserItem;
