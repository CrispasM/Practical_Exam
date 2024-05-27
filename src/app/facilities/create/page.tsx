// app/facilities/create/page.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import FacilityForm from "../../components/FacilityForm";
import { Typography } from "@mui/material";

interface District {
  id: string;
  name: string;
}

interface Owner {
  id: string;
  name: string;
}

const CreateFacility: React.FC = () => {
  const [districts, setDistricts] = useState<District[]>([]);
  const [owners, setOwners] = useState<Owner[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const districtsResponse = await axios.get(
        "https://zipatala.health.gov.mw/api/districts"
      );
      const ownersResponse = await axios.get(
        "https://zipatala.health.gov.mw/api/owners"
      );

      setDistricts(districtsResponse.data);
      setOwners(ownersResponse.data);
    };

    fetchData();
  }, []);

  const handleFormSubmit = (newFacility: any) => {
    // Handle the form submission, e.g., update state or redirect to the home page
  };

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Create New Facility
      </Typography>
      <FacilityForm
        districts={districts}
        owners={owners}
        onFormSubmit={handleFormSubmit}
      />
    </>
  );
};

export default CreateFacility;
