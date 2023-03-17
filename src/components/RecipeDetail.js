import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function RecipeDetail() {
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
                <Button color='primary' action={handleSubmit}>BUTTON</Button>
            </Box>
        </Container>
    );
}