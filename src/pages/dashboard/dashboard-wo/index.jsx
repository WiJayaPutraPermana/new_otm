import { Box, Button, MenuItem, Select, Typography, useTheme } from "@mui/material";
// import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../../components/layout/signed/Header";
import { tokens } from "../../../common/hooks/Theme";
import BarChart from "../../../components/layout/signed/BarChart";
import PieChart from "../../../components/layout/signed/PieChart";
import Dates from "../../../components/layout/signed/Date";
import { FormLabel } from "react-bootstrap";

const DashboardWo = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard Work Order"/>
        <Box>
          <FormLabel
            sx={{
              marginBottom: "2px",
              fontSize: "14px",
              fontWeight: "bold",
              marginRight: "8px",
            }}
          >
            Calender Year :
          </FormLabel>
          <Select
            fullWidth
            variant="outlined"
            name="repeatevery"
            sx={{
              marginBottom: "2px",
              fontSize: "14px",
              fontWeight: "bold",
              marginRight: "8px",
            }}
          >
            <MenuItem value="">Non Select</MenuItem>
            <MenuItem value="1">Perminggu</MenuItem>
            <MenuItem value="2">Perbulan</MenuItem>
            <MenuItem value="3">Pertahun</MenuItem>
            <MenuItem value="4"><Dates /></MenuItem>
          </Select>
      </Box>

      </Box>
      
      
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* row1 */}
         <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
         <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <PieChart isDashboard={true} />
          </Box>
        </Box>
        {/* row2 */}
         <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
         <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <PieChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardWo;
