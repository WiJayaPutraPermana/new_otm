import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Box,
  FormControl,
  TextField,
  FormLabel,
  Select,
  MenuItem,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import { blue, green, grey, red } from "@mui/material/colors";
import { Formik } from "formik";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ButtonGroup from "@mui/material/ButtonGroup";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

import { Input, inputClasses } from "@mui/base/Input";
import { styled } from "@mui/system";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button variant="countainer" onClick={handleClickOpen}>
        <AddIcon />
        NEW
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth={"sm"}>
        <DialogTitle
          sx={{ color: "white", backgroundColor: "black", fontSize: "27px" }}
        >
          Insert
        </DialogTitle>
        <DialogContent>
          <DialogContentText dividers>
            <Formik onSubmit={handleClose}>
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
              }) => (
                <form onSubmit={handleClose}>
                  <Box
                    display="grid"
                    padding={2}
                    paddingBottom={2}
                    paddingLeft={3}
                    paddingRight={3}
                    gap="20px"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                  >
                    <FormControl sx={{ gridColumn: "span 2" }}>
                      <FormLabel
                        sx={{
                          marginBottom: "8px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Preflix
                      </FormLabel>
                      <TextField
                        fullWidth
                        variant="outlined"
                        type="text"
                        onBlur={handleBlur}
                        // onChange={handleChange}
                        // value={values.name}
                        name="name"
                        error={!!touched.name && !!errors.name}
                        helperText={touched.name && errors.name}
                      />
                    </FormControl>
                    <FormControl sx={{ gridColumn: "span 2" }}>
                      <FormLabel
                        sx={{
                          marginBottom: "8px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Frist Name
                      </FormLabel>
                      <TextField
                        fullWidth
                        variant="outlined"
                        type="text"
                        onBlur={handleBlur}
                        // onChange={handleChange}
                        // value={values.name}
                        name="name"
                        error={!!touched.name && !!errors.name}
                        helperText={touched.name && errors.name}
                      />
                    </FormControl>
                    <FormControl sx={{ gridColumn: "span 2" }}>
                      <FormLabel
                        sx={{
                          marginBottom: "8px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Middle Name
                      </FormLabel>
                      <TextField
                        fullWidth
                        variant="outlined"
                        type="text"
                        onBlur={handleBlur}
                        // onChange={handleChange}
                        // value={values.name}
                        name="name"
                        error={!!touched.name && !!errors.name}
                        helperText={touched.name && errors.name}
                      />
                    </FormControl>
                    <FormControl sx={{ gridColumn: "span 2" }}>
                      <FormLabel
                        sx={{
                          marginBottom: "8px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Last Name
                      </FormLabel>
                      <TextField
                        fullWidth
                        variant="outlined"
                        type="text"
                        onBlur={handleBlur}
                        // onChange={handleChange}
                        // value={values.name}
                        name="name"
                        error={!!touched.name && !!errors.name}
                        helperText={touched.name && errors.name}
                      />
                    </FormControl>
                    <FormControl sx={{ gridColumn: "span 2" }}>
                      <FormLabel
                        sx={{
                          marginBottom: "8px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Gender
                      </FormLabel>
                      <Select
                        fullWidth
                        variant="outlined"
                        onBlur={handleBlur}
                        // onChange={handleChange}
                        // value={values.name}
                        name="repeatevery"
                      >
                        <MenuItem value="1">Male</MenuItem>
                        <MenuItem value="2">Famale</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl sx={{ gridColumn: "span 2" }}>
                      <FormLabel
                        sx={{
                          marginBottom: "8px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Birth Place
                      </FormLabel>
                      <TextField
                        fullWidth
                        variant="outlined"
                        type="text"
                        onBlur={handleBlur}
                        // onChange={handleChange}
                        // value={values.name}
                        name="name"
                        error={!!touched.name && !!errors.name}
                        helperText={touched.name && errors.name}
                      />
                    </FormControl>
                    <FormControl sx={{ gridColumn: "span 2" }}>
                      <FormLabel
                        sx={{
                          marginBottom: "8px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Britd Date
                      </FormLabel>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker label="Issued Date" />
                      </LocalizationProvider>
                    </FormControl>
                    <FormControl sx={{ gridColumn: "span 2" }}>
                      <FormLabel
                        sx={{
                          marginBottom: "8px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        ID Number
                      </FormLabel>
                      <TextField />
                    </FormControl>
                    <FormControl sx={{ gridColumn: "span 2" }}>
                      <FormLabel
                        sx={{
                          marginBottom: "8px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Passport Number
                      </FormLabel>
                      <TextField />
                    </FormControl>
                    <FormControl sx={{ gridColumn: "span 2" }}>
                      <FormLabel
                        sx={{
                          marginBottom: "8px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Tax Number
                      </FormLabel>
                      <TextField />
                    </FormControl>
                    <FormControl sx={{ gridColumn: "span 2" }}>
                      <FormLabel
                        sx={{
                          marginBottom: "8px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Email
                      </FormLabel>
                      <TextField type="email" />
                    </FormControl>
                    <FormControl sx={{ gridColumn: "span 2" }}>
                      <FormLabel
                        sx={{
                          marginBottom: "8px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Phone 1
                      </FormLabel>
                      <TextField />
                    </FormControl>
                    <FormControl sx={{ gridColumn: "span 2" }}>
                      <FormLabel
                        sx={{
                          marginBottom: "8px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Phone 2
                      </FormLabel>
                      <TextField />
                    </FormControl>
                    <FormControl sx={{ gridColumn: "span 2" }}>
                      <FormLabel
                        sx={{
                          marginBottom: "8px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Phone 3
                      </FormLabel>
                      <TextField />
                    </FormControl>
                    <FormControl sx={{ gridColumn: "span 2" }}>
                      <FormLabel
                        sx={{
                          marginBottom: "8px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Addres 1
                      </FormLabel>
                      <TextField
                        fullWidth
                        variant="outlined"
                        type="text"
                        onBlur={handleBlur}
                        // onChange={handleChange}
                        // value={values.name}
                        name="name"
                        error={!!touched.name && !!errors.name}
                        helperText={touched.name && errors.name}
                      />
                    </FormControl>
                    <FormControl sx={{ gridColumn: "span 2" }}>
                      <FormLabel
                        sx={{
                          marginBottom: "8px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Addres 2
                      </FormLabel>
                      <TextField
                        fullWidth
                        variant="outlined"
                        type="text"
                        onBlur={handleBlur}
                        // onChange={handleChange}
                        // value={values.name}
                        name="name"
                        error={!!touched.name && !!errors.name}
                        helperText={touched.name && errors.name}
                      />
                    </FormControl>
                    <FormControl sx={{ gridColumn: "span 2" }}>
                      <FormLabel
                        sx={{
                          marginBottom: "8px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Zip Code
                      </FormLabel>
                      <TextField
                        fullWidth
                        variant="outlined"
                        type="text"
                        onBlur={handleBlur}
                        // onChange={handleChange}
                        // value={values.name}
                        name="name"
                        error={!!touched.name && !!errors.name}
                        helperText={touched.name && errors.name}
                      />
                    </FormControl>
                    <FormControl sx={{ gridColumn: "span 2" }}>
                      <FormLabel
                        sx={{
                          marginBottom: "8px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Emergency Name
                      </FormLabel>
                      <TextField
                        fullWidth
                        variant="outlined"
                        type="text"
                        onBlur={handleBlur}
                        // onChange={handleChange}
                        // value={values.name}
                        name="name"
                        error={!!touched.name && !!errors.name}
                        helperText={touched.name && errors.name}
                      />
                    </FormControl>
                    <FormControl sx={{ gridColumn: "span 2" }}>
                      <FormLabel
                        sx={{
                          marginBottom: "8px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Emergency Phone
                      </FormLabel>
                      <TextField />
                    </FormControl>
                    <FormControl sx={{ gridColumn: "span 2" }}>
                      <FormLabel
                        sx={{
                          marginBottom: "8px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Photo
                      </FormLabel>
                      <TextField type="file" />
                    </FormControl>
                    <FormControl sx={{ gridColumn: "span 4" }}>
                      <FormLabel
                        sx={{
                          marginBottom: "8px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Vendor/Supplier
                      </FormLabel>
                      <TextField
                        fullWidth
                        variant="outlined"
                        type="text"
                        onBlur={handleBlur}
                        // onChange={handleChange}
                        // value={values.name}
                        name="name"
                        error={!!touched.name && !!errors.name}
                        helperText={touched.name && errors.name}
                      />
                    </FormControl>
                    <FormControl sx={{ gridColumn: "span 2" }}>
                      <FormLabel id="demo-radio-buttons-group-label">
                        Is Verified
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="true"
                          control={<Radio />}
                          label="true"
                        />
                        <FormControlLabel
                          value="false"
                          control={<Radio />}
                          label="false"
                        />
                      </RadioGroup>
                    </FormControl>
                    <FormControl sx={{ gridColumn: "span 2" }}>
                      <FormLabel id="demo-radio-buttons-group-label">
                        Active
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="true"
                          control={<Radio />}
                          label="true"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Male"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Box>
                  <DialogActions>
                    <Box>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: grey[700],
                          color: "white",
                        }}
                        onClick={handleClose}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: blue[700],
                          color: "white",
                        }}
                        onClick={handleClose}
                      >
                        Simpan
                      </Button>
                    </Box>
                  </DialogActions>
                </form>
              )}
            </Formik>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
