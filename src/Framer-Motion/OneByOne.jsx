import { motion } from "framer-motion";
export default function OneByOne() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        width: "100%",
        justifyContent: "center",
        flexFlow: "wrap",
        marginTop: "450px",
      }}
    >
      <motion.div
        initial={{ y: "-50px", opacity: 0.4 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}
        style={{ height: 240, width: 240, background: "green" }}
      ></motion.div>
      <motion.div
        initial={{ y: "-50px", opacity: 0.4 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
        style={{ height: 240, width: 240, background: "green" }}
      ></motion.div>
      <motion.div
        initial={{ y: "-50px", opacity: 0.4 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
        style={{ height: 240, width: 240, background: "green" }}
      ></motion.div>
      <motion.div
        initial={{ y: "-50px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
        style={{ height: 240, width: 240, background: "green" }}
      ></motion.div>
      <motion.div
        initial={{ y: "-50px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        style={{ height: 240, width: 240, background: "green" }}
      ></motion.div>
      <motion.div
        initial={{ y: "-50px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{ height: 240, width: 240, background: "green" }}
      ></motion.div>
      <motion.div
        initial={{ y: "-50px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{ height: 240, width: 240, background: "green" }}
      ></motion.div>
      <motion.div
        initial={{ y: "-50px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{ height: 240, width: 240, background: "green" }}
      ></motion.div>
      <motion.div
        initial={{ y: "-50px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{ height: 240, width: 240, background: "green" }}
      ></motion.div>
      <motion.div
        initial={{ y: "-50px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{ height: 240, width: 240, background: "green" }}
      ></motion.div>
      <motion.div
        initial={{ y: "-50px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{ height: 240, width: 240, background: "green" }}
      ></motion.div>
      <motion.div
        initial={{ y: "-50px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{ height: 240, width: 240, background: "green" }}
      ></motion.div>
      <motion.div
        initial={{ y: "-50px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{ height: 240, width: 240, background: "green" }}
      ></motion.div>
      <motion.div
        initial={{ y: "-50px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{ height: 240, width: 240, background: "green" }}
      ></motion.div>
      <motion.div
        initial={{ y: "-50px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{ height: 240, width: 240, background: "green" }}
      ></motion.div>
    </div>
  );
}
