import { render, fireEvent } from "@testing-library/react-native";
import ShoppingList from ".";

test("given empty shopping list a user cam add to it", () => {
  jest.mock;
  const { getByText, getByPlaceholderText, getAllByText } = render(
    <ShoppingList />
  );
  //   console.log(component);
  const input = getByPlaceholderText("Enter shopping item");
  fireEvent.changeText(input, "bananas");
  expect(input.props.value).toBe("bananas");
  fireEvent.press(getByText("Add the item to list"));
  expect(input.props.value).toBe("");
  fireEvent.press(getByText("Add the item to list"));

  const bananas = getAllByText("bananas");
  expect(bananas).toHaveLength(1);
});
