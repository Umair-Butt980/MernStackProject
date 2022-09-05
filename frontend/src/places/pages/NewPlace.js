import React from "react";

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input type="text" label-="title" validators="check" />
    </form>
  );
};

export default NewPlace;
