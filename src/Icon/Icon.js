import {FaRegCircle,FaPen,FaTimes} from "react-icons/fa";

const Icon = ({choice}) => {
    switch(choice){
        case "circle":
            return <FaRegCircle/>
        case "cross":
            return <FaTimes/>
        default:
            return <FaPen/>
     }
}

export default Icon;