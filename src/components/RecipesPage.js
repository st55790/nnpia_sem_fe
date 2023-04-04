import { Card, CardContent, CardMedia, Rating, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance/AxiosInstance";
import { useNavigate } from "react-router-dom";


export default function RecipePage({ searchTerm }) {

    const navigate = useNavigate();

    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    useEffect(() => {
        axiosInstance.get("/recipe")
            .then(response => {
                setFilteredRecipes(response.data);
            }
        );
    }, [])

    useEffect(() => {
        axiosInstance.get("/recipe")
            .then(response => {
                setRecipes(response.data);
            }
            );

        let filtered = recipes;
        if (searchTerm.size != 0) {
            filtered = recipes.filter(recipe => recipe.name.includes(searchTerm));
        }

        setFilteredRecipes(filtered);

        console.log(searchTerm);
    }, [searchTerm]);

    function handleClickOnRecipe(id) {
        navigate("/recipe/" + id);
    }

    return (
        <Container>
            {
                filteredRecipes.map((recipe, index) => (
                    <Card onClick={() => handleClickOnRecipe(recipe.id)} key={index} sx={{ margin: '60px', display: 'flex', cursor: 'pointer' }}>
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
                            sx={{ width: 400 }}
                            image={`.${recipe["linksToImages"]["0"]}` === null ? `.${recipe["linksToImages"]["0"]}` : '../img/defaultImage.jpg'}
                        />
                    </Card>
                ))
            }
        </Container>
    );
}