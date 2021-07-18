import {
    
    GridToolbarContainer,
    GridToolbarExport,
  } from '@material-ui/data-grid';
  
  
  function GridCustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

  export default GridCustomToolbar;