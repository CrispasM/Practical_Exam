// import React, { useState } from "react";
// import {
//   TextField,
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   MenuItem,
// } from "@mui/material";
// import axios from "axios";

// interface AddFacilityFormProps {
//   districts: { district_code: string; district_name: string }[];
//   //owners: { district_code: string; district_name: string }[];
//   onClose: () => void;
//   onAdd: () => void;
// }



// const AddFacilityForm: React.FC<AddFacilityFormProps> = ({
//   districts,
//   //owners,
//   onClose,
//   onAdd,
// }) => {
//   //console.log("+++++++++", owners);
//   const [facilityCode, setFacilityCode] = useState("");
//   const [facilityName, setFacilityName] = useState("");
//   const [districtId, setDistrictId] = useState("");
//   const [ownerId, setOwnerId] = useState("");

//   const handleAddFacility = async () => {
//     const newFacility = {
//       facility_code: facilityCode,
//       facility_name: facilityName,
//       district_id: districtId,
//       owner_id: ownerId,
//     };

//     try {
//       await axios.post(
//         "https://zipatala.health.gov.mw/api/facilities",
//         newFacility
//       );
//       onAdd();
//       onClose();
//     } catch (error) {
//       console.error("Error adding facility: ", error);
//     }
//   };

//   return (
//     <Dialog open onClose={onClose}>
//       <DialogTitle>Add Facility</DialogTitle>
//       <DialogContent>
//         {/* <TextField
//           margin="dense"
//           label="Facility Code"
//           type="text"
//           fullWidth
//           value={facilityCode}
//           onChange={(e) => setFacilityCode(e.target.value)}
//         /> */}
//         <TextField
//           margin="dense"
//           label="Facility Name"
//           type="text"
//           fullWidth
//           value={facilityName}
//           onChange={(e) => setFacilityName(e.target.value)}
//         />
//         <TextField
//           margin="dense"
//           label="District"
//           select
//           fullWidth
//           value={districtId}
//           onChange={(e) => setDistrictId(e.target.value)}
//         >
//           {districts.map((district) => (
//             <MenuItem
//               key={district.district_code}
//               value={district.district_code}
//             >
//               {district.district_name}
//             </MenuItem>
//           ))}
//         </TextField>
//         {/* <TextField
//           margin="dense"
//           label="Owner"
//           select
//           fullWidth
//           value={ownerId}
//           onChange={(e) => setOwnerId(e.target.value)}
//         >
//           {owners.map((owner) => (
//             <MenuItem key={owner.id} value={owner.id}>
//               {owner.name}
//             </MenuItem>
//           ))}
//         </TextField> */}
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={onClose} color="primary">
//           Cancel
//         </Button>
//         <Button onClick={handleAddFacility} color="primary">
//           Add
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default AddFacilityForm;

import React, { useState } from "react";
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
} from "@mui/material";
import axios from "axios";

interface AddFacilityFormProps {
  districts: { district_code: string; district_name: string }[];
  onClose: () => void;
  onAdd: () => void;
}

const AddFacilityForm: React.FC<AddFacilityFormProps> = ({
  districts,
  onClose,
  onAdd,
}) => {
  const [facilityName, setFacilityName] = useState("");
  const [districtId, setDistrictId] = useState("");

  const handleAddFacility = async () => {
    const newFacility = {
      facility_name: facilityName,
      district_id: districtId,
    };

    try {
      await axios.post("http://localhost:3001/api/facilities");
      onAdd();
      onClose();
    } catch (error) {
      console.error("Error adding facility: ", error);
    }
  };

  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>Add Facility</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Facility Name"
          type="text"
          fullWidth
          value={facilityName}
          onChange={(e) => setFacilityName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="District"
          select
          fullWidth
          value={districtId}
          onChange={(e) => setDistrictId(e.target.value)}
        >
          {districts.map((district) => (
            <MenuItem
              key={district.district_code}
              value={district.district_code}
            >
              {district.district_name}
            </MenuItem>
          ))}
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAddFacility} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddFacilityForm;
