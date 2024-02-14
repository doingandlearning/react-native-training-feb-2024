import { render, fireEvent } from "@testing-library/react-native";
import ShoppingList from ".";

test("given empty shopping list a user cam add to it", () => {
  const { getByText, getByPlaceholderText, getAllByText } = render(
    <ShoppingList />
  );
  //   console.log(component);
  const input = getByPlaceholderText("Enter shopping item");
  fireEvent.changeText(input, "bananas");
  //   expect(input.value).toBe("bananas");
  fireEvent.press(getByText("Add the item to list"));
  fireEvent.press(getByText("Add the item to list"));

  const bananas = getAllByText("bananas");
  expect(bananas).toHaveLength(1);
});
