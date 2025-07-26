import React from "react";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DrugTable from "./DrugTable";
import type { Drug } from "../types/DrugType";

const generateDrugs = (count: number): Drug[] =>
  Array.from({ length: count }, (_, i) => ({
    code: `C${i + 1}`,
    genericName: `Generic${i + 1}`,
    brandName: `Brand${i + 1}`,
    company: `Company${i + 1}`,
    launchDate: new Date(2022, 0, i + 1).toISOString(),
  }));

describe("DrugTable", () => {
  it("renders the table with correct rows per page", () => {
    const drugs = generateDrugs(8);
    render(<DrugTable drugs={drugs} />);

    // Should show 5 rows per page by default
    const rows = screen.getAllByRole("row");
    // rows includes the header row, so expect 6 total rows
    expect(rows).toHaveLength(6); // 1 header + 5 data rows

    // Check for visible drug name
    expect(screen.getByText("Generic1 (Brand1)")).toBeInTheDocument();
  });

  it("changes page when clicking next pagination button", async () => {
    const drugs = generateDrugs(8);
    render(<DrugTable drugs={drugs} />);

    const nextPageButton = screen.getByLabelText("Go to next page");
    await userEvent.click(nextPageButton);

    // Check that a row from page 2 is visible
    expect(screen.getByText("Generic6 (Brand6)")).toBeInTheDocument();
  });

  it("changes rows per page", async () => {
    const drugs = generateDrugs(15);
    render(<DrugTable drugs={drugs} />);

    // Open the rows-per-page dropdown
    const dropdown = screen.getByLabelText("Rows per page:");
    await userEvent.click(dropdown);

    // Select 10 rows per page
    const listbox = within(screen.getByRole("listbox"));
    await userEvent.click(listbox.getByText("10"));

    // Now there should be 11 rows total (1 header + 10 rows)
    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(11);
  });

  it("resets page to 0 on drug list change", async () => {
    const { rerender } = render(<DrugTable drugs={generateDrugs(8)} />);
    const nextPageButton = screen.getByLabelText("Go to next page");
    await userEvent.click(nextPageButton); // Go to page 1

    // Now update with a shorter drug list (less than one full page)
    rerender(<DrugTable drugs={generateDrugs(3)} />);

    // Should reset to page 0 and show Generic1
    expect(screen.getByText("Generic1 (Brand1)")).toBeInTheDocument();
  });
});
