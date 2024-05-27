// app/components/FacilityForm.tsx
import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Box,
} from "@mui/material";

interface District {
  id: string;
  name: string;
}

interface Owner {
  id: string;
  name: string;
}

interface FacilityFormProps {
  districts: District[];
  owners: Owner[];
  onFormSubmit: (newFacility: any) => void;
}

const FacilityForm: React.FC<FacilityFormProps> = ({
  districts,
  owners,
  onFormSubmit,
}) => {
  const [facility_code, setFacilityCode] = useState("");
  const [facility_name, setFacilityName] = useState("");
  const [district_id, setDistrictId] = useState("");
  const [owner_id, setOwnerId] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newFacility = { facility_code, facility_name, district_id, owner_id };

    await axios.post(
      "https://zipatala.health.gov.mw/api/facilities",
      newFacility
    );

    onFormSubmit(newFacility);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Facility Code"
          value={facility_code}
          onChange={(e) => setFacilityCode(e.target.value)}
          required
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Facility Name"
          value={facility_name}
          onChange={(e) => setFacilityName(e.target.value)}
          required
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>District</InputLabel>
        <Select
          value={district_id}
          onChange={(e) => setDistrictId(e.target.value as string)}
          required
        >
          {districts.map((district) => (
            <MenuItem key={district.id} value={district.id}>
              {district.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Owner</InputLabel>
        <Select
          value={owner_id}
          onChange={(e) => setOwnerId(e.target.value as string)}
          required
        >
          {owners.map((owner) => (
            <MenuItem key={owner.id} value={owner.id}>
              {owner.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Create Facility
      </Button>
    </Box>
  );
};

export default FacilityForm;
