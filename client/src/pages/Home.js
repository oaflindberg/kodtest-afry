import { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "@stitches/react";
import { toast } from "react-hot-toast";
import { Button, Label, Heading, Input, Select } from "../styling/styles";

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
      companyName ? `${name} added to ${companyName}` : `${name} added`,
    );
    setName("");
    setCompanyId("");
  };

  return (
    <Container>
      <Heading>Add a Person</Heading>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <Label>Name: </Label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Company: </Label>
          <Select
            value={companyId}
            onChange={(e) => setCompanyId(e.target.value)}
          >
            <option value="">No company</option>
            {companies.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </Select>
        </InputWrapper>
        <CustomButton type="submit">Add Person</CustomButton>
      </form>
    </Container>
  );
};

const Container = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "80vh",
  flexDirection: "column",
});

const InputWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginBottom: "1rem",
});

// const Button = styled("button", {
//   backgroundColor: "#dc8a78",
//   color: "#eff1f5;",
//   fontSize: "1.25rem",
//   fontWeight: "bold",
//   width: "10rem",
//   height: "2.5rem",
//   border: "none",
//   borderRadius: "8px",
//   marginTop: "1rem",
//   cursor: "pointer",
//   transition: "transform 0.2s",
//   "&:hover": {
//     transform: "scale(1.05)",
//   },
// });
//

const CustomButton = styled(Button, { marginLeft: 0 });
export default Home;
