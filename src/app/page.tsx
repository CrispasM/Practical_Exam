 
"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FacilityList from './components/FacilityList';
import SearchFilter from './components/SearchFilter';
import { Typography, Button, Box } from '@mui/material';
import AddFacilityForm from './components/AddFacility';

interface Facility {
  id: string;
  facility_code: string;
  facility_name: string;
  district_id: string;
  owner_id: string;
}

interface District {
  id: string;
  name: string;
}

interface Owner {
  id: string;
  name: string;
}

const Home: React.FC = () => {
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [districts, setDistricts] = useState<District[]>([]);
  const [owners, setOwners] = useState<Owner[]>([]);
  const [search, setSearch] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const facilitiesResponse = await axios.get<Facility[]>('https://zipatala.health.gov.mw/api/facilities');
        const districtsResponse = await axios.get<District[]>('https://zipatala.health.gov.mw/api/districts');
        const ownersResponse = await axios.get<Owner[]>('https://zipatala.health.gov.mw/api/owners');

        setFacilities(facilitiesResponse.data);
        setDistricts(districtsResponse.data);
        setOwners(ownersResponse.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleAdd = async () => {
    const facilitiesResponse = await axios.get<Facility[]>('https://zipatala.health.gov.mw/api/facilities');
    setFacilities(facilitiesResponse.data);
  };

  const filteredFacilities = facilities.filter(facility =>
    facility.facility_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        MHFR Facilities
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => setShowAddForm(true)}
        >
          Add Facility
        </Button>
      </Box>
      <SearchFilter search={search} handleSearch={handleSearch} />
      <FacilityList
        facilities={filteredFacilities}
        districts={districts}
        owners={owners}
      />
      {showAddForm && (
        <AddFacilityForm
          districts={districts}
          owners={owners}
          onClose={() => setShowAddForm(false)}
          onAdd={handleAdd}
        />
      )}
    </>
  );
};

export default Home;


