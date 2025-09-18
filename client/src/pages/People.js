import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { styled } from "@stitches/react";
import { Button, Heading, Span, Select } from "../styling/styles";
import { Card, CardHeader } from "../components/Card";

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
        <Card key={p.id} style={{ width: "100%", maxWidth: 700 }}>
          <CardHeader style={{ gap: 12, flexWrap: "wrap" }}>
            <Name>
              <Span>{p.name}</Span>
            </Name>
            <ActionRow>
              <CompanySelect
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
              </CompanySelect>
              <AssignButton onClick={() => handleAssign(p.id)}>
                Assign
              </AssignButton>
            </ActionRow>
          </CardHeader>
        </Card>
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

const ActionRow = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  flexShrink: 0,
});

const Name = styled("div", {
  flex: 1,
  minWidth: 180,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

const CompanySelect = styled(Select, {
  width: "220px",
  maxWidth: "60vw",
});

const AssignButton = styled(Button, {
  marginLeft: 0,
});
export default People;
