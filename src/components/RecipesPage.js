import { Card, CardContent, CardMedia, Rating, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance/AxiosInstance";
import { useNavigate } from "react-router-dom";


export default function RecipePage() {

    const navigate = useNavigate();

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axiosInstance.get("/recipe")
            .then(response => {
                console.log(response.data);
                setRecipes(response.data);
        });
    }, []);

    function handleClickOnRecipe(id) {
        navigate("/recipe/" + id);
    }

    return(
        <Container>
            {
                recipes.map((recipe, index) => (
                    <Card onClick={()=>handleClickOnRecipe(recipe.id)} key={index} sx={{margin: '60px', display: 'flex', cursor: 'pointer'}}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                {recipe.name}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                {recipe.description}
                            </Typography>
                            <Rating name="read-only" size="large" value={recipe.rating} readOnly />
                        </CardContent>
                        <CardMedia
                            component="img"
                            sx={{width: 400}}
                            image={recipe["linksToImages"]["0"]}
                        />
                    </Card>
                ))
            }
        </Container>
    );
}