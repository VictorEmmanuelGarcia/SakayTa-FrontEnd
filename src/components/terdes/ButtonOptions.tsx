import { Stack, Button, Container, Box, colors } from "@mui/material";

function ButtonOptions() {
    return(
            <div className="ButtonOptions">
                <Container fixed maxWidth="md">
                    <Stack direction="row" spacing={0} alignItems="center" justifyContent={"center"} height="20vh">
                        <Button id="display-ticket" 
                            variant="text" 
                            size="medium" 
                            sx={{backgroundColor:"#white", width: 250, fontWeight:"600"}}
                            href="/ticket/readticket"  
                            >
                                Display Tickets
                        </Button>
                        <Button id="create-ticket" 
                            variant="text" 
                            size="medium"      
                            sx={{backgroundColor:"white", width: 250, fontWeight:"600"}}                
                            href="/ticket/createticket"                           
                            >
                                Create Ticket                           
                        </Button>
                        <Button id="update-ticket" 
                            variant="text" 
                            size="medium" 
                            sx={{backgroundColor:"#white", width: 250, fontWeight:"600"}}
                            href="/ticket/updateticket"
                            >
                                Update Ticket
                        </Button>
                        <Button id="delete-ticket" 
                            variant="text" 
                            size="medium" 
                            sx={{backgroundColor:"#white", width: 250, fontWeight:"600"}}
                            href="/ticket/deleteticket"
                            >
                                Delete Ticket
                        </Button>
                    </Stack> 
                </Container>                
            </div>
    )
}
export default ButtonOptions;