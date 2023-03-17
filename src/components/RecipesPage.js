import { Card, CardContent, CardMedia, Rating, Typography } from "@mui/material";
import { Container } from "@mui/system";

export default function RecipePage() {

    const recipes = ["banana", "apple", "tomato", "mango", "peach", "pear", "potato", "onion", "garlic", "cinamon"];

    const handleClickOnRecipe = (event) => {
        console.log(`RECIPE DETAIL-> ${event}`);
    }

    return(
        <Container>
            {
                recipes.map((recipe, index) => (
                    <Card onClick={()=>handleClickOnRecipe(index)} key={index} sx={{margin: '60px', display: 'flex', cursor: 'pointer'}}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                NAME
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Description
                            </Typography>
                            <Rating name="read-only" size="large" value={4.2} readOnly />
                        </CardContent>
                        <CardMedia
                            component="img"
                            sx={{width: 400}}
                            image="/img/brezen.jpg"
                        />
                    </Card>
                ))
            }
        </Container>
    );
}