import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function CustomDataGrid({ rows, columns }) {
    return (
        <Box sx={{ width: '29vw' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                autoHeight
                rowsPerPageOptions={[5]}
                hideFooter
                aria-label="High Scores Data Grid"
                onRowClick={() => console.log("page change!")}
            />
        </Box>
    );
}
