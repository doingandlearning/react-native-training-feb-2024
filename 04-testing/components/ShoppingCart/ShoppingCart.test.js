import React from "react";
import { render } from "@testing-library/react-native";
import ShoppingCart from "../ShoppingCart";
import * as CalculateTotalModule from "../../utils/calculateTotal";

describe("ShoppingCart", () => {
  it("renders the total price calculated by calculateTotal", () => {
    // Mock the calculateTotal function
    const mockCalculateTotal = jest.spyOn(
      CalculateTotalModule,
      "calculateTotal"
    );
    mockCalculateTotal.mockReturnValue(10);

    const items = [{ name: "Apple", price: 1.0, quantity: 3 }];

    const { getByText } = render(<ShoppingCart items={items} />);

    expect(getByText("Total: $10")).toBeTruthy();
    expect(mockCalculateTotal).toHaveBeenCalledWith(items);

    // Restore the original implementation
    mockCalculateTotal.mockRestore();
  });
});
