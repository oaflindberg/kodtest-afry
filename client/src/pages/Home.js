import { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "@stitches/react";
import { toast } from "react-hot-toast";
import { Button, Label, Heading, Input, Select } from "../styling/styles";
import { Card, CardHeader, CardTitle, CardContent } from "../components/Card";

const API = "http://localhost:4000";

const Home = () => {
  const [name, setName] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    axios.get(`${API}/companies`).then((res) => setCompanies(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${API}/persons`, { name, companyId: companyId || null });

    const company = companies.find((c) => c.id === Number(companyId));
    const companyName = company ? company.name : undefined;

    toast.success(
      companyName ? `${name} added to ${companyName}` : `${name} added`
    );
    setName("");
    setCompanyId("");
  };

  return (
    <Container>
      <Card style={{ width: "100%", maxWidth: 700 }}>
        <CardHeader>
          <CardTitle style={{ marginBottom: 10 }}>Add a Person</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <InputWrapper>
              <Label>Name</Label>
              <CustomInput
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </InputWrapper>
            <InputWrapper>
              <Label>Company</Label>
              <CustomSelect
                value={companyId}
                onChange={(e) => setCompanyId(e.target.value)}
              >
                <option value="">No company</option>
                {companies.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </CustomSelect>
            </InputWrapper>
            <CustomButton type="submit">Add Person</CustomButton>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

const Container = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "60vh",
  flexDirection: "column",
});

const InputWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginBottom: "1rem",
});

const CustomButton = styled(Button, { marginLeft: 0 });

const CustomInput = styled(Input, {
  width: "100%",
});

const CustomSelect = styled(Select, {
  width: "100%",
});
export default Home;
