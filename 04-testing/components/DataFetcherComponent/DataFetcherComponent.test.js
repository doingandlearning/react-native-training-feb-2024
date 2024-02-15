import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import DataFetcherComponent from ".";
import { useFetchService } from "../../hooks/useFetchService";

jest.mock("../../hooks/useFetchService");

describe("DataFetcherComponent", () => {
  it("fetches and displays data", async () => {
    const mockData = { message: "Hello world!" };
    useFetchService.mockImplementation(() =>
      jest.fn(() => Promise.resolve(mockData))
    );

    const { getByText } = render(
      <DataFetcherComponent url="https://example.com/data" />
    );

    // The waitFor function is used to wait for the component to update and
    // display the fetched data.
    await waitFor(() => {
      expect(getByText(JSON.stringify(mockData))).toBeTruthy();
    });
  });

  it("displays an error message when the fetch fails", async () => {
    const errorMessage = "Failed to fetch";
    useFetchService.mockImplementation(() =>
      jest.fn(() => Promise.reject(new Error(errorMessage)))
    );

    const { getByText } = render(
      <DataFetcherComponent url="https://example.com/data" />
    );

    await waitFor(() => {
      expect(getByText(`Error: ${errorMessage}`)).toBeTruthy();
    });
  });
});
