import { Button, Box, TextField, Typography, Checkbox, Input, Autocomplete } from "@mui/material";
import { Container } from "@mui/system";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance/AxiosInstance";

export default function AddRecipe() {
    
    const [category, setCategory] = useState([]);
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        axiosInstance.get("/category", {
            headers: {
                'Authorization': localStorage.getItem("jwt")
            }
        }).then(response => {
            console.log(response.data);
            setCategory(response.data);
        });

        axiosInstance.get("/ingredient", {
            headers: {
                'Authorization': localStorage.getItem("jwt")
            }
        }).then(response => {
            console.log(response.data);
            setIngredients(response.data);
        });

    }, []);

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedIngredients, setSelectedIngredients] = useState([]);

    const handleSubmit = (event) =>{
        console.log("Create recipe");
        console.log(localStorage.getItem("jwt"));

        event.preventDefault();
        const data = new FormData(event.currentTarget); 
        const token = localStorage.getItem("jwt");

        axiosInstance.post("/recipe", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMTIzIiwiaWF0IjoxNjc5NzgwNDcwLCJleHAiOjE2Nzk4NjY4NzB9.80-nfVHOrZrTUc3jjN9w9HDzpXzP9MMnan175TEghCSr5txeOfEaVU-vZCjUT6szTSU0wmXsThUIW4bHgm0Rrg'
            },
            data: {
                name: data.get("recipeName"),
                description: data.get("description"),
                procedure: data.get("process"),
                prepareTime: data.get("prepareTime"),
                numberOfPortions: data.get("numberOfPortion"),
                rating: 0,
                owner: 1,
                linksToImages: [],
                ingredients: [],
                categories: []
            }
        }).then(response => {
            // zpracování odpovědi
        }).catch(error => {
            // zpracování chyby
        });
    }

    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    const checkedIcon = <CheckBoxIcon fontSize="small" />;

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
                    <TextField type={"number"} fullWidth margin="normal" label="Number of portion" name="numberOfPortion"
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', min: 0 }} />
                    <TextField type={"number"} fullWidth margin="normal" label="Prepare time" name="prepareTime"
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', min: 0 }} />
                    <Autocomplete
                        value={selectedCategories}
                        sx={{my: 2}}
                        multiple
                        id="checkboxes-tags-demo"
                        options={category}
                        disableCloseOnSelect
                        getOptionLabel={(option) => option.name}
                        renderOption={(props, option, { selected }) => (
                            <li {...props}>
                                <Checkbox
                                    icon={icon}
                                    checkedIcon={checkedIcon}
                                    style={{ marginRight: 8 }}
                                    checked={selected}
                                />
                                {option.name}
                            </li>
                        )}
                        style={{ width: 500 }}
                        renderInput={(params) => (
                            <TextField {...params} label="Categories" placeholder="Categories" />
                        )}
                        onChange={(event, newValue) => {
                            setSelectedCategories(newValue);
                        }}
                    />
                    <Autocomplete
                        value={selectedIngredients}
                        sx={{ my: 2 }}
                        multiple
                        id="checkboxes-tags-demo"
                        options={ingredients}
                        disableCloseOnSelect
                        getOptionLabel={(option) => option.name}
                        renderOption={(props, option, { selected }) => (
                            <li {...props}>
                                <Checkbox
                                    icon={icon}
                                    checkedIcon={checkedIcon}
                                    style={{ marginRight: 8 }}
                                    checked={selected}
                                />
                                {option.name}
                            </li>
                        )}
                        style={{ width: 500 }}
                        renderInput={(params) => (
                            <TextField {...params} label="Ingredients" placeholder="Ingredients" />
                        )}
                        onChange={(event, newValue) => {
                            setSelectedIngredients(newValue);
                        }}
                    />
                    <Input 
                        sx={{my: 2}}
                        fullWidth type="file">
                    </Input>
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
