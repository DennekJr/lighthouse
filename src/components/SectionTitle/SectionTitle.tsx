import React, { FC } from "react";

export const SectionTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <>
      <h3 style={{ ...styles.title }}>{title.toUpperCase()}</h3>
      <hr style={{ ...styles.hr }} />
    </>
  );
};

const styles: any = {
  hr: {
    width: "50px",
    textAlign: "center",
    display: "flex",
    margin: "auto auto 10px",
    borderTop: "5px solid #7720FB",
  },
  title: {
    textAlign: "center",
    marginTop: "100px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
};
