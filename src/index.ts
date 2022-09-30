import express, { json, Request, Response } from "express";
import prisma from "../prismaClient.js";

const PORT = 5000;

const app = express();
app.use(json());

app.get("/students", async (req: Request, res: Response) => {
  const students_list = await prisma.student.findMany();
  res.send(students_list);
});

app.post("/students", async (req: Request, res: Response) => {
  const { students } = req.body;
  await prisma.student.createMany({
    data: students,
  });
  res.sendStatus(201);
});

app.get("/students/random", async (req: Request, res: Response) => {
  const students = await prisma.student.findMany();
  if (students.length > 0) {
    const studentRandom = students[Math.floor(Math.random() * students.length)];
    res.send(studentRandom);
  } else {
    res.send(null);
  }
});

app.listen(PORT, () => {
  console.log(`O servidor está rodando na porta: ${PORT}`);
})
