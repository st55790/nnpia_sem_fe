import { CheckBox } from "@mui/icons-material";
import { Button, Box, TextField, Typography, Grid, Link, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { Container } from "@mui/system";

export default function AddRecipe() {

    const handleSubmit = () =>{
        console.log("Create recipe");
    }

    return (
        <Container component="main" maxWidth="sm">
            <Box
                sx={{
                    boxShadow: 3,
                    borderRadius: 2,
                    px: 4,
                    py: 6,
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h5">
                    Add recipe
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Recipe name"
                        name="recipeName"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="description"
                        label="Description"
                        id="desciption"
                    />
                    <TextField
                        margin="normal"
                        required
                        name="process"
                        id="process"
                        fullWidth
                        label="Process"
                        placeholder="Placeholder"
                        rows={8}
                        multiline
                        />
                    <TextField type={"number"} fullWidth margin="normal" label="Number of portion"
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', min: 0 }} />
                    <TextField type={"number"} fullWidth margin="normal" label="Prepare time"
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', min: 0 }} />
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
                    </FormGroup>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, py: 1.5 }}
                    >
                        SUBMIT
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}