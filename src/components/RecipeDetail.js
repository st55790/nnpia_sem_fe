import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance/AxiosInstance";
import { Grid, Rating, Typography } from "@mui/material";

export default function RecipeDetail() {

    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        axiosInstance.get(`/recipe/${id}`)
            .then(result => {
                setRecipe(result.data);
                console.log(result.data);
            }).catch(error => {
                console.log(error);
                window.location.replace("/wrong_request");
            })
    }, []);

    const handleSubmit = (event) => {
        console.log("");
    };



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
                <Container>
                    {recipe !== null ? (
                        <Grid container spacing={2}>
                            <Grid xs={8}>
                                <Typography variant="h1">{recipe.name}</Typography>
                            </Grid>
                            <Grid xs={4}>
                                <Rating name="read-only" size="large" value={recipe.rating} readOnly />
                            </Grid>
                            <Grid xs={6}>
                                <Typography>Počet porcí: {recipe.numberOfPortions}</Typography>
                            </Grid>
                            <Grid xs={6}>
                                <Typography>Doba přípravy: {recipe.prepareTime}</Typography>
                            </Grid>
                            <Grid xs={6}>
                                <Typography variant="h4">Category</Typography>
                                <div>
                                    {recipe.categories.map(element => (
                                        <div>{element.name}</div>
                                    ))}
                                </div>  
                            </Grid>
                            <Grid xs={6}>
                                <Typography variant="h4">Ingredience</Typography>
                                <div>
                                    {recipe.ingredients.map(element => (
                                        <div>{element.name}</div>
                                    ))}
                                </div>  
                            </Grid>
                            <Grid xs={12}>
                                <Typography variant="h5">Postup</Typography>
                                <Typography>{recipe.procedure}</Typography>
                            </Grid>
                        </Grid>
                    ) : <></>}
                </Container>
            </Box>
        </Container>
    );
}