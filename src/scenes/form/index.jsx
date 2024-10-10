import { Box, Button, TextField, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup"
import useMediaQuery from "@mui/material/useMediaQuery"
import Header from "../../components/Header";
import SaveIcon from '@mui/icons-material/Save';
import { tokens } from "../../theme";


const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
    password: '',
    confirmPassword: '',
}

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    contact: yup
        .string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("required"),
    address1: yup.string().required("required"),
    address2: yup.string().required("required"),
    password: yup.string()
        .min(6, 'Password must be at least 6 characters long')
        .required('Password is required'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
})

const Form = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const isNonMobile = useMediaQuery("(min-width:600px");

    const handleFormSubmit = (values) => {
        console.log(values)
    }

    return (
        <Box m="20px">
            <Header title="UPDATE USER" subtitle="Update User Profile" />

            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={userSchema}>
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Box display="flex" justifyContent="space-between" gap="20px" alignItems='flex-start' >
                            <Box 
                                p="20px"
                                display="grid" 
                                gap="20px" 
                                gridTemplateColumns="repeat(1, minmax(0, 1fr))" // Adjusted columns
                                border={`1px solid ${colors.grey[700]}`}
                                borderRadius="8px"
                                sx={{
                                    "& > div": { gridColumn : isNonMobile ? undefined : "span 4"},
                                }}
                                flex="1">
                                <Box gridColumn="span 2">
                                    <h3>Information</h3>
                                </Box>
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="First Name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.firstName}
                                    name="firstName"
                                    error={!!touched.firstName && !!errors.firstName}
                                    helperText={touched.firstName && errors.firstName}
                                    sx={{ gridColumn: "span 4" }}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Last Name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.lastName}
                                    name="lastName"
                                    error={!!touched.lastName && !!errors.lastName}
                                    helperText={touched.lastName && errors.lastName}
                                    sx={{ gridColumn: "span 4" }}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.email}
                                    name="email"
                                    error={!!touched.email && !!errors.email}
                                    helperText={touched.email && errors.email}
                                    sx={{ gridColumn: "span 4" }}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Contact Number"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.contact}
                                    name="contact"
                                    error={!!touched.contact && !!errors.contact}
                                    helperText={touched.contact && errors.contact}
                                    sx={{ gridColumn: "span 4" }}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Address 1"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.address1}
                                    name="address1"
                                    error={!!touched.address1 && !!errors.address1}
                                    helperText={touched.address1 && errors.address1}
                                    sx={{ gridColumn: "span 4" }}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Address 2"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.address2}
                                    name="address2"
                                    error={!!touched.address2 && !!errors.address2}
                                    helperText={touched.address2 && errors.address2}
                                    sx={{ gridColumn: "span 4" }}
                                />
                            </Box>                
                            <Box
                                p="20px"
                                display="grid"
                                gap="20px"
                                gridTemplateColumns="repeat(1, minmax(0, 1fr))"
                                border={`1px solid ${colors.grey[700]}`}
                                borderRadius="8px"
                                sx={{
                                    "& > div": { gridColumn: isNonMobile ? undefined : "span 2" },
                                    minHeight: 'auto',
                                }}
                                flex="1">
                                <Box gridColumn="span 2">
                                    <h3>Changement du mot de passe</h3>
                                </Box>
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="password"
                                    label="Mot de passe"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.password}
                                    name="password"
                                    error={!!touched.password && !!errors.password}
                                    helperText={touched.password && errors.password}
                                    sx={{ gridColumn: "span 4" }}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="password"
                                    label="Confirmer le mot de passe"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.confirmPassword}
                                    name="confirmPassword"
                                    error={!!touched.confirmPassword && !!errors.confirmPassword}
                                    helperText={touched.confirmPassword && errors.confirmPassword}
                                    sx={{ gridColumn: "span 4" }}
                                />
                            </Box>
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit" color="secondary" variant="contained" endIcon={<SaveIcon />}>
                                Enegistrer
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    )
}

export default Form