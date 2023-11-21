import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { RelayEnvironment } from "./RelayEnvironment";
import { RelayEnvironmentProvider } from "react-relay";

test("renders learn react link", () => {
  render(
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </RelayEnvironmentProvider>
  );
  const linkElement = screen.getByText(/Search user info using the API key/i);
  expect(linkElement).toBeInTheDocument();
});
