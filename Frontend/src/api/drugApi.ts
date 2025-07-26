import axios from "axios";
import type { DrugList } from "../types/DrugType";
import { API_BASE } from "../config/env";

/**
 *  Fetches the list of drugs from the API.
 * @param company Optional company name to filter drugs by.
 * @returns {Promise<DrugList>} A promise that resolves to a list of drugs.
 */
export const fetchDrugs = async (company?: string): Promise<DrugList> => {
  const response = await axios.get(`${API_BASE}/drugs`, {
    params: company ? { company } : {},
  });
  return response.data;
};

/**
 * Fetches the list of companies from the API.
 * @returns {Promise<string[]>} A promise that resolves to an array of company names.
 */
export const fetchCompanies = async (): Promise<string[]> => {
  const response = await axios.get(`${API_BASE}/companies`);
  return response.data;
};
