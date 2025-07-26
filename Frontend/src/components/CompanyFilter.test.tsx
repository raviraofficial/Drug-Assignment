import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CompanyFilter from "./CompanyFilter";

describe("CompanyFilter", () => {
  it("renders company dropdown and triggers change", async () => {
    const companies = [
      "Merck Sharp & Dohme Corp.",
      "Jafra cosmetics International",
      "Jubilant HollisterStier LLC",
    ];
    const handleChange = jest.fn();

    render(
      <CompanyFilter
        companies={companies}
        selected=""
        onChange={handleChange}
      />
    );

    // Open the dropdown (Material UI uses a div, not a real select)
    const combobox = screen.getByRole("combobox");
    expect(combobox).toBeInTheDocument();

    await userEvent.click(combobox); // opens MUI select dropdown

    // Now find and click the desired option
    const option = await screen.findByText("Jafra cosmetics International");
    await userEvent.click(option);

    // Callback should be called
    expect(handleChange).toHaveBeenCalledWith("Jafra cosmetics International");
  });
});
