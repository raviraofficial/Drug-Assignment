import Drug from "../models/Drug";


// Get all drugs or filter by company
export const getDrugs = async (company?: string) => {
  if (company) {
    return await Drug.find({ company });
  }
  return await Drug.find();
};

// Get unique companies
export const getCompanies = async (): Promise<string[]> => {
  return await Drug.distinct("company");
};
