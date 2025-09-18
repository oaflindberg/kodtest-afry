import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { styled } from "@stitches/react";
import { Button, Heading, Span, Select } from "../styling/styles";

const API = "http://localhost:4000";

const People = () => {
  const [persons, setPersons] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const personsRes = await axios.get(`${API}/persons`);
      setPersons(personsRes.data.filter((p) => !p.company));
      const companiesRes = await axios.get(`${API}/companies`);
      setCompanies(companiesRes.data);
    };
    fetchData();
  }, []);

  const handleAssign = async (personId) => {
    const companyId = selectedCompany[personId];
    if (!companyId) return;

    await axios.put(`${API}/persons/${personId}/company`, { companyId });

    const company = companies.find((c) => c.id === Number(companyId));
    const companyName = company ? company.name : "Unknown";

    const person = persons.find((p) => p.id === personId);
    const personName = person ? person.name : "Unknown";

    toast.success(`${personName} assigned to ${companyName}`);

    setPersons(persons.filter((p) => p.id !== personId));
  };

  return (
    <Container>
      <Heading>Unassigned People</Heading>
      {persons.length === 0 && <p>All people are assigned to a company.</p>}
      {persons.map((p) => (
        <PersonRow key={p.id}>
          <Span>{p.name}</Span>
          <ActionRow>
            <Select
              value={selectedCompany[p.id] || ""}
              onChange={(e) =>
                setSelectedCompany({
                  ...selectedCompany,
                  [p.id]: e.target.value,
                })
              }
            >
              <option value="">Select company</option>
              {companies.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </Select>
            <Button onClick={() => handleAssign(p.id)}>Assign</Button>
          </ActionRow>
        </PersonRow>
      ))}
    </Container>
  );
};

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
});

const PersonRow = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "0.25rem",
  marginBottom: "1rem",
});

const ActionRow = styled("div", {
  display: "flex",
  gap: "0.5rem",
});
export default People;
