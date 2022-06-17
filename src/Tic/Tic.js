import React,{useState} from "react"
import Icon from "../Icon/Icon"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import 'bootstrap/dist/css/bootstrap.css';
import { Button, Row, Col, Container, Card, CardBody } from 'reactstrap';

let arr = new Array(9).fill("")
const Tic = ()=>{
      
      let [winnerMessage, setWinnerMessage] = useState("")
      let [turn, setTurn] = useState(true)

      // reload/reset condiotion
        function playAgain(){
            arr.fill("")
            setWinnerMessage("")
            setTurn(true)
        }

      // winlogic 
        function checkWinner(){

            //row 
            if(arr[0]==arr[1] && arr[1]==arr[2] && arr[0]!=""){
                setWinnerMessage(arr[0]+" is the winner")
            }
            else if(arr[3]==arr[4] && arr[4]==arr[5] && arr[3]!=""){
                setWinnerMessage(arr[3]+" is the winner")
            }
            else if(arr[6]==arr[7] && arr[7]==arr[8] && arr[6]!=""){
                setWinnerMessage(arr[6]+" is the winner")
            }

            //column 
            else if(arr[0]==arr[3] && arr[3]==arr[6] && arr[0]!=""){
                setWinnerMessage(arr[0]+" is the winner")
            }
            else if(arr[1]==arr[4] && arr[4]==arr[7] && arr[1]!=""){
                setWinnerMessage(arr[1]+" is the winner")
            }
            else if(arr[2]==arr[5] && arr[5]==arr[8] && arr[2]!=""){
                setWinnerMessage(arr[2]+" is the winner")
            }
            //diagonal
            else if(arr[0]==arr[4] && arr[4]==arr[8] && arr[0]!=""){
                setWinnerMessage(arr[0]+" is the winner")
            }
            else if(arr[2]==arr[4] && arr[4]==arr[6] && arr[2]!=""){
                setWinnerMessage(arr[2]+" is the winner")
            }
            
            else if(arr.indexOf("")==-1){
                setWinnerMessage("Draw")
            }
            

        }

        // turn logic
        function handleClick(index){
             if(winnerMessage){
                return toast.error('Game Over');
             }
             else if(arr[index]!=""){
                return toast.error('Already filled');
             }
             else{
                arr[index] = turn?"cross":"circle"
                setTurn(!turn)
             }
                checkWinner()
        }

        return(
             <Container>
                 <ToastContainer position="bottom-center"/>
                 <Row>
                        <Col md={6} className="offset-md-3"> 
                            {
                                winnerMessage? (
                                    <div>
                                       <h1 className="text-center mb-2 mt-2"> {winnerMessage} </h1>
                                       <Button onClick={playAgain}> Play Again? </Button>
                                     </div>
                                ) : (
                                    <h1 className="text-center mb-2 mt-2" > { turn ? "cross" : "cricle" } 's turn </h1>
                                )
                            }
                            <div className="grid">
                               {
                                arr.map((value,index)=>(
                                    <Card onClick={()=>handleClick(index)}>
                                        <CardBody className="box"> <Icon choice={value} /> </CardBody>
                                    </Card>
                                ))
                               }
                            </div>
                        </Col>
                 </Row>
             </Container>
        )
        
}

export default Tic;