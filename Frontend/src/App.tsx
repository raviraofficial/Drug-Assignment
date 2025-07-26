import { useEffect, useState } from "react";
import { fetchDrugs, fetchCompanies } from "./api/drugApi";
import DrugTable from "./components/DrugTable";
import CompanyFilter from "./components/CompanyFilter";
import type { DrugList } from "./types/DrugType";
import { Box, CircularProgress } from "@mui/material";
import "./App.css";

const App = () => {
  const [drugs, setDrugs] = useState<DrugList>([]);
  const [filteredDrugs, setFilteredDrugs] = useState<DrugList>([]);
  const [companies, setCompanies] = useState<string[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    loadData();
  }, []);

  // Function to load drugs and companies data
  const loadData = async () => {
    setLoading(true);
    try {
      const [drugData, companyData] = await Promise.all([
        fetchDrugs(),
        fetchCompanies(),
      ]);
      setDrugs(drugData);
      setFilteredDrugs(drugData);
      setCompanies(companyData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedCompany === "") {
      setFilteredDrugs(drugs);
    } else {
      fetchDrugs(selectedCompany).then(setFilteredDrugs);
    }
  }, [selectedCompany, drugs]);

  return (
    <Box className="app-container">
      {loading ? (
        <Box className="loader-container">
          <CircularProgress />
        </Box>
      ) : (
        <Box>
          <Box className="sticky-filter">
            <CompanyFilter
              companies={companies}
              selected={selectedCompany}
              onChange={setSelectedCompany}
            />
          </Box>
          <DrugTable drugs={filteredDrugs} />
        </Box>
      )}
    </Box>
  );
};

export default App;
