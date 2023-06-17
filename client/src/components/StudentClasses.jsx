import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const StudentClasses = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'className', headerName: 'Class Name', width: 130 },
    { field: 'location', headerName: 'Location', width: 130 },
    { field: 'time', headerName: 'Time', type: 'number', width: 90 },
    {
      field: 'fullName', headerName: 'Full name', description: 'This column has a value getter and is not sortable.', sortable: false, width: 160,
      valueGetter: (params) => `${params.row.className || ''} ${params.row.location || ''}`,
    },
  ];

  const rows = [
    { id: 1, location: 'Snow', className: 'Jon', time: 35 },
    { id: 2, location: 'Lannister', className: 'Cersei', time: 42 },
    { id: 3, location: 'Lannister', className: 'Jaime', time: 45 },
  ];
  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <div className='' style={{ height: 200, width: '80%' }}>
          <DataGrid rows={rows} columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}

          />
        </div>

      </Box>


    </div>
  )
}

export default StudentClasses