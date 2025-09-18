import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { styled } from "@stitches/react";
import { Input, Select, Button, ListItem, Paragraph } from "../styling/styles";
import { Card, CardHeader, CardTitle, CardContent } from "../components/Card";

const API = "http://localhost:4000";

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [selectedCompanyId, setSelectedCompanyId] = useState("");
  const [newCompanyName, setNewCompanyName] = useState("");

  const fetchCompanies = async () => {
    const res = await axios.get(`${API}/companies`);
    setCompanies(res.data);
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  const selectedCompany = companies.find(
    (c) => c.id === Number(selectedCompanyId),
  );
  const employeesForSelectedCompany = selectedCompany
    ? selectedCompany.persons
    : [];
  const companyName = selectedCompany ? selectedCompany.name : "Unknown";

  const handleAddCompany = async (e) => {
    e.preventDefault();
    if (!newCompanyName) return;
    await axios.post(`${API}/companies`, { name: newCompanyName });
    toast.success(`Company ${newCompanyName} created`);
    setNewCompanyName("");
    fetchCompanies();
  };

  const handleRemoveEmployee = async (personId) => {
    if (!selectedCompanyId) return;
    const person = employeesForSelectedCompany.find((p) => p.id === personId);
    const personName = person ? person.name : "Unknown";

    await axios.put(`${API}/persons/${personId}/remove-company`);
    toast.success(`${personName} removed from ${companyName}`);
    fetchCompanies();
  };

  return (
    <Container>
      <Card style={{ width: "100%", maxWidth: 700 }}>
        <CardHeader>
          <CardTitle style={{ marginBottom: 10 }}>Create Company</CardTitle>
        </CardHeader>
        <CardContent>
          <Form onSubmit={handleAddCompany}>
            <CustomInput
              type="text"
              placeholder="Company Name"
              value={newCompanyName}
              onChange={(e) => setNewCompanyName(e.target.value)}
            />
            <Button type="submit">Create</Button>
          </Form>
        </CardContent>
      </Card>

      <Card style={{ width: "100%", maxWidth: 700, marginTop: "16px" }}>
        <CardHeader style={{ flexWrap: "wrap", gap: 12 }}>
          <CardTitle>View Employees</CardTitle>
          <CustomSelect
            value={selectedCompanyId}
            onChange={(e) => setSelectedCompanyId(e.target.value)}
            style={{ minWidth: 220, maxWidth: "60vw" }}
          >
            <option value="">Select a company</option>
            {companies.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </CustomSelect>
        </CardHeader>
      </Card>

      {selectedCompanyId && (
        <Card style={{ width: "100%", maxWidth: 700, marginTop: "16px" }}>
          <CardHeader style={{ flexWrap: "wrap" }}>
            <CardTitle>{companyName} employees</CardTitle>
          </CardHeader>
          <CardContent>
            {employeesForSelectedCompany.length > 0 ? (
              <List>
                {employeesForSelectedCompany.map((p) => (
                  <ListItem key={p.id}>
                    {p.name}
                    <Button
                      onClick={() => handleRemoveEmployee(p.id)}
                      style={{ marginLeft: 8 }}
                    >
                      Remove
                    </Button>
                  </ListItem>
                ))}
              </List>
            ) : (
              <Paragraph>No employees for this company.</Paragraph>
            )}
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
});

const Form = styled("form", {
  display: "flex",
  gap: "0.5rem",
  width: "100%",
  "& > button": {
    flexShrink: 0,
  },
});

const List = styled("ul", {
  listStyle: "none",
  padding: 0,
  margin: 0,
});

const CustomInput = styled(Input, {
  flex: 1,
  width: "auto",
});

const CustomSelect = styled(Select, {
  flex: 1,
  width: "auto",
});

export default Companies;
