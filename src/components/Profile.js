import { Grid, IconButton, List, ListItem, Typography } from "@mui/material";
import { Container } from "@mui/system";
import * as React from 'react';
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';


export default function Profile() {
    
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    function generate(element) {
        return [0, 1, 2, 3].map((value) =>
            React.cloneElement(element, {
                key: value,
            }),
        );
    }

    function handleCreateRecipe(params) {
        console.log("Creeate new recipe");        
    }

    const Demo = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
    }));

    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);


    return (
        <Container component="main" sx={{padding: '50px'}}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6} onClick={()=>handleCreateRecipe()}>
                    <Item onClick={() => handleCreateRecipe()} sx={{ background: '#3b8ad9', cursor: 'pointer' }}>
                        <Typography>Moje recepty</Typography>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item sx={{background: '#3b8ad9'}}>
                        <Typography>Oblíbené recepty</Typography>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <Demo>
                            <List dense={dense}>
                                {generate(
                                    <ListItem
                                        secondaryAction={
                                            <Container>
                                                <IconButton>
                                                    <VisibilityIcon/>
                                                </IconButton>
                                                <IconButton edge="end">
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Container>
                                        }
                                    >
                                        <ListItemText
                                            primary="Single-line item"
                                            secondary={secondary ? 'Secondary text' : null}
                                        />
                                    </ListItem>,
                                )}
                            </List>
                        </Demo>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <Demo>
                            <List dense={dense}>
                                {generate(
                                    <ListItem
                                        secondaryAction={
                                            <Container justifyContent="end" sx={{justifyContent: 'space-between'}}>
                                                <IconButton>
                                                    <VisibilityIcon />
                                                </IconButton>
                                                <IconButton edge="end">
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Container>
                                        }
                                    >
                                        <ListItemText
                                            primary="Single-line item"
                                            secondary={secondary ? 'Secondary text' : null}
                                        />
                                    </ListItem>,
                                )}
                            </List>
                        </Demo>
                    </Item>
                </Grid>
            </Grid>
        </Container>
    );
}