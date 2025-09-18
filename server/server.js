import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.get("/companies", async (_, res) => {
  const companies = await prisma.company.findMany({
    include: { persons: true },
  });
  res.json(companies);
});

app.post("/companies", async (req, res) => {
  const company = await prisma.company.create({
    data: { name: req.body.name },
  });
  res.json(company);
});

app.get("/persons", async (_, res) => {
  const persons = await prisma.person.findMany({ include: { company: true } });
  res.json(persons);
});

app.post("/persons", async (req, res) => {
  const { name, companyId } = req.body;

  const person = await prisma.person.create({
    data: {
      name,
      companyId: companyId ? Number(companyId) : null,
    },
  });

  res.json(person);
});

app.put("/persons/:id/company", async (req, res) => {
  const { companyId } = req.body;
  const person = await prisma.person.update({
    where: { id: Number(req.params.id) },
    data: { companyId: companyId ? Number(companyId) : null },
  });
  res.json(person);
});

app.put("/persons/:id/remove-company", async (req, res) => {
  const person = await prisma.person.update({
    where: { id: Number(req.params.id) },
    data: { companyId: null },
  });
  res.json(person);
});

app.listen(4000, () => console.log("Server running on http://localhost:4000"));
