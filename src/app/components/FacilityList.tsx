// app/components/FacilityList.tsx
// import React from "react";
// import { List, ListItem, ListItemText, Typography } from "@mui/material";

// interface Facility {
//   id: string;
//   facility_code: string;
//   facility_name: string;
//   district_id: string;
//   owner_id: string;
// }

// interface District {
//   id: string;
//   name: string;
// }

// interface Owner {
//   id: string;
//   name: string;
// }

// interface FacilityListProps {
//   facilities: Facility[];
//   districts: District[];
//   owners: Owner[];
// }

// const FacilityList: React.FC<FacilityListProps> = ({
//   facilities,
//   districts,
//   owners,
// }) => {
//   return (
//     <div>
//       <Typography variant="h6" component="h2" gutterBottom>
//         Facility List
//       </Typography>
//       <List>
//         {facilities.map((facility) => (
//           <ListItem key={facility.id}>
//             <ListItemText
//               primary={facility.facility_name}
//               secondary={
//                 <>
//                   <div>Code: {facility.facility_code}</div>
//                   <div>
//                     District:{" "}
//                     {districts.find((d) => d.id === facility.district_id)
//                       ?.name || "Unknown"}
//                   </div>
//                   <div>
//                     Owner:{" "}
//                     {owners.find((o) => o.id === facility.owner_id)?.name ||
//                       "Unknown"}
//                   </div>
//                 </>
//               }
//             />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );
// };

// export default FacilityList;




// app/components/FacilityList.tsx
// import React from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

// interface Facility {
//   id: string;
//   facility_code: string;
//   facility_name: string;
//   district_id: string;
//   owner_id: string;
// }

// interface District {
//   id: string;
//   name: string;
// }

// interface FacilityListProps {
//   facilities: Facility[];
//   districts: District[];
// }

// const FacilityList: React.FC<FacilityListProps> = ({ facilities, districts }) => {
//   return (
//     <div>
//       <Typography variant="h6" component="h2" gutterBottom>Facility List</Typography>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Facility Code</TableCell>
//               <TableCell>Facility Name</TableCell>
//               <TableCell>District</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {facilities.map((facility) => (
//               <TableRow key={facility.id}>
//                 <TableCell>{facility.facility_code}</TableCell>
//                 <TableCell>{facility.facility_name}</TableCell>
//                 <TableCell>{districts.find((district) => district.id === facility.district_id)?.name || 'Unknown'}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default FacilityList;

// app/components/FacilityList.tsx
// import React, { useState } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, TablePagination } from '@mui/material';

// interface Facility {
//   id: string;
//   facility_code: string;
//   facility_name: string;
//   district_id: string;
//   owner_id: string;
// }

// interface District {
//   id: string;
//   name: string;
// }

// interface FacilityListProps {
//   facilities: Facility[];
//   districts: District[];
// }

// const FacilityList: React.FC<FacilityListProps> = ({ facilities, districts }) => {
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);

//   const handleChangePage = (event: unknown, newPage: number) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const paginatedFacilities = facilities.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

//   return (
//     <div>
//       <Typography variant="h6" component="h2" gutterBottom>Facility List</Typography>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Facility Code</TableCell>
//               <TableCell>Facility Name</TableCell>
//               <TableCell>District</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {paginatedFacilities.map((facility) => (
//               <TableRow key={facility.id}>
//                 <TableCell>{facility.facility_code}</TableCell>
//                 <TableCell>{facility.facility_name}</TableCell>
//                 <TableCell>{districts.find((district) => district.id === facility.district_id)?.name || 'Unknown'}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         component="div"
//         count={facilities.length}
//         page={page}
//         onPageChange={handleChangePage}
//         rowsPerPage={rowsPerPage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </div>
//   );
// };

// export default FacilityList;


// app/components/FacilityList.tsx
// import React, { useState } from 'react';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Typography,
//   TablePagination,
// } from '@mui/material';

// interface Facility {
//   id: string;
//   facility_code: string;
//   facility_name: string;
//   district_id: string;
//   owner_id: string;
// }

// interface District {
//   id: string;
//   name: string;
// }

// interface Owner {
//   id: string;
//   name: string;
// }

// interface FacilityListProps {
//   facilities: Facility[];
//   districts: District[];
//   owners: Owner[];
// }

// const FacilityList: React.FC<FacilityListProps> = ({ facilities, districts, owners }) => {
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);

//   const handleChangePage = (event: unknown, newPage: number) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const paginatedFacilities = facilities.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

//   const getDistrictName = (district_id: string) => {
//     const district = districts.find((district) => district.id === district_id);
//     return district ? district.name : 'Unknown';
//   };

//   const getOwnerName = (owner_id: string) => {
//     const owner = owners.find((owner) => owner.id === owner_id);
//     return owner ? owner.name : 'Unknown';
//   };

//   return (
//     <div>
//       <Typography variant="h6" component="h2" gutterBottom>
//         Facility List
//       </Typography>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Facility Code</TableCell>
//               <TableCell>Facility Name</TableCell>
//               <TableCell>District</TableCell>
//               <TableCell>District ID</TableCell>
//               <TableCell>Owner ID</TableCell>
//               <TableCell>Owner Name</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {paginatedFacilities.map((facility) => (
//               <TableRow key={facility.id}>
//                 <TableCell>{facility.facility_code}</TableCell>
//                 <TableCell>{facility.facility_name}</TableCell>
//                 <TableCell>{getDistrictName(facility.district_id)}</TableCell>
//                 <TableCell>{facility.district_id}</TableCell>
//                 <TableCell>{facility.owner_id}</TableCell>
//                 <TableCell>{getOwnerName(facility.owner_id)}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         component="div"
//         count={facilities.length}
//         page={page}
//         onPageChange={handleChangePage}
//         rowsPerPage={rowsPerPage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </div>
//   );
// };

// export default FacilityList;

// app/components/FacilityList.tsx
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TablePagination,
} from '@mui/material';

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
  district_name: string
}

interface Owner {
  id: string;
  name: string;
  facility_owner: string
}

interface FacilityListProps {
  facilities: Facility[];
  districts: District[];
  owners: Owner[];
}

const FacilityList: React.FC<FacilityListProps> = ({ facilities, districts, owners }) => {
    console.log("=====>Owners:", facilities);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedFacilities = facilities.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

const getDistrictName = (district_id: string) => {
  const district = districts.find((district) => district.id === district_id);
  return district ? district.district_name : "Unknown";
};

//   const getOwnerName = (owner_id: string) => {
//     const owner = owners.find((owner) => owner.id === owner_id);
//     return owner ? owner.name : 'Unknown';
//   };
const getOwnerName = (owner_id: string) => {
  const owner = owners.find((owner) => owner.id === owner_id);
  return owner ? owner.facility_owner : "Unknown";
};

  return (
    <div>
      <Typography variant="h6" component="h2" gutterBottom>
        Facility List
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Facility Code</TableCell>
              <TableCell>Facility Name</TableCell>
              <TableCell>District</TableCell>
              <TableCell>District ID</TableCell>
              <TableCell>Owner ID</TableCell>
              {/* <TableCell>Owner Name</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedFacilities.map((facility) => (
              <TableRow key={facility.id}>
                <TableCell>{facility.facility_code}</TableCell>
                <TableCell>{facility.facility_name}</TableCell>
                <TableCell>{getDistrictName(facility.district_id)}</TableCell>
                <TableCell>{facility.district_id}</TableCell>
                <TableCell>{facility.owner_id}</TableCell>
                {/* <TableCell>{getOwnerName(facility.owner_id)}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={facilities.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default FacilityList;




