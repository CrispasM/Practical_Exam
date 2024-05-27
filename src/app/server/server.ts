"use server"
const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
const port = 3001;

app.use(express.json());

app.post('/api/facilities', async (req:any, res:any) => {
  const { facilityName, districtId } = req.body;

  try {
    const facility = await prisma.facility.create({
      data: {
        facilityName,
        district: { connect: { id: districtId } }
      }
    });

    res.json(facility);
  } catch (error) {
    console.error("Error adding facility: ", error);
    res.status(500).json({ error: "Error adding facility" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
