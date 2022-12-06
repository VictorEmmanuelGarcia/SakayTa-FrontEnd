import { Stack, Button, Container, Box, colors } from "@mui/material";

function ButtonOption() {
    return(
            <div className="ButtonOption">
                <Container fixed maxWidth="md">
                    <Stack direction="row" spacing={0} alignItems="center" justifyContent={"center"} height="20vh">
                        <Button id="display-schedules" 
                            variant="text" 
                            size="medium" 
                            sx={{backgroundColor:"#white", width: 250, fontWeight:"600"}}
                            href="/schedules/readschedule"  
                            >
                                Display Schedules
                        </Button>
                        <Button id="create-schedules" 
                            variant="text" 
                            size="medium"      
                            sx={{backgroundColor:"white", width: 250, fontWeight:"600"}}                
                            href="/schedules/createschedule"                           
                            >
                                Create Schedules                           
                        </Button>
                        <Button id="update-schedules" 
                            variant="text" 
                            size="medium" 
                            sx={{backgroundColor:"#white", width: 250, fontWeight:"600"}}
                            href="/schedules/updateschedule"
                            >
                                Update Schedules
                        </Button>
                        <Button id="delete-schedules" 
                            variant="text" 
                            size="medium" 
                            sx={{backgroundColor:"#white", width: 250, fontWeight:"600"}}
                            href="/schedules/deleteschedule"
                            >
                                Delete Schedules
                        </Button>
                    </Stack> 
                </Container>                
            </div>
    )
}
export default ButtonOption;