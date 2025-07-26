import Drug from "../models/Drug";
import { getDrugs } from "../service/drug.service";

jest.mock("../models/Drug")

describe("getDrugs", () => {
  it("should return drugs", async () => {
    const mockDrugs = [{ name: "Drug A" }, { name: "Drug B" }];
    (Drug.find as jest.Mock).mockResolvedValue(mockDrugs);

    const result = await getDrugs();
    expect(result).toEqual(mockDrugs);
  });
});

describe("getDrugs with company filter", () => {
  it("should return drugs filtered by company", async () => {
    const mockDrugs = [{ name: "Drug A", company: "Company A" }];
    (Drug.find as jest.Mock).mockResolvedValue(mockDrugs);

    const result = await getDrugs("Company A");
    expect(result).toEqual(mockDrugs);
    expect(Drug.find).toHaveBeenCalledWith({ company: "Company A" });
  });
});

import { getCompanies } from "../service/drug.service"; 

describe("getCompanies", () => {
  it("should return unique company names", async () => {
    const mockCompanies = ["Company A", "Company B"];
    (Drug.distinct as jest.Mock).mockResolvedValue(mockCompanies);

    const result = await getCompanies();
    expect(result).toEqual(mockCompanies);
    expect(Drug.distinct).toHaveBeenCalledWith("company");
  });
});

