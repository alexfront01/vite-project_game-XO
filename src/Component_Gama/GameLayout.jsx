import { Information } from "./Information/Information";
import { Field } from "./Filed/Field ";

export const GameLayout = () => {
  return (
    <>
      <h1>Добро пожаловать в игру Крестики - Нолики</h1>
      <Information />
      <Field />
    </>
  );
};
